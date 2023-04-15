import axios from "axios";
if (process.env.NODE_ENV !== "production") console.log(axios);

import AES from "crypto-js/aes.js";
import Utf8 from "crypto-js/enc-utf8.js";

import secrets from "../api/_secrets.json" assert { type: "json" };
const SECRET_AD_APP = secrets.nisad_app_secret;
const SECRET_AD_NAME = secrets.nisad_name_secret;

export default (req, res) => {
  // POST request, encrypted body
  // https://www.nisanyanadlar.com/api/names/Deniz?gender=all&session=1
  if (req.method === "POST") {
    const { body } = req;
    res.json(JSON.parse(decrypt(body, SECRET_AD_NAME)));
  }

  const options = {
    headers: { "Accept-Encoding": "*" },
    timeout: {
      send: 3500,
    },
  };

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
    const url = `https://www.nisanyanadlar.com/_next/data/${secrets.nisad_url_sub}/isim/${name}.json?name=${name}`;
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
      .get("https://www.nisanyanadlar.com/api/cache")
      .then((response) => {
        res.json(JSON.parse(decrypt(response.data, SECRET_AD_APP)));
      })
      .catch((error) => console.log(error));
  }

  function decrypt(txt, secret) {
    return AES.decrypt(txt, secret).toString(Utf8);
  }
};
