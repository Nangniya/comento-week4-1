const todoInput = document.querySelector("#add_todo_input");
const addTodoBtn = document.querySelector("#add_todo_btn");
const todoListUl = document.querySelector("#todo_list");

addTodoBtn.addEventListener("click", handleAddTodoBtn);

function handleAddTodoBtn(e) {
  e.preventDefault();
  let todoText = todoInput.value;
  if (todoText !== "") {
    addTodo(todoText);
    todoInput.value = "";
  }
}
function addTodo(todoText) {
  const liElement = document.createElement("li");
  liElement.classList.add("todo-box");

  const textBox = document.createElement("span");
  textBox.innerText = todoText;
  textBox.classList.add("todo-text");

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("todo-btn");
  checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkBtn.addEventListener("click", checkTodo);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("todo-btn");
  deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-delete-left"></i>';
  deleteBtn.addEventListener("click", deleteTodo);

  liElement.appendChild(textBox);
  liElement.appendChild(checkBtn);
  liElement.appendChild(deleteBtn);

  todoListUl.insertAdjacentElement("afterbegin", liElement);
}

function deleteTodo(e) {
  e.preventDefault();
  const targetLi = e.currentTarget.parentNode;
  const result = confirm(`${targetLi.innerText}를 삭제하시겠습니까?`);
  if (result) {
    todoListUl.removeChild(targetLi);
  }
}

function checkTodo(e) {
  e.preventDefault();
  const targetLi = e.currentTarget.parentNode;
  if (!targetLi.firstChild.classList.contains("checked")) {
    targetLi.firstChild.classList.add("checked");
    todoListUl.insertAdjacentElement("beforeend", targetLi);
  } else {
    targetLi.firstChild.classList.remove("checked");
    todoListUl.insertAdjacentElement("afterbegin", targetLi);
  }
}
