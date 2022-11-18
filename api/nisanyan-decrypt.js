const axios = require("axios");
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

const SECRET = 'dfa{st5W@#!%&!"dcbhJDS%7022Fs5';

module.exports = (req, res) => {
  if (req.method === "POST") {
    const { body } = req;
    res.json(JSON.parse(decrypt(body)));
  }

  let word = req.query.word;
  if (word) {
    word = encodeURI(req.query.word);
    axios
      .get(
        `https://www.nisanyansozluk.com/api/words/${word}?session=9d78061f-3b58-432b-b8ec-d553b878d622`
      )
      .then((response) => res.json(JSON.parse(decrypt(response.data))))
      .catch((error) => console.log("error", error));
  } else {
    axios
      .get(`https://www.nisanyansozluk.com/api/home`)
      .then((response) => res.json(response.data))
      .catch((error) => console.log("error", error));
  }
};

function decrypt(txt) {
  return AES.decrypt(txt, SECRET).toString(Utf8);
}
