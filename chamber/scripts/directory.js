const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  const link = document.querySelectorAll(".display-content");
  display.classList.add("grid");
  link.forEach((element) => {
    element.classList.toggle("btn-get-started");
    element.classList.toggle("btn-link");
  });
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  const link = document.querySelectorAll(".display-content");
  display.classList.add("list");
  link.forEach((element) => {
    element.classList.toggle("btn-get-started");
    element.classList.toggle("btn-link");
    console.log(element);
  });

  display.classList.remove("grid");
}

const today = new Date();
const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

// Show banner only on Mondays, Tuesdays, and Wednesdays
if (dayOfWeek >= 1 && dayOfWeek <= 7) {
  document.getElementById("banner").style.display = "block";
}

// Close banner functionality
document.getElementById("close-banner").addEventListener("click", () => {
  document.getElementById("banner").style.display = "none";
  // Optionally, store user preference in local storage
  localStorage.setItem("bannerClosed", "true");
});
const article =
  document.querySelector(".grid") || document.createElement("article");
const baseURL = "https://marcelmusuyu.github.io/wdd230/chamber";
const membersURL = `${baseURL}/data/members.json`;

function showBanner() {
  // Fetch and parse JSON data (replace with your actual data fetching logic)

  fetch(membersURL)
    .then((response) => response.json())
    .then((data) => {
      const spotlightsContainer = document.getElementById("spotlights");
      const eligibleMembers = data.filter(
        (member) =>
          member.membership === "Silver Membership" ||
          member.membership === "Gold Membership"
      );

      // Randomly select 2-3 members
      const spotlightCount = Math.floor(Math.random() * 2) + 1; // Random number between 2 and 3
      const selectedMembers = [];
      while (
        selectedMembers.length < spotlightCount &&
        eligibleMembers.length > 0
      ) {
        const randomIndex = Math.floor(Math.random() * eligibleMembers.length);
        selectedMembers.push(eligibleMembers.splice(randomIndex, 1)[0]);
      }
      spotlightsContainer.textContent = "";
      selectedMembers.forEach((member) => {
        const spotlightDiv = document.createElement("div");
        spotlightDiv.classList.add("spotlight");
        spotlightDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p>Learn more: <a href="${member.website}">${member.website}</a></p>
          `;
        spotlightsContainer.appendChild(spotlightDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching member data:", error);
      // Handle error gracefully (e.g., display an error message)
    });

  const banner = document.getElementById("banner");
  banner.style.display = "block";

  setTimeout(() => {
    banner.style.display = "none";
    showBanner(); // Call the function again immediately
  }, 50000); // Hide after 5 seconds (5000 milliseconds)
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
    website.setAttribute("class", "btn-get-started display-content");
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

// Initial display

// Check if user has previously closed the banner
if (localStorage.getItem("bannerClosed") === "true") {
  showBanner();
}

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

getMembers();
