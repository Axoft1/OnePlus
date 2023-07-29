const tableBody = document.querySelector("#cryptoTable tbody");

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1";
const body = {
  method: "GET",
  headers: {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
},
};

const grtFetch = () => {
  try {
    fetch(URL, body)
      .then((e) => e.json())
      .then((e) => createTable(e));
  } catch (e) {
    console.log(e);
  }
};

const createTable = (e) => {
  e.slice(0, 5).forEach((currency) => {
    const { id, symbol, name } = currency;
    const row = document.createElement("tr");

    row.innerHTML = `<td>${id}</td><td>${symbol}</td><td>${name}</td>`;

    if (symbol === "usdt") {
      row.classList.add("green-bg");
    } else {
      row.classList.add("blue-bg");
    }

    tableBody.appendChild(row);
  });
};

grtFetch();
