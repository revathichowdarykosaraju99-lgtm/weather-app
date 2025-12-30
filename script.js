function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleCompleted(this)">${taskText}</span>
    <button onclick="removeTask(this)">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}

function toggleCompleted(taskSpan) {
  taskSpan.classList.toggle("completed");
}
