const express = require("express");
const {
  httpGetStockPriceBySymbol,
  httpGetMiFrmDb,
  httpGetapi,
} = require("./stocks.controller");
const stocksRouter = express.Router();
stocksRouter.get("/:symbol", httpGetStockPriceBySymbol);
stocksRouter.get("/db/:symbol", httpGetMiFrmDb)
stocksRouter.get("/", httpGetapi)
module.exports = stocksRouter;
