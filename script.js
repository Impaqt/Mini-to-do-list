const Input = document.querySelector("#task-input");
const AddButton = document.querySelector("#add-task");
const TaskList = document.querySelector("#task-list");

function inputButton() {
  if (Input.value !== "") {
    const li = document.createElement("li");
    const DelButton = document.createElement("button");
    const checkbox = document.createElement("Input");
    const span = document.createElement("span");
    checkbox.type = "checkbox";
    span.textContent = Input.value;
    DelButton.classList.add("delete-btn");
    DelButton.textContent = "🗑️";
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

AddButton.addEventListener("click", inputButton);
