const express = require("express");
const stocksRouter = require('./stocks/stocks.router');
const newsRouter = require('./news/news.router');
const usersRouter = require('./users/users.router')
const api = express.Router();
api.use("/stocks", stocksRouter);
api.use("/news", newsRouter);
api.use('/user', usersRouter)

module.exports = api;