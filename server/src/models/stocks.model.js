const Stock = require("./stocks.mongo");
const axios = require("axios");
const yahooFinance = require("yahoo-finance");

async function YfDataQuote(symbol) {
  yahooFinance.quote(
    {
      symbol: symbol,
      module: ["price"],
    },
    await function (err, quote) {
      const stock = {
        symbol: symbol,
        price: quote.price.regularMarketPrice,
        changePercent: quote.price.regularMarketChangePercent * 100,
        previousClose: quote.price.regularMarketPreviousClose,
      };
      return stock;
    }
  );
}
async function DailyGetMarketIndex(symbol) {
  yahooFinance.quote(
    {
      symbol: symbol,
      module: ["price"],
    },
    await function (err, quote) {
      const stock = {
        symbol: symbol,
        price: quote.price.regularMarketPrice,
        changePercent: quote.price.regularMarketChangePercent * 100,
        previousClose: quote.price.regularMarketPreviousClose,
      };
      if (err) {
        console.log("Problem Getting Market Index.");
        throw new Error("Getting Market Index Fail.");
      }
      SaveToDatabase(stock);
    }
  );
}

async function SaveToDatabase(stock) {
  const stockToSave = new Stock({
    symbol: stock.symbol,
    price: stock.price,
    changePercent: stock.changePercent,
    previousClose: stock.previousClose,
  });
  await stockToSave.save();
}

async function loadMarketIndexInit() {
  const UISymbolList = ["^GSPC", "^DJI", "^IXIC"];
  UISymbolList.forEach(async (uisymbol) => {
    const findExistData = await findMarketIndex({
      symbol: uisymbol,
    });
    if (findExistData) {
      console.log(`Market Index Data - ${uisymbol} already initialized`);
    } else {
      console.log(`Getting ${uisymbol} Data...`);
      await DailyGetMarketIndex(uisymbol);
    }
  });
}
async function updateDailyMarketIndex() {
  const UISymbolList = ["^GSPC", "^DJI", "^IXIC"];
  UISymbolList.forEach((uisymbol) => {
    const stock = YfDataQuote(uisymbol);
    const stockFilter = { symbol: uisymbol };
    const findingresult = findMarketIndex(stockFilter);
    if (!findingresult) {
      console.log("Cannot Update Daily Market Index..");
    } else {
      const updateStatus = UpdateExistedMi(stockFilter, stock);
      if (updateStatus) {
        console.log(`Daily Market Index - ${uisymbol} Updated...`);
      }
    }
  });
}
async function findMarketIndex(filter) {
  return await Stock.findOne(filter);
}
async function UpdateExistedMi(filter, update) {
  return await Stock.findOneAndUpdate(filter, update);
}

module.exports = {
  loadMarketIndexInit,
  updateDailyMarketIndex,
  findMarketIndex,
};
