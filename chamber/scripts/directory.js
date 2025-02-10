const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const link = document.querySelectorAll(".btn-get-started");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  link.forEach((element) => {
    element.classList.add("btn-get-started");
    element.classList.remove("btn-link");
  });
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  link.forEach((element) => {
    element.classList.remove("btn-get-started");
    element.classList.add("btn-link");
  });

  display.classList.remove("grid");
}
