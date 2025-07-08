// --- Live Clock & Greeting ---
function updateClock() {
  const now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds} ${hours < 12 ? "AM" : "PM"}`;
  const greeting = document.getElementById("greeting");
  let greet;
  if (hours < 12) greet = "Good morning";
  else if (hours < 18) greet = "Good afternoon";
  else greet = "Good evening";
  greeting.textContent = greet;
}
updateClock();
setInterval(updateClock, 1000);

// --- Theme Switcher ---
const themeSwitcher = document.getElementById("themeSwitcher");
function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  themeSwitcher.textContent = dark ? "☀️" : "🌙";
  localStorage.setItem("dashboardTheme", dark ? "dark" : "light");
}
themeSwitcher.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("dark"));
});
// Load theme from localStorage
if (localStorage.getItem("dashboardTheme") === "dark") setTheme(true);

// --- To-Do List ---
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoError = document.getElementById("todoError");
const todoList = document.getElementById("todoList");
const filterBtns = document.querySelectorAll(".filter-btn");
let todos = JSON.parse(localStorage.getItem("dashboardTodos") || "[]");
let todoFilter = "all";

function saveTodos() {
  localStorage.setItem("dashboardTodos", JSON.stringify(todos));
}
function renderTodos() {
  todoList.innerHTML = "";
  let filtered = todos.filter((todo) => {
    if (todoFilter === "all") return true;
    if (todoFilter === "completed") return todo.completed;
    if (todoFilter === "incomplete") return !todo.completed;
  });
  filtered.forEach((todo, idx) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.completed ? " completed" : "");
    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todo.completed = !todo.completed;
      saveTodos();
      renderTodos();
    });
    // Text
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;
    // Delete
    const delBtn = document.createElement("button");
    delBtn.className = "todo-delete";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      todos.splice(todos.indexOf(todo), 1);
      saveTodos();
      renderTodos();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = todoInput.value.trim();
  if (!value) {
    todoError.textContent = "Please enter a task.";
    todoInput.classList.add("invalid");
    return;
  }
  todoError.textContent = "";
  todoInput.classList.remove("invalid");
  todos.push({ text: value, completed: false });
  saveTodos();
  renderTodos();
  todoInput.value = "";
});
todoInput.addEventListener("input", () => {
  if (todoInput.value.trim()) {
    todoError.textContent = "";
    todoInput.classList.remove("invalid");
  }
});
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    todoFilter = btn.dataset.filter;
    renderTodos();
  });
});
renderTodos();

// --- Sticky Notes ---
const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const noteError = document.getElementById("noteError");
const notesContainer = document.getElementById("notesContainer");
let notes = JSON.parse(localStorage.getItem("dashboardNotes") || "[]");
const noteColors = [
  "sticky-yellow",
  "sticky-green",
  "sticky-blue",
  "sticky-pink",
  "sticky-orange",
  "sticky-purple",
];

function saveNotes() {
  localStorage.setItem("dashboardNotes", JSON.stringify(notes));
}
function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, idx) => {
    const div = document.createElement("div");
    div.className = "sticky-note " + note.color;
    div.textContent = note.text;
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.className = "note-delete";
    delBtn.textContent = "×";
    delBtn.addEventListener("click", () => {
      notes.splice(idx, 1);
      saveNotes();
      renderNotes();
    });
    div.appendChild(delBtn);
    notesContainer.appendChild(div);
  });
}
noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = noteInput.value.trim();
  if (!value) {
    noteError.textContent = "Please enter a note.";
    noteInput.classList.add("invalid");
    return;
  }
  noteError.textContent = "";
  noteInput.classList.remove("invalid");
  const color = noteColors[Math.floor(Math.random() * noteColors.length)];
  notes.push({ text: value, color });
  saveNotes();
  renderNotes();
  noteInput.value = "";
});
noteInput.addEventListener("input", () => {
  if (noteInput.value.trim()) {
    noteError.textContent = "";
    noteInput.classList.remove("invalid");
  }
});
renderNotes();
