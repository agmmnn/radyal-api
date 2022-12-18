const axios = require("axios");
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

import {
  nisad_app_secret,
  nisad_name_secret,
  nisad_url_sub,
} from "../api/_secrets.json";
const SECRET_AD_APP = nisad_app_secret;
const SECRET_AD_NAME = nisad_name_secret;

module.exports = (req, res) => {
  // POST request, encrypted body
  // https://www.nisanyanadlar.com/api/names/Deniz?gender=all&session=1
  if (req.method === "POST") {
    const { body } = req;
    res.json(JSON.parse(decrypt(body, SECRET_AD_NAME)));
  }

  const get_data = async (url, secret) => {
    return axios
      .get(url, { headers: { "Accept-Encoding": "*" } })
      .then((response) => {
        res.json(JSON.parse(decrypt(response.data.pageProps.names, secret)));
      })
      .catch((error) => console.log(error));
  };
  let name = req.query.name;
  if (name) {
    // name request
    // http://localhost:3000/api/nisanyanadlar-decrypt?name=Tigin
    name = encodeURI(req.query.name);
    // url = `https://www.nisanyanadlar.com/api/names/${name}?gender=all&session=1`;
    const url = `https://www.nisanyanadlar.com/_next/data/${nisad_url_sub}/isim/${name}.json?name=${name}`;
    get_data(url, SECRET_AD_NAME).then((resp) => {
      res.json(resp);
    });
  } else if (req.query.url) {
    // url request
    // http://localhost:3000/api/nisanyanadlar-decrypt?url=<encoded_url>
    const url = decodeURIComponent(
      req.url.split("/api/nisanyanadlar-decrypt?url=")[1]
    );
    console.log(url);

    try {
      get_data(url, SECRET_AD_NAME).then((resp) => {
        res.json(resp);
      });
    } catch (err) {
      console.log(err);
    }
    try {
      get_data(url, SECRET_AD_APP).then((resp) => {
        res.json(resp);
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    // home request
    // http://localhost:3000/api/nisanyanadlar-decrypt
    axios
      .get("https://www.nisanyanadlar.com/api/cache", {
        headers: { "Accept-Encoding": "*" },
      })
      .then((response) => {
        res.json(JSON.parse(decrypt(response.data, SECRET_AD_APP)));
      })
      .catch((error) => console.log(error));
  }

  function decrypt(txt, secret) {
    return AES.decrypt(txt, secret).toString(Utf8);
  }
};
