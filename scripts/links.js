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

  //   data.weeks.forEach((week) => {
  //     console.log(week.url);
  //   }); &
  data.weeks.forEach((week) => {
    // console.log(week.week);
    const activities = document.createElement("li");

    activities.setAttribute("class", "activities");
    activities.textContent = `${week.week}: `;
    week.links.forEach((link) => {
      const task = document.createElement("a");
      task.innerHTML = `&nbsp;${link.title}|&nbsp;`;
      task.setAttribute("href", link.url);
      activities.appendChild(task);
      // console.log(`${link.title} ${link.url}`);
    });
    content.appendChild(activities);
  });
}
getLinks();

// Success! We have the user's coordinates.
const latitude = -11.66;
const longitude = 27.47;

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-description");
const apiKey = "0609f6b96504ef3e8683e2a1ba72a07f";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;

  const iconsrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  console.log(iconsrc);
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", data.weather[0].description);
  captionDesc.textContent = data.weather[0].description;
}
apiFetch();
