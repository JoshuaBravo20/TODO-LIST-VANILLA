let taskCounter = document.querySelector("#counter");
let taskLabel = document.querySelector("#taskLabel");
let box = document.querySelector("#box");
let sampleTask = document.querySelector("#sample");
let allTasks = 0;
taskCounter.innerHTML = allTasks + " tasks pending";

function addTask(value) {

  taskLabel.value = '';
  // Definir nuevo elemento, darle sus clases
  let newTask = document.createElement("li");
  newTask.classList.add(
    "list-group-item",
    "animate__animated",
    "animate__backInDown",
    "animate__faster"
  );

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-link", "float-right");

  let trashCan = document.createElement('i');
  trashCan.classList.add('fas', 'fa-trash-alt');

  sampleTask.style = "display: none";
  //El contenido es igual al input del usuario
  newTask.innerHTML = value;
  //Anclarlo a la LISTA
  box.appendChild(newTask);
  newTask.appendChild(deleteBtn);
  deleteBtn.appendChild(trashCan);
  trashCan.style.color = 'red';

  if (value === "") {
    box.removeChild(newTask);
    sampleTask.style = "display: none";
  } else {
    allTasks++;
    taskCounter.innerHTML = allTasks + " tasks pending";
  }

  deleteBtn.addEventListener('click', function() {
    newTask.parentNode.removeChild(newTask);
    allTasks--;
    taskCounter.innerHTML = allTasks + " tasks pending";
  });

}
