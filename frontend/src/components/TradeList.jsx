import { deleteTrade, updateTrade } from "../services/api";
import { useState } from "react";

export default function TradeList({ trades, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [newExit, setNewExit] = useState("");

  const handleDelete = async (id) => {
    await deleteTrade(id);
    onDelete(id);
  };

  const handleUpdate = async (trade) => {
    const updated = await updateTrade(trade._id, {
      ...trade,
      exitPrice: Number(newExit)
    });

    onUpdate(updated);
    setEditingId(null);
  };

  return (
    <div>
      <h2>Trades</h2>

      {trades.map((t) => (
        <div key={t._id} style={{ border: "1px solid #e5e7eb",
                                  borderRadius: 10,
                                  padding: 15,
                                  marginBottom: 15,
                                  boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          <h3>{t.asset}</h3>

          <p>Type: {t.type}</p>
          <p>Entry: {t.entryPrice}</p>
          <p>Exit: {t.exitPrice}</p>
          <p>Quantity: {t.quantity}</p>

          <p style={{
          fontWeight: "bold",
          color: t.profitLoss >= 0 ? "green" : "red"
          }}>
          P/L: {t.profitLoss}
          </p>

          {editingId === t._id ? (
            <>
              <input
                placeholder="New Exit Price"
                onChange={(e) => setNewExit(e.target.value)}
              />
              
              <button onClick={() => handleUpdate(t)}
                style={{
                  marginRight: 10,
                  padding: "5px 10px",
                  cursor: "pointer"
                }}>
                Save
              </button>
            </>
          ) : (
            <>
              {/* <p>P/L: {t.profitLoss}</p> */}
              <button onClick={() => setEditingId(t._id)}
                style={{
                  marginRight: 10,
                  padding: "5px 10px",
                  cursor: "pointer"
                }}>
                Edit
              </button>
            </>
          )}

          <button onClick={() => handleDelete(t._id)}
            style={{
              marginRight: 10,
              padding: "5px 10px",
              cursor: "pointer"
            }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

