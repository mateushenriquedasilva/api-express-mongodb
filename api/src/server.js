const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 3333;

app.use(routes);

app.listen(PORT, () =>
  console.log(`Express started at http://localhost:${PORT}`)
);