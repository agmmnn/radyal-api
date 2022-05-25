module.exports = async (req, res) => {
  const word = req.query.word;
  if (word) {
    const db = await connectToDatabase();
    const coll = await db.collection("thesaurus_tr");
    await coll.findOne({ word: word }, (err, result) => {
      if (err) throw err;
      if (result) {
        delete result._id;
        res.status(200).json(result);
      } else {
        res.status(200).json({ msg: "not found" });
      }
    });
  } else {
    res.status(200).json({ error: "no word given" });
  }
};

const MongoClient = require("mongodb").MongoClient;

let cachedDb = null;

const connectToDatabase = async () => {
  if (cachedDb) {
    console.log("Use existing connection");
    return Promise.resolve(cachedDb);
  } else {
    return MongoClient.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    })
      .then((client) => {
        let db = client.db("thesaurus_tr");
        console.log("New Database connection");
        cachedDb = db;
        return cachedDb;
      })
      .catch((error) => {
        console.log("MongoDB connection error: " + error);
      });
  }
};
