// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create <li> element
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  // Add click event to remove task
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Append delete button to list item
  li.appendChild(deleteBtn);

  // Append list item to the task list
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = '';
}

// Event Listener
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow Enter key to add task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
