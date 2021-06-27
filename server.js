"use strict";
const express = require("express");
const app = express();
const badRequestHandler = require("./error-handlers/500");
const notFoundHandler = require("./error-handlers/404");
const start = (port) => {
  app.listen(port, () =>
    console.log(`http://localhost:${port}\n`, `Listening on Port ${port}`)
  );
};
app.get("/", (req, res) => {
  res.send("Alive and Kicking!");
});
app.get("/old", (req, res) => {
  throw new Error("Unexpected Error");
});
app.use("*", notFoundHandler);
app.use(badRequestHandler);

module.exports = {
  app: app,
  start: start,
};
