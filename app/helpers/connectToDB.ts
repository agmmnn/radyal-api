import { MongoClient } from "mongodb";
let cachedDb = null;

export const connectToDatabase = async (dbname: string) => {
  if (cachedDb) {
    console.log("Use existing connection");
    return Promise.resolve(cachedDb);
  } else {
    return MongoClient.connect(process.env.MONGODB_URI)
      .then((client) => {
        let db = client.db(dbname);
        console.log("New Database connection");
        cachedDb = db;
        return cachedDb;
      })
      .catch((error) => {
        console.log("MongoDB connection error: " + error);
      });
  }
};
