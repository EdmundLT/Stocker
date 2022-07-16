const http = require("http");
require("dotenv").config();
const { mongoConnect } = require("./services/mongo");
const {loadMarketIndexInit, updateDailyMarketIndex } = require("./models/stocks.model")
const {CreateUser} = require('./models/users.model')
const {loadNews} = require('./models/news.model')
const {app} = require("./app");
const PORT = process.env.PORT || 8000;
const SERVER = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadMarketIndexInit();
    await updateDailyMarketIndex();
    await loadNews();
    // await CreateUser();
  SERVER.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
