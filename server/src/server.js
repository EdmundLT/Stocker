const http = require("http");
require("dotenv").config();
const { mongoConnect } = require("./services/mongo");
const {loadMarketIndexInit, updateDailyMarketIndex } = require("./models/stocks.model")
const app = require("./app");
const PORT = process.env.PORT || 8000;
const SERVER = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadMarketIndexInit();
    await updateDailyMarketIndex();
  SERVER.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
