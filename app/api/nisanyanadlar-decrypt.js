import axios from "axios";

import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

import secrets from "../api/_secrets.json" assert { type: "json" };
const SECRET_AD_APP = secrets.nisad_app_secret;
const SECRET_AD_NAME = secrets.nisad_name_secret;

/**
 * @swagger
 * /api/nisanyanadlar-decrypt:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 *
 */
/**
 * @swagger
 * /api/nisanyanadlar-decrypt:
 *   post:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 *
 */

export default async (req, res) => {
  // POST request, encrypted body
  // https://www.nisanyanadlar.com/api/names/Deniz?gender=all&session=1
  if (req.method === "POST") {
    const { body } = req;
    res.json(JSON.parse(decrypt(body, SECRET_AD_NAME)));
  }

  const get_data = async (url) => {
    const header = { headers: { "Accept-Encoding": "*" } };
    const data = await axios.get(url, header);
    return data.data;
  };

  let name = req.query.name;
  if (name) {
    // name request
    // http://localhost:3000/api/nisanyanadlar-decrypt?name=Tigin
    name = encodeURI(req.query.name);
    // url = `https://www.nisanyanadlar.com/api/names/${name}?gender=all&session=1`;
    const url = `https://www.nisanyanadlar.com/_next/data/${secrets.nisad_url_sub}/isim/${name}.json?name=${name}`;
    const data = await get_data(url);
    if (data.pageProps.isUnsuccessful == false) {
      let newData = data;
      const names = await decrypt(data.pageProps.names, SECRET_AD_NAME);
      const referredNames = await decrypt(
        data.pageProps.referredNames,
        SECRET_AD_NAME
      );
      newData.pageProps.names = JSON.parse(names);
      newData.pageProps.referredNames = referredNames;
      await res.json(newData);
    } else {
      await res.json(data);
    }
  } else {
    // home request
    // http://localhost:3000/api/nisanyanadlar-decrypt
    const data = await get_data("https://www.nisanyanadlar.com/api/cache");
    const result = await decrypt(data, SECRET_AD_APP);
    await res.json(result);
  }
};

async function decrypt(txt, secret) {
  if (!SECRET_AD_NAME) {
    return txt;
  }
  return await AES.decrypt(txt, secret).toString(Utf8);
}
