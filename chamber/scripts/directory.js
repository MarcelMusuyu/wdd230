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

const article = document.querySelector(".grid");
const baseURL = "https://marcelmusuyu.github.io/wdd230/chamber";
const membersURL = `${baseURL}/data/members.json`;

///const content = document.querySelector(".link");

async function getMembers() {
  try {
    const response = await fetch(membersURL);
    if (response.ok) {
      const members = await response.json();
      displayMembers(members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayMembers(data) {
  console.log(data);
  data.forEach((member) => {
    const section = document.createElement("section");
    const img = document.createElement("img");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    description.innerHTML = `💸$ ${member.capital} <br>${member.description} <br>${member.addresses}`;
    const socialMedia = document.createElement("ul");
    const twitter = document.createElement("li");
    twitter.textContent = member.socialMedia.twitter;
    socialMedia.appendChild(twitter);
    name.textContent = member.name;
    const website = document.createElement("a");
    website.setAttribute("href", member.website);
    website.setAttribute("class", "btn-get-started scrollto");
    website.setAttribute("target", "_blank");
    website.textContent = "Learn More";
    img.setAttribute("src", member.logo);
    img.setAttribute("alt", member.description);
    section.appendChild(img);
    section.appendChild(name);
    section.appendChild(description);
    section.appendChild(website);
    section.appendChild(socialMedia);
    article.appendChild(section);
  });
}
getMembers();
