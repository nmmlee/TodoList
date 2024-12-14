const dateElement = document.querySelector("#date");
const timeElement = document.querySelector("#time");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // 시간을 각각의 span에 할당
  timeElement.textContent = `${hours} : ${minutes} : ${seconds}`;

  // 날짜를 #date에 할당 (오늘 날짜만 예시로 사용)
  const currentDate = date.toISOString().split("T")[0];  // "YYYY-MM-DD"
  dateElement.textContent = currentDate;
}

getClock();
setInterval(getClock, 1000);
