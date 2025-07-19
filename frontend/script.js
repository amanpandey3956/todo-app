const API = "http://localhost:3000/todos";

async function fetchTodos() {
  const res = await fetch(API);
  const todos = await res.json();
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.onclick = () => deleteTodo(todo.id);
    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value;
  if (!text) return;
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  input.value = "";
  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  fetchTodos();
}

fetchTodos();
