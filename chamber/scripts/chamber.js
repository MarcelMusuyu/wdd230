const links = document.querySelectorAll(".menu");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Remove active class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    link.classList.add("active");
  });
});

const last = document.querySelector("#last");
// use the date object
const today = new Date();
// const options = {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// };
// const formatter = new Intl.DateTimeFormat("en-US", options);
// const dateTimeString = formatter.format(new Date());

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

// const menu = document.querySelectorAll("a");
// for (let a of menu) {
//   a.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

const startupProjects = [
  {
    id: "project3",
    name: "Eduverse",
    tagline: "Making education accessible and engaging for everyone.",
    description:
      "Creating an immersive VR platform for interactive and personalized learning experiences.",
    progress: 40,
    status: "Early Stage",
    fundingStatus: "Seeking Seed Funding",
    funding: {
      amount: 500000,
      date: "2023-04-12",
      prototypage:
        "https://media.istockphoto.com/id/1482147760/photo/portrait-of-a-young-team-of-multicultural-engineers-use-computers-insert-a-circuit-board.webp?s=1024x1024&w=is&k=20&c=BP6idCDk0P0y7ZZZ-EfRkyUqTv1o9SkmrXbBDa2yldY=",
    },
    website: "https://comingsoon.eduverse.com",
    socialMedia: {
      twitter: "https://twitter.com/eduversevr",
    },
    team: [
      {
        name: "Michael Lee",
        role: "Co-Founder & CEO",
      },
      {
        name: "Alice Chen",
        role: "Co-Founder & CTO",
      },
    ],
  },

  {
    id: "project7",
    name: "Greenify Inc.",
    tagline: "Sustainable solutions for a greener tomorrow.",
    description:
      "A startup developing innovative technologies for renewable energy and eco-friendly products.",
    progress: 50,
    status: "In Development",
    fundingStatus: "Pre-Seed",
    funding: {
      amount: 560700,
      date: "2024-10-01",
      prototypage:
        "https://media.istockphoto.com/id/2147681904/photo/female-engineer-working-with-robotic-machine-in-factory.webp?s=1024x1024&w=is&k=20&c=GWacgs36rDUYFmgdLn-6qhvUkZQFWHf8cGBUW1akiRY=",
    },
    website: "https://greenifyinc.com",
    socialMedia: {
      facebook: "https://facebook.com/greenifyinc",
      twitter: "https://twitter.com/greenifyinc",
      linkedin: "https://www.linkedin.com/company/greenifyinc",
    },
    team: [
      {
        name: "Sarah Jones",
        role: "CEO & Founder",
      },
      {
        name: "David Lee",
        role: "Head of Engineering",
      },
    ],
  },
  // Add 8 more projects here with unique details
  {
    id: "project8",
    name: "Edufy",
    tagline: "Empowering education through personalized learning.",
    description:
      "A startup creating an adaptive learning platform for K-12 students.",
    progress: 80,
    status: "Beta Testing",
    fundingStatus: "Series A",
    funding: {
      amount: 346000,
      date: "2023-12-20",
      prototypage:
        "https://media.istockphoto.com/id/1167549773/photo/multi-ethnic-team-of-male-and-female-leading-scientists-work-on-innovative-robotics.webp?s=1024x1024&w=is&k=20&c=n0VrHCflDIvaZ3tm8dMA7552xGbnrO0LJ1IQNQ9CrXk=",
    },
    website: "https://edufy.com",
    socialMedia: {
      facebook: "https://facebook.com/edufy",
      twitter: "https://twitter.com/edufy",
      linkedin: "https://www.linkedin.com/company/edufy",
    },
    team: [
      {
        name: "Michael Brown",
        role: "CEO",
      },
      {
        name: "Emily Garcia",
        role: "CTO",
      },
    ],
  },
];

// createTempleCard(temples);
createProjectCard(startupProjects);

const home = document.querySelector("#home");
home.addEventListener("click", () => {
  createProjectCard(startupProjects);
});

function createProjectCard(projects) {
  // document.querySelector(".card-container").innerHTML = "";
  let container = document.querySelector(".card-container");
  if (container) {
    container.innerHTML = "";
  } else {
    container = document.createElement("div");
  }

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // let img = document.createElement("img");
    // img.setAttribute("src", "images/crowdfunding.webp");
    // img.setAttribute("alt", `${project.name} Project`);
    // img.setAttribute("loading", "lazy");
    // img.setAttribute("class", "card-logo");

    // let img2 = document.createElement("img");
    // img2.setAttribute("src", "images/Business_Success.webp");
    // img2.setAttribute("alt", `${project.name} Project`);
    // img2.setAttribute("loading", "lazy");
    // img2.setAttribute("class", "card-logo");

    // card.append(img);
    // card.append(img2);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    const cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details");

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = project.name;
    cardContent.appendChild(title);
    let img3 = document.createElement("img");
    img3.setAttribute("src", project.funding.prototypage);
    img3.setAttribute("alt", `${project.name} Project`);
    img3.setAttribute("loading", "lazy");
    img3.setAttribute("class", "card-logo1");
    cardContent.appendChild(img3);
    const tagline = document.createElement("p");
    tagline.classList.add("card-tagline");
    tagline.textContent = project.tagline;
    cardContent.appendChild(tagline);

    const description = document.createElement("p");
    description.textContent = project.description;
    description.classList.add("card-description");
    cardContent.appendChild(description);

    const progress = document.createElement("p");
    progress.classList.add("card-progress");
    progress.innerHTML = `Progress: <span>${project.progress}</span> %`;
    cardDetails.appendChild(progress);
    const status = document.createElement("p");
    status.classList.add("card-status");
    status.innerHTML = `Status: <span>${project.status}</span>`;
    cardDetails.appendChild(status);
    const funding = document.createElement("p");
    funding.classList.add("card-funding");

    funding.innerHTML = `Funding: 💰💰💰<span>${project.funding.amount}</span> `;
    cardDetails.appendChild(funding);
    // Add a link to the website (optional)
    if (project.website) {
      const websiteLink = document.createElement("a");
      websiteLink.href = `project-details.html?${project.id}`;
      websiteLink.textContent = "See the Project";

      websiteLink.classList.add("link-button");
      cardDetails.appendChild(websiteLink);
    }
    const cardDetails1 = document.createElement("div");
    cardDetails1.classList.add("card-details");
    let team = document.createElement("img");
    team.setAttribute("src", "images/teamworker.png");
    team.setAttribute("alt", `${project.name} Project`);
    team.setAttribute("loading", "lazy");
    team.setAttribute("class", "card-logo");
    cardDetails1.appendChild(team);
    if (project.team) {
      project.team.forEach((team) => {
        const progress1 = document.createElement("p");
        progress1.classList.add("card-progress");
        progress1.innerHTML = `${team.role}: <span>${team.name}</span> %`;
        cardDetails1.appendChild(progress1);
      });
    }
    const status1 = document.createElement("p");
    status1.classList.add("card-status");
    status1.innerHTML = `Date: <span>${project.funding.date}</span>`;
    cardDetails1.appendChild(status1);
    const funding1 = document.createElement("p");
    funding1.classList.add("card-funding");

    funding1.innerHTML = `Progress: 🌡<span>${project.progress}</span> `;
    cardDetails1.appendChild(funding1);
    // Add a link to the website (optiona
    const cardDetailsMain = document.createElement("div");
    cardDetailsMain.classList.add("card-main");
    cardDetailsMain.appendChild(cardDetails);
    cardDetailsMain.appendChild(cardDetails1);
    cardContent.appendChild(cardDetailsMain);
    card.append(cardContent);
    container.appendChild(card);
  });
}

document.querySelectorAll(".link-button").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const val = link.href.split("?");
    const projectId = val[1];
    const project = startupProjects.find((project) => project.id === projectId);
    localStorage.setItem(projectId, JSON.stringify(project));
    localStorage.setItem("projectID", projectId);
    // Redirect to the details page
    window.location.href = val[0];

    console.log();
  });
});

const article =
  document.querySelector(".grid") || document.createElement("article");
const baseURL = "https://marcelmusuyu.github.io/wdd230/chamber";
const membersURL = `${baseURL}/data/members.json`;
let members;

///const content = document.querySelector(".link");

async function getMembers() {
  try {
    const response = await fetch(membersURL);
    if (response.ok) {
      members = await response.json();
      displayMembers(members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayMembers(data) {
  data.forEach((member) => {
    const section = document.createElement("section");
    const img = document.createElement("img");
    const name = document.createElement("h2");
    const description = document.createElement("p");
    description.innerHTML = `💸$ ${member.capital} <br><br>🥇🥈🏅${member.membership}<br>${member.description} <br><em class="map">${member.addresses}</em>`;
    const socialMedia = document.createElement("ul");
    socialMedia.setAttribute("class", "socialMedia");
    const twitter = document.createElement("li");
    const twitterLink = document.createElement("a");
    twitterLink.setAttribute("class", "social");
    twitterLink.setAttribute("href", member.socialMedia.twitter);
    twitter.appendChild(twitterLink);
    twitter.setAttribute("class", "twitter");
    socialMedia.appendChild(twitter);
    const facebook = document.createElement("li");
    const faceLink = document.createElement("a");
    faceLink.setAttribute("class", "social");
    faceLink.setAttribute("href", member.socialMedia.facebook);
    facebook.appendChild(faceLink);
    facebook.setAttribute("class", "facebook");
    socialMedia.appendChild(facebook);

    const linkedIn = document.createElement("li");
    const linkLink = document.createElement("a");
    linkLink.setAttribute("class", "social");
    linkLink.setAttribute("href", member.socialMedia.linkedin);
    linkedIn.appendChild(linkLink);
    linkedIn.setAttribute("class", "linkedin");
    socialMedia.appendChild(linkedIn);

    name.textContent = member.name;
    const website = document.createElement("a");
    website.setAttribute("href", member.website);
    website.setAttribute("class", "btn-get-started");
    website.setAttribute("target", "_blank");
    website.textContent = "Learn More";
    img.setAttribute("src", member.logo);
    img.setAttribute("alt", member.description);
    img.setAttribute("loading", "lazy");
    section.appendChild(img);
    section.appendChild(name);
    section.appendChild(description);

    section.appendChild(socialMedia);
    section.appendChild(website);
    article.appendChild(section);
  });
}
getMembers();

const np = document.querySelector("#np");
np.addEventListener("click", () => {
  article.textContent = "";
  displayMembers(
    members.filter((startup) => {
      return startup.membership.includes("NP Membership");
    })
  );
});

const bronze = document.querySelector("#bronze");
bronze.addEventListener("click", () => {
  article.textContent = "";
  displayMembers(
    members.filter((startup) => {
      return startup.membership.includes("Bronze Membership");
    })
  );
});

const silver = document.querySelector("#silver");
silver.addEventListener("click", () => {
  article.textContent = "";
  displayMembers(
    members.filter((startup) => {
      return startup.membership.includes("Silver Membership");
    })
  );
});

const gold = document.querySelector("#gold");
gold.addEventListener("click", () => {
  article.textContent = "";
  displayMembers(
    members.filter((startup) => {
      return startup.membership.includes("Gold Membership");
    })
  );
});

const all = document.querySelector("#all");
all.addEventListener("click", () => {
  article.textContent = "";
  getMembers();
});
