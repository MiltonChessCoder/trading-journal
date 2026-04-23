import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function ProfitChart({ trades }) {
  // transform data
//   const data = trades.map((t, index) => ({
//     name: index + 1,
//     profit: t.profitLoss
//   }));

    let runningTotal = 0;

    const data = trades.map((t, index) => {
    runningTotal += t.profitLoss;

       return {
    name: index + 1,
    profit: runningTotal
  };
});

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Performance Chart</h2>

      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="profit" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}