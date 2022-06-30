const API_URL = "http://localhost:8000";
async function httpGetStockPrice(symbol) {
  const response = await fetch(`${API_URL}/stocks/${symbol}`);
  return await response;
}



function httpGetMarketIndex(symbol) {
  const response = fetch(`${API_URL}/stocks/db/${symbol}`);
  console.log(response)
  return response;
}

export { httpGetStockPrice,httpGetMarketIndex };