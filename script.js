// Load tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks
function renderTasks(list = tasks) {
  const container = document.getElementById("taskList");
  container.innerHTML = "";

  list.forEach(task => {
    const div = document.createElement("div");
    div.className = `task ${task.priority}`;
    div.textContent = task.title;

    container.appendChild(div);
  });
}

// Save
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Smart priority
function getPriority() {
  const rand = Math.random();
  if (rand < 0.3) return "high";
  if (rand < 0.6) return "medium";
  return "low";
}

// Add task
document.getElementById("addTask").onclick = () => {
  const title = prompt("Enter task");
  if (!title) return;

  const task = {
    id: Date.now(),
    title,
    priority: getPriority()
  };

  tasks.push(task);
  saveTasks();
  renderTasks();
};

// Search
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = tasks.filter(t =>
    t.title.toLowerCase().includes(value)
  );

  renderTasks(filtered);
});

// Initial render
renderTasks();