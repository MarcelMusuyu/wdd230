const last = document.querySelector("#last");
// use the date object
const today = new Date();

const lastModified = document.lastModified;
const formattedDateTime = new Date(lastModified).toLocaleString();

last.innerHTML = `Last modification ${formattedDateTime}`;

const year = document.querySelector("#currentyear");
year.innerHTML = `${today.getFullYear()}`;

// const products = [
//   {
//     id: "fc-1888",
//     name: "flux capacitor",
//     averagerating: 4.5,
//   },
//   {
//     id: "fc-2050",
//     name: "power laces",
//     averagerating: 4.7,
//   },
//   {
//     id: "fs-1987",
//     name: "time circuits",
//     averagerating: 3.5,
//   },
//   {
//     id: "ac-2000",
//     name: "low voltage reactor",
//     averagerating: 3.9,
//   },
//   {
//     id: "jj-1969",
//     name: "warp equalizer",
//     averagerating: 5.0,
//   },
// ];

// const productSelect = document.getElementById("product");

// products.forEach((product) => {
//   const option = document.createElement("option");
//   option.value = product.id;
//   option.text = product.name;

//   productSelect.appendChild(option);
// });

const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#password-confirmation");
const message = document.querySelector("#formmessage");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  if (kp1.value !== kp2.value) {
    message.textContent = "❗The passwords  DO NOT MATCH!";
    message.style.visibility = "show";
    kp2.style.backgroundColor = "#fff0f3";
    kp2.value = "";
    kp2.focus();
  } else {
    message.style.display = "none";
    kp2.style.backgroundColor = "#fff";
    kp2.style.color = "#000";
  }
}

const form = document.getElementById("product-review-form");

let reviewCount = localStorage.getItem("reviewCount") || 0; // Get stored review count or initialize to 0

form.addEventListener("submit", (event) => {
  reviewCount++;

  localStorage.setItem("reviewCount", reviewCount); // Store updated review count
  if (!emailInput.validity.valid) {
    emailError.style.display = "block"; // Show error message

    event.preventDefault(); // Prevent form submission
    // Optional: Focus the user on the email input field again
    emailInput.focus();
  } else {
    emailError.style.display = "none"; // Hide error if valid
    // The form will submit if validation passes
  }
});
