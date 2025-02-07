const baseURL = "https://marcelmusuyu.github.io/wdd230/";
const linksURL = `${baseURL}/data/links.json`;

const content = document.querySelector(".link");

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const weeks = await response.json();
      displayLinks(weeks);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayLinks(data) {
  //data.weeks[0].links[0].url;
  console.log(data.weeks[0].links[0].url);
  //   data.weeks.forEach((week) => {
  //     console.log(week.url);
  //   }); &
  data.weeks.forEach((week) => {
    // console.log(week.week);
    const activities = document.createElement("li");

    activities.setAttribute("class", "activities");
    activities.textContent = `${week.week: }`;
    week.links.forEach((link) => {
      const task = document.createElement("a");
      task.innerHTML = `${link.title}| &nbsp;`;
      task.setAttribute("href", link.url);
      activities.appendChild(task);
      // console.log(`${link.title} ${link.url}`);
    });
    content.appendChild(activities);
  });
}
getLinks();
