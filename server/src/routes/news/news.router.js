const express = require("express");
const 
{httpGetNewsByKeyword,
    httpGetNewsFromDB
} = require("./news.controller");
const newsRouter = express.Router();
newsRouter.get("/:keyword", httpGetNewsByKeyword);
newsRouter.get("/db/demo", httpGetNewsFromDB);
module.exports = newsRouter;
