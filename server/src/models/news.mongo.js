const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  symbols: {
    type: [String],
  }

});

module.exports = mongoose.model("News", newsSchema);
