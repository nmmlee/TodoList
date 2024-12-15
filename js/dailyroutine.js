const dailyForm = document.getElementById("daily-form");
const dailyInput = dailyForm.querySelector("input");
const dailyList = document.getElementById("daily-list");

const DAILYS_KEY = "dailys"
let dailys = [];

function saveDailyRoutine(){
    localStorage.setItem(DAILYS_KEY, JSON.stringify(dailys));
}

function deleteDailyRoutine(event){
    const li = event.target.parentElement;
    li.remove();
    dailys = dailys.filter((daily) => daily.id !== parseInt(li.id));
    saveDailyRoutine();
}

function checkDailyRoutine(event){
    const text = event.target.parentElement
    text.firstElementChild.classList.toggle("checked");
}

function paintDaily(newDaily){
    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    li.id = newDaily.id;
    checkButton.innerText = "V"
    checkButton.id = "check-button";
    deleteButton.innerText = "X";
    deleteButton.id = "delete-button";

    div.innerText = newDaily.text;

    deleteButton.addEventListener("click", deleteDailyRoutine);
    checkButton.addEventListener("click", checkDailyRoutine);

    li.appendChild(div);
    li.appendChild(checkButton);
    li.appendChild(deleteButton);
    li.classList.add("item");

    dailyList.appendChild(li);
}

function handleDailySubmit(event){
    event.preventDefault();
    const newDaily = dailyInput.value;

    dailyInput.value = "";
    const newDailyObj = {
        text: newDaily,
        id:Date.now(),
    };
    dailys.push(newDailyObj);
    paintDaily(newDailyObj);
    saveDailyRoutine();
}

dailyForm.addEventListener("submit", handleDailySubmit);
const savedDailys = localStorage.getItem(DAILYS_KEY);

if (savedDailys !== null) {
    const parsedDailys = JSON.parse(savedDailys);
    dailys = parsedDailys;
    parsedDailys.forEach(paintDaily);
} 

