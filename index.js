/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const importRoute = require("");

const port = 4000;

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://jackcoul:1558@cluster0.rbezt.mongodb.net/NewProductsShop`
  )
  .then(() => {
    console.log("Соединение с монго установлено");
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  });
