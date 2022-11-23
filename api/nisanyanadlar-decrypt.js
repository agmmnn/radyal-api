const axios = require("axios");
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

const SECRET_app = 'RFfss@{4_232D"vgsS"5}_@455dzZh';
const SECRET_name = "fgdRT%{@259cvzzE_sd!}dfcj_vxXq";

module.exports = (req, res) => {
  // POST request, encrypted body
  // https://www.nisanyanadlar.com/api/names/Deniz?gender=all&session=1
  if (req.method === "POST") {
    const { body } = req;
    res.json(JSON.parse(decrypt(body, SECRET_name)));
  }

  const get_data = async (url, secret) => {
    return axios
      .get(url)
      .then((response) => JSON.parse(decrypt(response.data, secret)))
      .catch((error) => console.log(error));
  };

  let name = req.query.name;
  if (name) {
    // name request
    // http://localhost:3000/api/nisanyanadlar-decrypt?name=Tigin
    name = encodeURI(req.query.name);
    url = `https://www.nisanyanadlar.com/api/names/${name}?gender=all&session=1`;
    get_data(url, SECRET_name).then((resp) => {
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
      get_data(url, SECRET_name).then((resp) => {
        res.json(resp);
      });
    } catch (err) {
      console.log(err);
    }
    try {
      get_data(url, SECRET_app).then((resp) => {
        res.json(resp);
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    // home request
    // http://localhost:3000/api/nisanyanadlar-decrypt
    get_data("https://www.nisanyanadlar.com/api/home", SECRET_app).then(
      (resp) => res.json(resp)
    );
  }

  function decrypt(txt, secret) {
    return AES.decrypt(txt, secret).toString(Utf8);
  }
};
