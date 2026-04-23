const Trade = require("../models/Trade");

// GET all trades
exports.getTrades = async (req, res) => {
  try {
    const trades = await Trade.find().sort({ createdAt: -1 });
    res.json(trades);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch trades" });
  }
};

// CREATE trade
exports.createTrade = async (req, res) => {
  try {
    const { asset, entryPrice, exitPrice, quantity, type } = req.body;

    if (!asset || !entryPrice || !exitPrice || !quantity || !type) {
      return res.status(400).json({ error: "Missing fields" });
    }

    let profitLoss = 0;

    if (type === "buy") {
      profitLoss = (exitPrice - entryPrice) * quantity;
    } else {
      profitLoss = (entryPrice - exitPrice) * quantity;
    }

    const trade = new Trade({
      asset,
      entryPrice,
      exitPrice,
      quantity,
      type,
      profitLoss
    });

    await trade.save();

    res.json(trade);
  } catch (err) {
    res.status(500).json({ error: "Failed to create trade" });
  }
};

// DELETE trade
exports.deleteTrade = async (req, res) => {
  try {
    const deleted = await Trade.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Trade not found" });
    }  
    res.json({ message: "Trade deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete trade" });
  }
};

// UPDATE trade
exports.updateTrade = async (req, res) => {
  try {
    const { entryPrice, exitPrice, quantity, type } = req.body;

    let profitLoss = 0;

    if (type === "buy") {
      profitLoss = (exitPrice - entryPrice) * quantity;
    } else {
      profitLoss = (entryPrice - exitPrice) * quantity;
    }

    const updated = await Trade.findByIdAndUpdate(
      req.params.id,
      { ...req.body, profitLoss },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Trade not found" });
    }

    res.json(updated);
  } catch (err) {
    
    res.status(500).json({ error: err.message || "Something went wrong"

    });
  }
};


