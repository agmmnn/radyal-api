import axios from "axios";

import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

import secrets from "../api/_secrets.json" assert { type: "json" };
const SECRET_APP = secrets.nis_app_secret;
const SECRET_NAME = secrets.nis_name_secret;

/**
 * @swagger
 * /api/nisanyan-decrypt:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 *
 */
/**
 * @swagger
 * /api/nisanyan-decrypt:
 *   post:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 *
 */

export default async (req, res) => {
  if (req.method === "POST") {
    // POST http://localhost:3000/api/nisanyan-decrypt <-[encrypted body]
    // https://www.nisanyansozluk.com/api/words/sanat?session=1
    const { body } = req;
    console.log(body);
    JSON.parse(decrypt(body.toString(), SECRET_NAME));
  }

  const get_data = async (url, secret) => {
    const data = await axios.get(url);
    const result = await decrypt(data.data, secret);
    return await JSON.parse(result);
  };

  let word = req.query.word;
  if (word) {
    // word request
    // http://localhost:3000/api/nisanyan-decrypt?word=sanat
    word = encodeURI(req.query.word);
    const url = `https://www.nisanyansozluk.com/api/words/${word}?session=1`;
    const data = await get_data(url, SECRET_NAME);
    await res.json(data);
  } else if (req.query.url) {
    // url request
    // http://localhost:3000/api/nisanyan-decrypt?url=<encoded_url>
    const url = decodeURIComponent(
      req.url.split("/api/nisanyan-decrypt?url=")[1]
    );
    const data = await get_data(url, SECRET_NAME);
    await res.json(data);
  } else {
    // home request
    // http://localhost:3000/api/nisanyan-decrypt
    const data = await axios.get(`https://www.nisanyansozluk.com/api/home`);
    await res.json(data.data);
  }
};

async function decrypt(txt, secret) {
  return await AES.decrypt(txt, secret).toString(Utf8);
}
