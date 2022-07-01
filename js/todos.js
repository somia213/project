// textarea in page employee-m5
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", height =>{
  textarea.style.height = "15vh";
  let Height = height.target.scrollHeight;
  textarea.style.height = `${Height}px`;
});


let todoTextarea = document.querySelector("main .form Textarea");
let todoButton = document.querySelector("main .form button");
let todosDiv = document.querySelector("main .todos");
let todosArray = [];

window.addEventListener("load", () => {
  todoTextarea.focus();
  getTodos();
  todoTextarea.focus();
});

todoButton.addEventListener("click", () => {
  if (todoTextarea.value.trim() !== "") {
    pushTodo();
    saveTodos();
    todoTextarea.value = "";
    displayTodos();
    todoTextarea.focus()
  } else {
      todoTextarea.focus();
      todoTextarea.value = "";
  }
});

todoTextarea.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    todoButton.click();
  } else if (e.keyCode === 27) {
    todoTextarea.value = "";
  }
});

todosDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("todo-delete")) {
    removeTodo(e.target.parentElement);
    unpushTodo(e.target.parentElement.getAttribute("data-id"));
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    upButton.style.right = "20px";
  } else {
    upButton.style.right = "-50px";
  }
});

upButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

function pushTodo() {
  let today = new Date();
  let todo = {
    todoId: Date.now(),
    todoText: todoTextarea.value.trim(),
    todoDate:
      today.getFullYear() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getDate(),
    todoDone: false,
  };
  todosArray.push(todo);
}

function displayTodos() {
  todosDiv.innerHTML = "";
  todosArray.forEach((todo) => {
    let todoTextdiv = document.createElement("div");
    todoTextdiv.classList.add("todo-text");
    todoTextdiv.appendChild(document.createTextNode(todo.todoText));
    let todoDatediv = document.createElement("div");
    todoDatediv.appendChild(document.createTextNode(todo.todoDate));
    let todoDeletediv = document.createElement("div");
    todoDeletediv.classList.add("todo-delete");
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoDiv.setAttribute("data-id", todo.todoId);
    todoDiv.appendChild(todoTextdiv);
    todoDiv.appendChild(todoDeletediv);
    todosDiv.appendChild(todoDiv);
  });
}

function removeTodo(todo) {
  todo.classList.add("deleted");
  todo.addEventListener("transitionend", () => todo.remove());
}

function unpushTodo(todoId) {
  todosArray = todosArray.filter((todo) => todo.todoId != todoId);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function getTodos() {
  let savedTodos = JSON.parse(localStorage.getItem("todos"));
  if (getTodos) {
    todosArray.push(...savedTodos);
    displayTodos();
  }
}
