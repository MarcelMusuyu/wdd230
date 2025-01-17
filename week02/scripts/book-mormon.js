const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
  const myItem = input.value;
  if (myItem.trim() === "") {
    const li = document.createElement("li");
    li.innerHTML = "<strong>Please make sure to fill the input</strong>";
    li.style.backgroundColor = "#dbbb57";
    li.style.color = "#3c2d04";
    list.appendChild(li);

    input.focus();
  } else {
    input.value = "";

    const li = document.createElement("li");
    li.textContent = myItem === "" ? "Helaman 5:2" : myItem;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
    });
    li.appendChild(deleteButton);

    list.appendChild(li);
  }

  input.focus();
});
