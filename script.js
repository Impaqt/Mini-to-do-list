const Input = document.querySelector("#task-input");
const AddButton = document.querySelector("#add-task");
const TaskList = document.querySelector("#task-list");

function inputButton() {
  if (Input.value !== "") {
    const li = document.createElement("li");
    const index = TaskList.children.length;
    li.style.backgroundColor = getColor(index);
    const DelButton = document.createElement("button");
    const checkbox = document.createElement("Input");
    const span = document.createElement("span");
    span.classList.add("span-text");
    checkbox.type = "checkbox";
    span.textContent = Input.value;
    DelButton.classList.add("delete-btn");
    DelButton.textContent = "🗑️";
    DelButton.style.color = "white";
    li.appendChild(checkbox);
    li.appendChild(span);
    TaskList.appendChild(li);
    li.appendChild(DelButton);
    DelButton.addEventListener("click", function () {
      DeleteTask(li);
    });
    checkbox.addEventListener("change", function () {
      TaskComplete(checkbox, li);
    });

    Input.value = "";
  } else {
  }
}

function DeleteTask(li) {
  li.remove();
}

function TaskComplete(checkbox, li) {
  if (checkbox.checked) {
    li.classList.add("complete");
  } else {
    li.classList.remove("complete");
  }
}

function getColor(index) {
  const colors = ["#FfD60A", "#00B4D8", "#FF4D6D"];
  return colors[index % colors.length];
}

AddButton.addEventListener("click", inputButton);
