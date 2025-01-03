const API_URL = "https://example.com/api/status"; // 替換為真實 API 地址

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    document.getElementById("currentNumber").innerText = data.currentNumber;
    document.getElementById("remainingGroups").innerText = data.remainingGroups;
  } catch (error) {
    console.error("無法獲取資料：", error);
  }
}

setInterval(fetchData, 5000);
fetchData();
