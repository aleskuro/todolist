// Add a click event listener to the "Add" button
document.getElementById("btn").addEventListener("click", function() {
    createTask();
});

function createTask() {
    var inputValue = document.querySelector(".typing-place").value;

    // Create an <h3> element
    var h3Element = document.createElement("h3");

    // Set the text content of the <h3> to the input value
    h3Element.textContent = inputValue;

    // Set the id attribute of the <h3> element to "task"
    h3Element.id = "task";

    // Append the <h3> to the "taskop" container
    var outputDiv = document.querySelector(".taskop");
    outputDiv.appendChild(h3Element);

    // Create a "Delete" button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.id = "delete"; // Set the id attribute of the button
    deleteButton.addEventListener("click", function() {
        deleteTask();
    });

    // Append the "Delete" button to the "taskop" container
    outputDiv.appendChild(deleteButton);
}



function deleteTask() {
    var h3Element = document.getElementById("task"); // Select the <h3> by its ID
    var deleteButton = document.getElementById("delete"); // Select the "Delete" button by its ID

    if (h3Element) {
        // Remove the <h3> element
        h3Element.remove();
    }

    if (deleteButton) {
        // Remove the "Delete" button
        deleteButton.remove();
    }
}

function clearTasks() {
    // Display a confirmation alert
    var confirmClear = confirm("Are you sure you want to clear all tasks?");
    
    if (confirmClear) {
        // Get the container for tasks (assuming it has a class "taskop")
        var taskContainer = document.querySelector(".taskop");
        
        // Remove all child elements (tasks) from the container
        while (taskContainer.firstChild) {
            taskContainer.removeChild(taskContainer.firstChild);
        }
    }
}

// Get the video element
var video = document.getElementById("myVideo");

// Show the video after 25 seconds
setTimeout(function() {
    video.style.display = "block"; // Show the video
    video.play(); // Start playing the video
}, 25000); // 25 seconds in milliseconds

