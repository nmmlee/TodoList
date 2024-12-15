const dateElement = document.querySelector("#date");
const timeElement = document.querySelector("#time");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  timeElement.textContent = `${hours} : ${minutes} : ${seconds}`;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  dateElement.textContent = `${year}-${month}-${day}`;
}

getClock();
setInterval(getClock, 1000);
