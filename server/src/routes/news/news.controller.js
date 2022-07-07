const axios = require("axios");
const { GetNewsFromDB } = require("../../models/news.model");
const News = require('../../models/news.mongo')
async function httpGetNewsByKeyword(req, res) {
  const DEMO_URL =
    "https://eodhistoricaldata.com/api/news?api_token=demo&s=AAPL.US&offset=0&limit=3";
  axios
    .get(DEMO_URL)
    .then(function (response) {
      // handle success
      res.send(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
async function httpGetNewsFromDB(req, res) {
  News.find().then((result)=>{
    res.json({
      result
    })
  })
}

module.exports = {
  httpGetNewsByKeyword,
  httpGetNewsFromDB
};
