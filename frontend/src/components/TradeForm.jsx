import { useState } from "react";
import { addTrade } from "../services/api";

export default function TradeForm({ onAdd }) {
  const [form, setForm] = useState({
    asset: "",
    entryPrice: "",
    exitPrice: "",
    quantity: "",
    type: "buy"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTrade = await addTrade({
      ...form,
      entryPrice: Number(form.entryPrice),
      exitPrice: Number(form.exitPrice),
      quantity: Number(form.quantity)
    });

    onAdd(newTrade);

    // reset form
    setForm({
      asset: "",
      entryPrice: "",
      exitPrice: "",
      quantity: "",
      type: "buy"
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        placeholder="Asset"
        value={form.asset}
        onChange={(e) => setForm({ ...form, asset: e.target.value })}
      />

      <input
        placeholder="Entry Price"
        value={form.entryPrice}
        onChange={(e) => setForm({ ...form, entryPrice: e.target.value })}
      />

      <input
        placeholder="Exit Price"
        value={form.exitPrice}
        onChange={(e) => setForm({ ...form, exitPrice: e.target.value })}
      />

      <input
        placeholder="Quantity"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
      />

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
      </select>

      <button type="submit">Add Trade</button>
    </form>
  );
}
