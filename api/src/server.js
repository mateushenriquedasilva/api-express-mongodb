require("dotenv").config();

const express = require("express");
// mongoDB
const mongoose = require("mongoose");

const routes = require("./routes");
const connectToDatabase = require("./database");

connectToDatabase();

const app = express();
const PORT = 3333;

app.use(routes);

app.listen(PORT, () =>
  console.log(`Express started at http://localhost:${PORT}`)
);
