const welcomeMessage =
  document.getElementById("welcome-message") || document.createElement("div");

// Get the last visit date from localStorage
const lastVisitDate = localStorage.getItem("lastVisit");

// Get today's date
const today_ = new Date();

if (!lastVisitDate) {
  // First visit
  welcomeMessage.textContent =
    "Welcome! Let us know if you have any questions.";
  localStorage.setItem("lastVisit", today_);
} else {
  const lastVisit = new Date(lastVisitDate);
  const timeDiff = Math.floor((today_ - lastVisit) / (1000 * 60 * 60 * 24)); // Calculate days

  if (timeDiff < 1) {
    welcomeMessage.textContent = "🙋🏾‍♂️Back so soon Awesome!";
  } else if (timeDiff === 1) {
    welcomeMessage.textContent = `You last visited ${timeDiff} day ago.`;
  } else {
    welcomeMessage.textContent = `You last visited ${timeDiff} days ago.`;
  }

  // Update last visit date in localStorage
  localStorage.setItem("lastVisit", today_);
}

const calendarDates = document.querySelector(".calendar-dates");
const monthYear = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalendar() {
  calendarDates.innerHTML = "";
  monthYear.textContent = `${months[month]} ${year}`;

  // Get the first day of the month
  let firstDay = new Date(year, month, 1).getDay();

  // Get the number of days in the month
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create blanks for days of the week before the first day
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("div");

    calendarDates.appendChild(blank);
  }

  // Populate the days
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.textContent = i;
    if (i === 25) {
      day.classList.add("event");
    }
    calendarDates.appendChild(day);
  }
}

renderCalendar();

prevMonthBtn.addEventListener("click", () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  renderCalendar();
});
