function addTask() {
    let input = document.getElementById("task-input");
    let taskText = input.value.trim();
    let priority = document.getElementById("priority").value;
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("task-list");
    let li = document.createElement("li");
    li.classList.add(priority);
    
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="removeTask(this)">X</button>
        </div>
    `;
    
    taskList.appendChild(li);
    input.value = "";
}

function removeTask(button) {
    let li = button.parentElement.parentElement;
    button.innerText = 'Remove'; // Change 'X' to 'Remove'
    li.remove();
}

function editTask(button) {
    let li = button.parentElement.parentElement;
    let span = li.querySelector("span");
    let newText = prompt("Edit your task:", span.innerText);
    if (newText !== null && newText.trim() !== "") {
        span.innerText = newText.trim();
    }
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
