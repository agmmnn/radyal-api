const axios = require("axios").default;
const AES = require("crypto-js/aes");
const Utf8 = require("crypto-js/enc-utf8");

// https://radyal-api-nodejs.vercel.app/api/nisdec?word=kaynak

module.exports = (req, res) => {
  if (req.query.word) {
    let resp;
    const sId = "604920fa-c61e-4107-bf5d-2c6e87791805";
    const word = encodeURI(req.query.word);
    axios
      .get(`https://www.nisanyansozluk.com/api/words/${word}?session=${sId}`)
      .then((response) => (resp = response.data))
      .then(() => res.json(JSON.parse(decrypt(resp))))
      // .then(() => output(JSON.parse(decrypt(resp))))
      .catch((error) => console.log("error", error));
  } else if (req.query.text) {
    const text = req.query.text;
    res.json({ output: decrypt(text) });
  } else {
    res.json({ output: "No word or text given" });
  }
};

function decrypt(txt) {
  let key = '#d*jcsrS!U+16eHoZGu"_}X{m<Q49W';
  let str = AES.decrypt(txt, key).toString(Utf8);
  return str;
}

function output(str) {
  if (str.isUnsuccessful === false) {
    console.log(str);
  } else {
    for (let i = 0; i < str.fiveBefore.length; i++) {
      console.log(str.fiveBefore[i].name);
    }
    console.log(str.words[0].name);
    for (let i = 0; i < str.fiveAfter.length; i++) {
      console.log(str.fiveAfter[i].name);
    }
  }
}
