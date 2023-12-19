const textInp = document.querySelectorAll("#text");
const todosEl = document.querySelector("#joy");
const formEl = document.querySelector("form");

let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    id: todos.length+1,
    en: textInp[0].value,
    uz: textInp[1].value,
  });
  textInp[0].value = "";
  textInp[1].value = "";
  
  textInp[0].focus()
  renderTodos();
});

function renderTodos() {
  let html = "";
  todos.forEach((todo) => {
    html += `<tr><td>${todo.id}</td><td>${todo.en}</td><td>${todo.uz}</td><td><i class="fa-solid fa-circle-check text-green-600 text-2xl cursor-pointer"></i><i class="fa-solid fa-trash text-2xl ml-4 cursor-pointer text-red-600" onclick="deleteTodo(${todo.id})"></i></td><tr>`
});
  todosEl.innerHTML = html;
  localStorage.setItem("todos", JSON.stringify(todos));
}

renderTodos()

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}
