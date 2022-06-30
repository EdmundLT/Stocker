const yahooFinance = require("yahoo-finance");
const { findMarketIndex } = require("../../models/stocks.model");
const Stock = require("../../models/stocks.mongo")
function httpGetStockPriceBySymbol(req, res) {
  const symbol = req.params.symbol;
  yahooFinance.quote(
    {
      symbol: symbol,
      module: ["price"],
    },
    function (err, quote) {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: err,
        });
      }
      return res.status(200).json({
        symbol: symbol,
        status: "success",
        price: quote.price.regularMarketPrice,
        percentage: quote.price.regularMarketChangePercent * 100,
      });
    }
  );
}

function httpGetMiFrmDb (req, res) {
  const stockSymbol = req.params.symbol;
  const filter = {symbol: stockSymbol} 
  console.log(req.params.symbol);
  Stock.findOne(filter).then((stockResult)=> {
    if(!stockResult){
        return res.status(404).json({
            status: 404,
            error: "Page not found"
        })
    }
    res.json({
        symbol: stockResult.symbol,
        price: stockResult.price,
        percent: stockResult.changePercent
    })
  })
}
module.exports = {
  httpGetStockPriceBySymbol,
  httpGetMiFrmDb
};
