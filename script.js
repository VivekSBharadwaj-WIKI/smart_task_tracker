// Example: Add Task
document.querySelector(".card-header button")
  .addEventListener("click", () => {
    const taskName = prompt("Enter task name");

    if (!taskName) return;

    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<h4>${taskName}</h4>`;

    document.querySelector(".task-list").appendChild(task);
});