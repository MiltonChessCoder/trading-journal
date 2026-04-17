import { useEffect, useState } from "react";
import TradeForm from "./components/TradeForm";
import TradeList from "./components/TradeList";
import { getTrades } from "./services/api";

function App() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    getTrades().then(setTrades);
  }, []);

  const handleAdd = (trade) => {
    setTrades((prev) => [...prev, trade]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Trading Journal (MILTON TRADES)</h1>

      <TradeForm onAdd={handleAdd} />

      <TradeList trades={trades} />
    </div>
  );
}

export default App;