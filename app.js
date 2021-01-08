let taskCounter = document.querySelector("#counter");
let taskLabel = document.querySelector("#taskLabel");
let box = document.querySelector("#box");
let sampleTask = document.querySelector("#sample");
let allTasks = 0;
taskCounter.innerHTML = allTasks + " tasks pending";

taskLabel.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
      addTask(taskLabel.value);
    }
});

let clicSound = new Audio('./clic.mp3');
const playClic = () => {
  clicSound.play();
}
	

function addTask(value) {
  taskLabel.value = "";
  // Definir nuevo elemento, darle sus clases
  let newTask = document.createElement("li");
  newTask.classList.add(
    "list-group-item",
    "animate__animated",
    "animate__backInDown",
    "animate__faster",
  );

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-link", "float-right");

  let trashCan = document.createElement("i");
  trashCan.classList.add("fas", "fa-trash-alt");

  sampleTask.style = "display: none";
  //El contenido es igual al input del usuario
  newTask.innerHTML = value;
  //Anclarlo a la LISTA
  box.appendChild(newTask);
  newTask.appendChild(deleteBtn);
  deleteBtn.appendChild(trashCan);
  trashCan.style.color = "red";
  playClic();

  if (value === "") {
    box.removeChild(newTask);
    sampleTask.style = "display: none";
  } else {
    allTasks++;
    taskCounter.innerHTML = allTasks + " tasks pending";
  }

  newTask.addEventListener("mouseover", () => {
    newTask.style.background = '#D8FAF3';
  });

  newTask.addEventListener("mouseout", () => {
    newTask.style.background = 'white';
  });

  deleteBtn.addEventListener("click", function () {
    newTask.classList.add('bg-red');
    newTask.classList.remove("animate__backInDown");
    newTask.classList.add("animate__backOutRight");

    newTask.addEventListener("animationend", () => {
      newTask.parentNode.removeChild(newTask);
      allTasks--;
      taskCounter.innerHTML = allTasks + " tasks pending";
    });
  });
}

