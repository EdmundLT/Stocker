const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  watchlist: {
    type:[String],
  },
});

module.exports = mongoose.model("User", usersSchema);
