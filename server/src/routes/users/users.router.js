const express = require("express");
const usersRouter = express.Router();
const {httpGetGoogleProfile} = require('./users.controller')
usersRouter.get('/reg', httpGetGoogleProfile)

module.exports = usersRouter;