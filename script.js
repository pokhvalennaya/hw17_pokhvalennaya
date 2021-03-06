const form = document.forms.toDoList;
const { toDoInput, submitButton } = form;
const list = document.getElementById("list");

const div = document.createElement("div");
div.className = "error_message";
form.append(div);

form.onsubmit = (event) => {
  event.preventDefault();

  if (toDoInput.value.trim().length === 0) {
    toDoInput.classList.add("error");
    div.innerHTML = "This field is required!";
    return;
  }

  const li = document.createElement("li");
  li.className = "list_item";
  li.innerHTML = toDoInput.value;
  list.append(li);
  form.reset();

  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.className = "delete";
  li.append(button);
};

list.onclick = (event) => {
  const target = event.target;
  const isButton = target.className === "delete";

  if (isButton) {
    const liBlock = target.closest(".list_item");
    liBlock.remove();
  }
};

toDoInput.oninput = () => {
  const isErrorField = toDoInput.classList.contains("error");

  if (isErrorField) {
    toDoInput.classList.remove("error");
    div.innerHTML = "";
  }
};
