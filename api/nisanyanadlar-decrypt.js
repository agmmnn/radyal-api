const axios = require("axios");
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");
const Latin1 = require("crypto-js/enc-latin1");

const SECRET_app = 'RFfss@{4_232D"vgsS"5}_@455dzZh';
const SECRET_name = "fgdRT%{@259cvzzE_sd!}dfcj_vxXq";

module.exports = (req, res) => {
  // POST request, encrypted body
  // https://www.nisanyanadlar.com/api/names/Deniz?gender=all&session=1
  if (req.method === "POST") {
    const { body } = req;
    res.json(JSON.parse(decrypt(body, SECRET_name)));
  }

  let name = req.query.name;
  if (name) {
    name = encodeURI(req.query.name);
    url = `https://www.nisanyanadlar.com/api/names/${name}?gender=all&session=1`;
    axios
      .get(url)
      .then((response) =>
        res.json(JSON.parse(decrypt(response.data, SECRET_name)))
      )
      .catch((error) => console.log("error", error));
  } else {
    axios
      .get("https://www.nisanyanadlar.com/api/home")
      .then((response) =>
        res.json(JSON.parse(decrypt(response.data, SECRET_app)))
      )
      .catch((error) => console.log("error", error));
  }

  function decrypt(txt, secret) {
    return AES.decrypt(txt, secret).toString(Utf8);
  }
};
