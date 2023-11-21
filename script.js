let timer;
let minutes = 25;
let seconds = 0;


/********************************************************/
/************Image 1 Drag and drop properties************/
/********************************************************/
let isDragging = false;
let offsetX, offsetY;

const draggableImage = document.getElementById('draggableImage');

draggableImage.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent the default browser drag-and-drop behavior
    isDragging = true;
    offsetX = e.clientX - draggableImage.getBoundingClientRect().left;
    offsetY = e.clientY - draggableImage.getBoundingClientRect().top;
    draggableImage.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggableImage.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        draggableImage.style.left = `${x}px`;
        draggableImage.style.top = `${y}px`;
    }
});

/********************************************************/
/************Image 2 Drag and drop properties************/
/********************************************************/

let isDragging2 = false;
let offsetX2, offsetY2;

const draggableImage2 = document.getElementById('draggableImage2');

draggableImage2.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent the default browser drag-and-drop behavior
    isDragging2 = true;
    offsetX2 = e.clientX - draggableImage2.getBoundingClientRect().left;
    offsetY2 = e.clientY - draggableImage2.getBoundingClientRect().top;
    draggableImage2.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging2 = false;
    draggableImage2.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging2) {
        const x = e.clientX - offsetX2;
        const y = e.clientY - offsetY2;

        draggableImage2.style.left = `${x}px`;
        draggableImage2.style.top = `${y}px`;
    }
});
/********************************************************/
/************Image 3 Drag and drop properties************/
/********************************************************/
let isDragging3 = false;
let offsetX3, offsetY3;

const draggableImage3 = document.getElementById('draggableImage3');

draggableImage3.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent the default browser drag-and-drop behavior
    isDragging3= true;
    offsetX3 = e.clientX - draggableImage3.getBoundingClientRect().left;
    offsetY3 = e.clientY - draggableImage3.getBoundingClientRect().top;
    draggableImage3.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging3 = false;
    draggableImage3.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging3) {
        const x = e.clientX - offsetX3;
        const y = e.clientY - offsetY3;

        draggableImage3.style.left = `${x}px`;
        draggableImage3.style.top = `${y}px`;
    }
});
/********************************************************/
/************Image 4 Drag and drop properties************/
/********************************************************/
let isDragging4 = false;
let offsetX4, offsetY4;

const draggableImage4 = document.getElementById('draggableImage4');

draggableImage4.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent the default browser drag-and-drop behavior
    isDragging4= true;
    offsetX4 = e.clientX - draggableImage4.getBoundingClientRect().left;
    offsetY4 = e.clientY - draggableImage4.getBoundingClientRect().top;
    draggableImage4.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging4 = false;
    draggableImage4.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging4) {
        const x = e.clientX - offsetX4;
        const y = e.clientY - offsetY4;

        draggableImage4.style.left = `${x}px`;
        draggableImage4.style.top = `${y}px`;
    }
});
/********************************************************/
/************Image 5 Drag and drop properties************/
/********************************************************/
let isDragging5 = false;
let offsetX5, offsetY5;

const draggableImage5 = document.getElementById('draggableImage5');

draggableImage5.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent the default browser drag-and-drop behavior
    isDragging5= true;
    offsetX5 = e.clientX - draggableImage5.getBoundingClientRect().left;
    offsetY5 = e.clientY - draggableImage5.getBoundingClientRect().top;
    draggableImage5.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging5 = false;
    draggableImage5.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging5) {
        const x = e.clientX - offsetX5;
        const y = e.clientY - offsetY5;

        draggableImage5.style.left = `${x}px`;
        draggableImage5.style.top = `${y}px`;
    }
});

/********************************************************/
/************             Timer              ************/
/********************************************************/

function startPomodoro() {
    resetTimer();
    minutes = 25;
    updateDisplay();
}

function startBreak() {
    resetTimer();
    minutes = 10;
    updateDisplay();
}

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25; 
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert("You earn a new sticker!");
    /*************************************/
    /************Sticker Rules************/
    /*************************************/

        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById("minutes").innerText = padZero(minutes);
    document.getElementById("seconds").innerText = padZero(seconds);
}

function padZero(value) {
    return value < 10 ? "0" + value : value;
}

// Initial display
updateDisplay();

/********************************************************/
/************             To Do              ************/
/********************************************************/

function addTask() {
    var taskInput = document.getElementById('newTask');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
      var taskList = document.getElementById('taskList');

      // Create a new list item
      var listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center'; // Added flex classes
      
      // Create an image for unchecked status
      var uncheckedImage = document.createElement('img');
    /***********************************************************/
    /************Change file for a different design ************/
    /***********************************************************/
      uncheckedImage.src = 'images/unchecked.png';
      uncheckedImage.alt = 'Unchecked';
      uncheckedImage.className = 'task-image';
      uncheckedImage.onclick = function() {
        // Toggle between unchecked and checked images
        checkedImage.style.display = 'inline';
        uncheckedImage.style.display = 'none';
        // Apply the completed style to the task text
        taskSpan.classList.add('completed');
        // Save tasks to local storage
        saveTasksToLocalStorage();
      };

      // Create an image for checked status
      var checkedImage = document.createElement('img');
    /***********************************************************/
    /************Change file for a different design ************/
    /***********************************************************/
      checkedImage.src = 'images/checked.png';
      checkedImage.alt = 'Checked';
      checkedImage.className = 'task-image';
      checkedImage.style.display = 'none'; // Initially hidden
      checkedImage.onclick = function() {
        // Toggle between checked and unchecked images
        uncheckedImage.style.display = 'inline';
        checkedImage.style.display = 'none';
        // Remove the completed style from the task text
        taskSpan.classList.remove('completed');
        // Save tasks to local storage
        saveTasksToLocalStorage();
      };

      // Create a span for the task text
      var taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      taskSpan.className = 'mr-auto'; 

      // Create a button for deleting the task
      var deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button btn btn-light btn-sm float-right';
      deleteButton.innerHTML = '&times;';
      deleteButton.style.fontSize = '20px';
      // Center the content (x) horizontally and vertically
      deleteButton.style.display = 'flex';
      deleteButton.style.alignItems = 'center';
      deleteButton.style.justifyContent = 'center';
      deleteButton.onclick = function() {
        // Remove the task when the delete button is clicked
        taskList.removeChild(listItem);
        // Save tasks to local storage
        saveTasksToLocalStorage();
      };

      // Append the images, task text span, and delete button to the list item
      listItem.appendChild(uncheckedImage);
      listItem.appendChild(checkedImage);
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteButton);

      // Append the list item to the task list
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = '';

      // Save tasks to local storage
      saveTasksToLocalStorage();
    }
  }

  // Function to save tasks to local storage
  function saveTasksToLocalStorage() {
    var taskList = document.getElementById('taskList');
    var tasks = [];
    for (var i = 0; i < taskList.children.length; i++) {
      var task = {
        text: taskList.children[i].getElementsByTagName('span')[0].textContent,
        completed: taskList.children[i].classList.contains('completed')
      };
      tasks.push(task);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to load tasks from local storage
  function loadTasksFromLocalStorage() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var taskList = document.getElementById('taskList');
    for (var i = 0; i < tasks.length; i++) {
      var listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      var uncheckedImage = document.createElement('img');
      uncheckedImage.src = 'unchecked.png';
      uncheckedImage.alt = 'Unchecked';
      uncheckedImage.className = 'task-image';
      uncheckedImage.style.display = tasks[i].completed ? 'none' : 'inline';
      uncheckedImage.onclick = function() {
        checkedImage.style.display = 'inline';
        uncheckedImage.style.display = 'none';
        taskSpan.classList.add('completed');
        saveTasksToLocalStorage();
      };

      var checkedImage = document.createElement('img');
      checkedImage.src = 'checked.png';
      checkedImage.alt = 'Checked';
      checkedImage.className = 'task-image';
      checkedImage.style.display = tasks[i].completed ? 'inline' : 'none';
      checkedImage.onclick = function() {
        uncheckedImage.style.display = 'inline';
        checkedImage.style.display = 'none';
        taskSpan.classList.remove('completed');
        saveTasksToLocalStorage();
      };

      var taskSpan = document.createElement('span');
      taskSpan.textContent = tasks[i].text;
      taskSpan.className = 'mr-auto';

      var deleteButton = document.createElement('button');
      deleteButton.className = 'delete-button btn btn-light btn-sm float-right';
      deleteButton.innerHTML = '&times;';
      deleteButton.style.fontSize = '20px';
      // Center the content (x) horizontally and vertically
      deleteButton.style.display = 'flex';
      deleteButton.style.alignItems = 'center';
      deleteButton.style.justifyContent = 'center';
      deleteButton.onclick = function() {
        taskList.removeChild(listItem);
        saveTasksToLocalStorage();
      };

      listItem.appendChild(uncheckedImage);
      listItem.appendChild(checkedImage);
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteButton);

      taskList.appendChild(listItem);
    }
  }

  // Load tasks from local storage when the page is loaded
  window.onload = loadTasksFromLocalStorage;
