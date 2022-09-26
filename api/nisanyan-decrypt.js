const axios = require("axios").default;
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

const SECRET = 'dfa{st5W@#!%&!"dcbhJDS%7022Fs5';
const SESSION_ID = "9d78061f-3b58-432b-b8ec-d553b878d622";

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
