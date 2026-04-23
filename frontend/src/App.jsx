import { useEffect, useState } from "react";
import TradeForm from "./components/TradeForm";
import TradeList from "./components/TradeList";
import Stats from "./components/Stats";
import ProfitChart from "./components/ProfitChart";
import { getTrades } from "./services/api";

function App() {

  const [loading, setLoading] = useState(true);

  const [trades, setTrades] = useState([]);

  // useEffect(() => {
  //   getTrades().then(setTrades);
  // }, []);

  useEffect(() => {
   getTrades()
    .then(setTrades)
    .catch(() => alert("Failed to load trades"))
    .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2>Loading Your Dashboard...</h2>;
  }

  const handleAdd = (trade) => {
    setTrades((prev) => [...prev, trade]);
  };

  const handleDelete = (id) => {
  setTrades((prev) => prev.filter((t) => t._id !== id));
  };

  const handleUpdate = (updatedTrade) => {
  setTrades((prev) =>
    prev.map((t) => (t._id === updatedTrade._id ? updatedTrade : t))
  );
  };

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "auto", fontFamily: "system-ui" }}>
      <div>
      <h1>Milton Chess Trading Journal</h1>
      <div style={{ marginBottom: 30 }}>
      <Stats trades={trades} />
      </div>
      <div style={{ marginBottom: 30 }}>
      <ProfitChart trades={trades} />
      </div>
      </div>

      <div>

      <TradeForm onAdd={handleAdd} />
{/* 
      <TradeList trades={trades} />

      <TradeList trades={trades} onDelete={handleDelete} /> */}

      <TradeList
              trades={trades}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
      />

      </div>
      
    </div>
  );


}

export default App;