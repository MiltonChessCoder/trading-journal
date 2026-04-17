const express = require("express");
const router = express.Router();

let trades = [];

// GET all trades
router.get("/", (req, res) => {
  res.json(trades);
});

// POST trade
router.post("/", (req, res) => {
  const { asset, entryPrice, exitPrice, quantity, type } = req.body;

  if (!asset || !entryPrice || !exitPrice || !quantity || !type) {
    return res.status(400).json({
      error: "Missing required fields"
    });
  }

  if (type !== "buy" && type !== "sell") {
    return res.status(400).json({
      error: "Type must be 'buy' or 'sell'"
    });
  }

  
  
  let profitLoss = 0;


  if (type === "buy") {
    profitLoss = (exitPrice - entryPrice) * quantity;
  } else {
    profitLoss = (entryPrice - exitPrice) * quantity;
  }

  const trade = {
    id: Date.now(),
    asset,
    entryPrice,
    exitPrice,
    quantity,
    type,
    profitLoss,
    createdAt: new Date()
  };

  trades.push(trade);

  res.json(trade);
});

module.exports = router;


