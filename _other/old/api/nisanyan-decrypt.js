const axios = require("axios");
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

import { nis_app_secret, nis_name_secret } from "../api/_secrets.json";
const SECRET_APP = nis_app_secret;
const SECRET_NAME = nis_name_secret;

module.exports = (req, res) => {
  if (req.method === "POST") {
    // POST http://localhost:3000/api/nisanyan-decrypt <-[encrypted body]
    // https://www.nisanyansozluk.com/api/words/sanat?session=1
    const { body } = req;
    console.log(body);
    res.json(JSON.parse(decrypt(body.toString(), SECRET_NAME)));
  }

  const get_data = async (url, SECRET_APP) => {
    return axios
      .get(url)
      .then((response) => JSON.parse(decrypt(response.data, SECRET_APP)))
      .catch((error) => console.log(error));
  };

  let word = req.query.word;
  if (word) {
    // word request
    // http://localhost:3000/api/nisanyan-decrypt?word=sanat
    word = encodeURI(req.query.word);
    const url = `https://www.nisanyansozluk.com/api/words/${word}?session=1`;
    get_data(url, SECRET_NAME).then((resp) => res.json(resp));
  } else if (req.query.url) {
    // url request
    // http://localhost:3000/api/nisanyan-decrypt?url=<encoded_url>
    const url = decodeURIComponent(
      req.url.split("/api/nisanyan-decrypt?url=")[1]
    );
    console.log(url);
    get_data(url, SECRET_NAME).then((resp) => {
      res.json(resp);
    });
  } else {
    // home request
    // http://localhost:3000/api/nisanyan-decrypt
    axios
      .get(`https://www.nisanyansozluk.com/api/home`)
      .then((response) => res.json(response.data))
      .catch((error) => console.log("error", error));
  }

  function decrypt(txt, SECRET_APP) {
    return AES.decrypt(txt, SECRET_APP).toString(Utf8);
  }
};
