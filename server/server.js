import express from "express";
import dbConfig from "./config/dbConfig.js";

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
