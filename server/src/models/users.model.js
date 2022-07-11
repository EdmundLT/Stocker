const User = require("./users.mongo");
const axios = require("axios");
require("dotenv").config();

async function CreateUser() {
  user = {
    username: "Testing",
    watchlist: ["AAPL", "TSLA", "TSM"],
  };
  SaveToDatabase(user)
}

async function SaveToDatabase(user) {
  const userToSave = new User({
    username: user.username,
    watchlist: user.watchlist,
  });
  console.log("Creating Test Users...")
  await userToSave.save();
}

module.exports = {
    CreateUser,
};
