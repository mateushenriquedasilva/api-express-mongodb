const express = require("express");
const routes = express.Router();

const PORT = 3333;

const VideoController = require("./controllers/VideoController");

routes.get("/", (request, response) =>
  response.send(
    `<h1>API⚡</h1> <a href="http://localhost:${PORT}/videos">Videos</a>`
  )
);

routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);

module.exports = routes;
