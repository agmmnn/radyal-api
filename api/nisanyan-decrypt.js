const axios = require("axios");
const CryptoJS = require("crypto-js");
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

const SECRET = 'v03_ggh"fgjsa"{gffszXg}31S!AdX';
const SECRET2 = 'fdfd_{fdgfds4@"dfg"}VbvxXSfd4Z';

module.exports = (req, res) => {
  // POST request, encrypted body
  // https://www.nisanyansozluk.com/api/words/sanat?session=1
  if (req.method === "POST") {
    const { body } = req;
    console.log(body);
    res.json(JSON.parse(decrypt(body.toString(), SECRET2)));
  }

  let word = req.query.word;
  if (word) {
    word = encodeURI(req.query.word);
    axios
      .get(`https://www.nisanyansozluk.com/api/words/${word}?session=1`)
      .then((response) => res.json(JSON.parse(decrypt(response.data, SECRET2))))
      .catch((error) => {
        console.log("error", error);
        res.json({ error: error.toString() });
      });
  } else {
    axios
      .get(`https://www.nisanyansozluk.com/api/home`)
      .then((response) => res.json(response.data))
      .catch((error) => console.log("error", error));
  }

  function decrypt(txt, secret) {
    return AES.decrypt(txt, secret).toString(Utf8);
  }
};
