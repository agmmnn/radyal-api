const axios = require("axios").default;
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

const SECRET = '#d*jcsrS!U+16eHoZGu"_}X{m<Q49W';
const SESSION_ID = "604920fa-c61e-4107-bf5d-2c6e87791805";

module.exports = (req, res) => {
  let word = req.query.word;
  if (word) {
    word = encodeURI(req.query.word);
    let resp;
    axios
      .get(
        `https://www.nisanyansozluk.com/api/words/${word}?session=${SESSION_ID}`
      )
      .then((response) => (resp = response.data))
      .then(() => res.json(JSON.parse(decrypt(resp))))
      .catch((error) => console.log("error", error));
  } else if (req.query.text) {
    const text = req.query.text;
    res.json({ output: decrypt(text) });
  } else {
    res.json({ output: "No word or text given" });
  }
};

function decrypt(txt) {
  return AES.decrypt(txt, SECRET).toString(Utf8);
}
