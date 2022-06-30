const express = require("express");
const stocksRouter = require('./stocks/stocks.router');

const api = express.Router();
api.use("/stocks", stocksRouter);
module.exports = api;