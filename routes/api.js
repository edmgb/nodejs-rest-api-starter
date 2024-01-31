const express = require("express");
const greetingRouter = require("./greeting");

const app = express();
app.use("/greeting/", greetingRouter);

module.exports = app;