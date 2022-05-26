const axios = require("axios");
const cheerio = require("cheerio");

const base_url = "https://islamansiklopedisi.org.tr";

module.exports = async (req, response) => {
  const word = encodeURI(req.query.word);
  if (!word) response.status(200).json({ error: "no word given" });

  const url = `${base_url}/ajax_search_auto.php?sp=aa&=ac&q=${word}&_=1653504644493`;
  axios
    .get(url)
    .then((res) => res.data)
    .then((res) => {
      const c = cheerio.load(res);

      if (c(".no-res")[0]) {
        response.status(200).json({ error: "no result" });
        return;
      }

      const nbsp = String.fromCharCode(160);
      const link = c(".alist a")[0].attribs.href;
      const word = c(".sr-title")[0].children[0].data.toString().split(nbsp);
      const word0 = word[0][0] + word[0].slice(1).toLowerCase();
      const word1 = word[1] ? word[1] : null;
      const desc = c(".sr-desc")[0]?.children[0]?.data.toString(); //sr-atif-desc

      response.status(200).json({
        word: word0,
        ar_script: word1,
        desc: desc ? desc : null,
        url: base_url + link,
      });
    });
};
