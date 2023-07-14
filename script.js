const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
let tasks = [];

addButton.addEventListener("click", addTask);
function addTask() {
  const taskText = taskInput.value.trim();
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskList.appendChild(taskItem);
  taskInput.value = "";
  taskItem.addEventListener("click", completeTask);
}

function completeTask(event) {
  const taskItem = event.target;
  taskItem.classlist.add("completed");
  taskItem.addEventListener("click", removeTask);
}

function removeTask(event) {
  const taskItem = event.target;
  taskItem.parentNode.removechild(taskItem);
}
function createTaskItem(taskText) {
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskItem.addEventListener("click", completeTask);
  const removeButton = document.createElement("button");
  removeButton.textContent = "x";
  removeButton.addEventListener("click", removeTask);
  taskItem.appendChild(removeButton);
  return taskItem;
}
