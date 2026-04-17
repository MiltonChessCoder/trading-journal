const BASE_URL = "http://localhost:5000/api/trades";

export const getTrades = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addTrade = async (trade) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(trade)
  });

  return res.json();
};