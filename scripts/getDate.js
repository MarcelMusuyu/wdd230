const last = document.querySelector("#last");
// use the date object
const today = new Date();

const lastModified = document.lastModified;
const formattedDateTime = new Date(lastModified).toLocaleString();

last.innerHTML = `Last modification ${formattedDateTime}`;

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

// Get the current visit count from local storage
let visitCount = localStorage.getItem("visitCount") || 0;

// If no count exists, initialize it to 1
if (!visitCount) {
  visitCount = 1;
} else {
  // Otherwise, increment the count
  visitCount = parseInt(visitCount) + 1;
}

// Update the visit count in local storage
localStorage.setItem("visitCount", visitCount);

// Display the visit count (optional)
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
