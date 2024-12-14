const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function checkTodoList(event){
    const text = event.target.parentElement
    text.firstElementChild.classList.toggle("checked");
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const div = document.createElement("div");
    const checkButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    li.id = newTodo.id;
    checkButton.innerText = "V"
    checkButton.id = "check-button";
    deleteButton.innerText = "X";
    deleteButton.id = "delete-button";

    div.innerText = newTodo.text;

    deleteButton.addEventListener("click", deleteToDo);
    checkButton.addEventListener("click", checkTodoList);

    li.appendChild(div);
    li.appendChild(checkButton);
    li.appendChild(deleteButton);
    li.classList.add("item");

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;

    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 

