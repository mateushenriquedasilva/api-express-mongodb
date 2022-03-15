const express = require("express");
const routes = express.Router();
routes.get("/", (request, response) => response.send(`API⚡`));

module.exports = routes;