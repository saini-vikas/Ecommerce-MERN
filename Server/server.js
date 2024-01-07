import dotenv from "dotenv";
import express from "express";
dotenv.config();
import databaseConnection from "./Database/database.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

function runApp() {
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
  });
}

databaseConnection(runApp);
