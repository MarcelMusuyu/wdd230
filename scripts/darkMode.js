const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const image = modeButton.firstElementChild;
const links = document.querySelectorAll(".activities a");
modeButton.addEventListener("click", () => {
  if (image.getAttribute("id") == "light") {
    main.style.background = "#333";
    main.style.color = "#fff";

    console.log(links);
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#d0df0a";
    }

    image.setAttribute("src", "images/white-mode.png");
    image.setAttribute("id", "dark");
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#012a4a";
    }
    image.setAttribute("src", "images/dark-mode.png");
    image.setAttribute("id", "light");
  }
});

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});
