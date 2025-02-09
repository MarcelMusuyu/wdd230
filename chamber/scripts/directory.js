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

const baseURL = "https://marcelmusuyu.github.io/wdd230/chamber";
const linksURL = `${baseURL}/data/members.json`;

///const content = document.querySelector(".link");

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const members = await response.json();
      displayLinks(members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayLinks(data) {
  console.log(data);

  //   data.weeks.forEach((week) => {
  //     // console.log(week.week);
  //     const activities = document.createElement("li");

  //     activities.setAttribute("class", "activities");

  //     activities.textContent = `${week.week}: `;
  //     week.links.forEach((link) => {
  //       const task = document.createElement("a");
  //       task.innerHTML = `&nbsp;${link.title}|&nbsp;`;
  //       task.setAttribute("href", link.url);
  //       activities.appendChild(task);
  //       // console.log(`${link.title} ${link.url}`);
  //     });
  //     content.appendChild(activities);
  //   });
}
getLinks();
