const News = require("./news.mongo");
const axios = require("axios");
require("dotenv").config();
const DEMO_URL =
  "https://eodhistoricaldata.com/api/news?api_token=demo&s=AAPL.US&offset=0&limit=10";
const NEWS_URL = "https://eodhistoricaldata.com/api/news?";
async function NewsQuoteAPI() {
  await axios.get(DEMO_URL).then(function (response) {
    // handle success
    const newsList = response.data;
    console.log(newsList);
    newsList.forEach((news) => {
      const newsToSave = {
        date: news.date,
        title: news.title,
        content: news.content,
        link: news.link,
        symbols: news.symbols,
      };

      SaveToDatabase(newsToSave);
    });
  });
}

async function SaveToDatabase(news) {
  const newsReadyToSave = new News({
    date: news.date,
    title: news.title,
    content: news.content,
    link: news.link,
    symbols: news.symbols,
  });
  await newsReadyToSave.save();
}

async function loadNews() {
  await NewsQuoteAPI();
  // const UISymbolList = ["^GSPC", "^DJI", "^IXIC"];
  // UISymbolList.forEach(async (uisymbol) => {
  //   const findExistData = await findMarketIndex({
  //     symbol: uisymbol,
  //   });
  //   if (findExistData) {
  //     console.log(`Market Index Data - ${uisymbol} already initialized`);
  //   } else {
  //     console.log(`Getting ${uisymbol} Data...`);
  //     await DailyGetMarketIndex(uisymbol);
  //   }
  // });
}

async function findOneNews(filter) {
  News.findOne(filter).then((result) => {
    if (result) {
      return true;
    } else {
      return false;
    }
  });
}

async function GetNewsFromDB() {
  News.find().then((result) => {
    return result;
  });
}

module.exports = {
  loadNews,
  GetNewsFromDB,
};
