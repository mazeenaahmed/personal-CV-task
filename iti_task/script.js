const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");

function createTaskElement(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const btns = document.createElement("div");
  btns.className = "btns";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText) span.textContent = newText;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => li.remove();

  const finishBtn = document.createElement("button");
  finishBtn.textContent = "✔";
  finishBtn.className = "finish";
  finishBtn.onclick = () => {
    span.classList.add("done");
    btns.removeChild(finishBtn);
    doneList.appendChild(li);
  };

  btns.appendChild(editBtn);
  btns.appendChild(deleteBtn);
  btns.appendChild(finishBtn);

  li.appendChild(span);
  li.appendChild(btns);

  return li;
}

addBtn.onclick = () => {
  const text = taskInput.value.trim();
  if (text) {
    const task = createTaskElement(text);
    todoList.appendChild(task);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
};
