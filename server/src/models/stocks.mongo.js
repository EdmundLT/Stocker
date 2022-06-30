const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  changePercent: {
    type: Number,
    required: true,
  },
  previousClose: {
    type: Number,
    required: true,
  }

});

module.exports = mongoose.model("Stock", stockSchema);
