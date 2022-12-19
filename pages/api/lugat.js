import { MongoClient } from "mongodb";

/**
 * @swagger
 * /api/lugat:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */

let cachedDb = null;

export default async (req, res) => {
  const word = req.query.word;
  if (word) {
    const db = await connectToDatabase();
    const coll = await db.collection("lugat");
    try {
      const result = await coll.findOne({
        $or: [{ word: word }, { other_forms: word }, { ar_script: word }],
      });
      delete result._id;
      await res.status(200).json(result);
    } catch {
      await res.status(200).json({ error: "error" });
    }
  } else {
    await res.status(200).json({ error: "no word given" });
  }
};

const connectToDatabase = async () => {
  if (cachedDb) {
    console.log("Use existing connection");
    return Promise.resolve(cachedDb);
  } else {
    return MongoClient.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    })
      .then((client) => {
        let db = client.db("lugat");
        console.log("New Database connection");
        cachedDb = db;
        return cachedDb;
      })
      .catch((error) => {
        console.log("MongoDB connection error: " + error);
      });
  }
};
