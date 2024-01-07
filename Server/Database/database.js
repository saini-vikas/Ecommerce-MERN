import mongoose from "mongoose";

async function databaseConnection(callback) {
  try {
    await mongoose
      .connect(process.env.MONGO_CONNECTION_STRING, {
        dbName: process.env.DB_NAME,
      })
      .then(() => {
        console.log("Connected to MongoDB database");
        callback(); // app.listen function passed to run the app after the connection is establisheds
      });
  } catch (e) {
    console.error("Error connecting to MongoDB database");
    console.log(e);
  }
}

export default databaseConnection;
