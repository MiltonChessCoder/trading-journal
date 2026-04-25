const BASE_URL = "https://trading-journal-api-mksj.onrender.com/api/trades";

export const getTrades = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error();
    return res.json();
  } catch{
    throw new Error("Failed to fetch trades");
  }
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

export const deleteTrade = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};

export const updateTrade = async (id, updatedData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  });

  return res.json();
};


