const last = document.querySelector("#last");
// use the date object
const today = new Date();

const lastModified = document.lastModified;
const formattedDateTime = new Date(lastModified).toLocaleString();

last.innerHTML = `Last modification ${formattedDateTime}`;

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
// Get the current visit count from local storage
let visitCount = localStorage.getItem("visitCount") || 0;

// If no count exists, initialize it to 1
if (!visitCount) {
  visitCount = 1;
} else {
  // 4️⃣ increment the number of visits by one.
  visitCount = parseInt(visitCount) + 1;
}

// Update the visit count in local storage
// 5️⃣ store the new visit total into localStorage, visitCount
localStorage.setItem("visitCount", visitCount);

// 1️⃣ Initialize display element variable
const visitCountElement = document.getElementById("visit-count");
if (visitCountElement) {
  visitCountElement.textContent = `Pages Visits: ${visitCount}.`;
}

links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Remove active class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    link.classList.add("active");
  });
});
