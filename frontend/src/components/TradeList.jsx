export default function TradeList({ trades }) {
  return (
    <div>
      <h2>Trades</h2>

      {trades.map((t) => (
        <div
          key={t.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10
          }}
        >
          <h3>{t.asset}</h3>
          <p>Entry: {t.entryPrice}</p>
          <p>Exit: {t.exitPrice}</p>
          <p>Quantity: {t.quantity}</p>
          <p>Type: {t.type}</p>
          <p style={{ fontWeight: "bold" }}>
            P/L: {t.profitLoss}
          </p>
        </div>
      ))}
    </div>
  );
}