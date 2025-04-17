function addTask(event) {
	event.preventDefault();

	var taskText = document.todoForm.taskInput.value.trim();

	if (taskText.length === 0) {
		alert("Task cannot be empty!");
		return false;
	}

	var taskElement = document.createElement("div");
	taskElement.className = "task-item";

	var taskTextSpan = document.createElement("span");
	taskTextSpan.textContent = taskText;
	taskElement.appendChild(taskTextSpan);

	var deleteButton = document.createElement("button");
	deleteButton.className = "delete-btn";
	deleteButton.textContent = "Delete";

	deleteButton.addEventListener("click", function () {
		taskElement.remove();
	});

	taskElement.appendChild(deleteButton);

	document.getElementById("taskList").appendChild(taskElement);

	document.todoForm.taskInput.value = "";

	return false;
}