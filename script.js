// Task 1: Adding a task
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim(); // Remove leading/trailing spaces

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.id ="deleted";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);

        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    } else {
        // Bonus: Input validation - show an alert for empty input
        alert("Please enter a task.");
    }
});

// Task 2: Marking a task as done
taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
});
