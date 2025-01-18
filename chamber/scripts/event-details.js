const last = document.querySelector("#last");
// use the date object
const today = new Date();
const lastModified = document.lastModified;
const formattedDateTime = new Date(lastModified).toLocaleString();

last.innerHTML = `Last modification ${formattedDateTime}`;

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll("a")
      .forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});
const projectID = window.localStorage.getItem("projectID") || "";
let projectObject = null;
// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (projectID !== "") {
  projectObject = JSON.parse(localStorage.getItem(projectID));
} else {
  const message = `This is your first visit. 🥳 Welcome!`;
}

// console.log(projectObject);
const category = document.getElementById("tagline");
category.innerHTML = `<strong >Category</strong>: ${projectObject.name}`;

const des = document.getElementById("description");
des.textContent = projectObject.description;
const prototype = document.getElementById("prototype");
prototype.setAttribute("src", projectObject.funding.prototypage);
document.getElementById(
  "date"
).innerHTML = `<strong>Project date</strong>: ${projectObject.funding.date}`;
const website = document.getElementById("webSite");
website.textContent = projectObject.website;
website.setAttribute("href", projectObject.website);

const teamProject = document.getElementById("team");

if (projectObject.team) {
  projectObject.team.forEach((team) => {
    const progress1 = document.createElement("p");
    progress1.classList.add("card-progress");
    progress1.innerHTML = `${team.role}: <span>${team.name}</span> `;
    teamProject.appendChild(progress1);
  });
}
