import dotenv from "dotenv";
import express from "express";
dotenv.config();
import cors from "cors";
import databaseConnection from "./Database/database.js";
import productsRoute from "./Routes/products.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use("/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Welcome");
});

function runApp() {
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
  });
}

databaseConnection(runApp);
