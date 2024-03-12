function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
      taskList.removeChild(li);
    };
  
    li.appendChild(deleteButton);
  
    taskInput.value = "";
  }
  