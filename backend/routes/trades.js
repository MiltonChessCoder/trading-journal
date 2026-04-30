// const express = require("express");
// const router = express.Router();
// const Trade = require("../models/Trade");

// // GET all trades
// router.get("/", async (req, res) => {
//   const trades = await Trade.find().sort({ createdAt: -1 });
//   res.json(trades);
// });

// // POST trade
// router.post("/", async (req, res) => {
//   const { asset, entryPrice, exitPrice, quantity, type } = req.body;

//   // validation
//   if (!asset || !entryPrice || !exitPrice || !quantity || !type) {
//     return res.status(400).json({ error: "Missing fields" });
//   }

//   let profitLoss = 0;

//   if (type === "buy") {
//     profitLoss = (exitPrice - entryPrice) * quantity;
//   } else {
//     profitLoss = (entryPrice - exitPrice) * quantity;
//   }

//   const trade = new Trade({
//     asset,
//     entryPrice,
//     exitPrice,
//     quantity,
//     type,
//     profitLoss
//   });

//   await trade.save();

//   res.json(trade);
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();

// let trades = [];

// // GET all trades
// router.get("/", (req, res) => {
//   res.json(trades);
// });

// // POST trade
// router.post("/", (req, res) => {
//   const { asset, entryPrice, exitPrice, quantity, type } = req.body;

//   if (!asset || !entryPrice || !exitPrice || !quantity || !type) {
//     return res.status(400).json({
//       error: "Missing required fields"
//     });
//   }

//   if (type !== "buy" && type !== "sell") {
//     return res.status(400).json({
//       error: "Type must be 'buy' or 'sell'"
//     });
//   }

  
  
//   let profitLoss = 0;


//   if (type === "buy") {
//     profitLoss = (exitPrice - entryPrice) * quantity;
//   } else {
//     profitLoss = (entryPrice - exitPrice) * quantity;
//   }

//   const trade = {
//     id: Date.now(),
//     asset,
//     entryPrice,
//     exitPrice,
//     quantity,
//     type,
//     profitLoss,
//     createdAt: new Date()
//   };

//   trades.push(trade);

//   res.json(trade);
// });

// module.exports = router;


const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
router.use(authMiddleware);

const {
  getTrades,
  createTrade,
  deleteTrade,
  updateTrade
} = require("../controllers/tradeController");

// routes
router.get("/", getTrades);
router.post("/", createTrade);
router.delete("/:id", deleteTrade);
router.put("/:id", updateTrade);

module.exports = router;
