const express = require("express");
const {
  httpGetStockPriceBySymbol,
  httpGetMiFrmDb,
} = require("./stocks.controller");
const stocksRouter = express.Router();
stocksRouter.get("/:symbol", httpGetStockPriceBySymbol);
stocksRouter.get("/db/:symbol", httpGetMiFrmDb)
module.exports = stocksRouter;
