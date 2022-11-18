const axios = require("axios");
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

const SECRET = '@d*jcsrS!U+16eHoZGu"_}X{m<Q49W';

module.exports = (req, res) => {
  if (req.method === "POST") {
    const { body } = req;
    res.json(JSON.parse(decrypt(body)));
  }

  let name = req.query.name;
  if (name) {
    name = encodeURI(req.query.name);
    resp(
      `https://www.nisanyanadlar.com/api/names/${name}?gender=all&session=a5ff25e2-8188-47e4-8fec-7cf65ef64e01`
    );
  } else {
    resp(`https://www.nisanyanadlar.com/api/home`);
  }

  function resp(url) {
    axios
      .get(url)
      .then((response) => res.json(JSON.parse(decrypt(response.data))))
      .catch((error) => console.log("error", error));
  }
};

function decrypt(txt) {
  return AES.decrypt(txt, SECRET).toString(Utf8);
}
