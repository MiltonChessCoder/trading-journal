export default function Stats({ trades }) {
  const totalTrades = trades.length;

  const totalProfit = trades.reduce((sum, t) => sum + t.profitLoss, 0);

  const wins = trades.filter((t) => t.profitLoss > 0).length;

  const winRate = totalTrades > 0
    ? ((wins / totalTrades) * 100).toFixed(2)
    : 0;

  const losses = trades.filter((t) => t.profitLoss < 0).length;

  return (
    // <div style={{ marginBottom: 20 }}>
    //   <h2>Dashboard</h2>

    //   <p>Total Trades: {totalTrades}</p>
    //   <p>Total Profit: {totalProfit}</p>
    //   <p>Win Rate: {winRate}%</p>
    // </div>

    <div style={{
    display: "flex",
    gap: 20,
    marginBottom: 20
  }}>
    <div>
      <h3>Total Trades</h3>
      <p>{totalTrades}</p>
    </div>

    <div>
      <h3>Total Profit</h3>
      <p>{totalProfit}</p>
    </div>

    <div>
      <h3>Win Rate</h3>
      <p>{winRate}%</p>
    </div>

    <div>
        <p>Losses: {losses}</p>
    </div>
  </div>
  );
}

