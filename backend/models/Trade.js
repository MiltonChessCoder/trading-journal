const mongoose = require("mongoose");

const TradeSchema = new mongoose.Schema({
  asset: String,
  entryPrice: Number,
  exitPrice: Number,
  quantity: Number,
  type: String,
  profitLoss: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Trade", TradeSchema);

