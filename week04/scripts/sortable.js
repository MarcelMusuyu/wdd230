function toggleSort(btnID, colID, colNum, regionID) {
  var theButton = document.getElementById(btnID);
  var theColumn = document.getElementById(colID);
  var liveRegion = document.getElementById(regionID);
  var sortedTDs = document.querySelectorAll(
    "td:nth-child(" + colNum + "), *[role=cell]:nth-child(" + colNum + ")"
  );
  var currSort = theColumn.getAttribute("aria-sort");
  if (currSort == "descending") {
    clearSorts();
    theColumn.setAttribute("aria-sort", "ascending");
    liveRegion.innerHTML = "sorted up";
  } else {
    clearSorts();
    theColumn.setAttribute("aria-sort", "descending");
    liveRegion.innerHTML = "sorted down";
  }
  for (var i = 0; i < sortedTDs.length; i++) {
    sortedTDs[i].classList.add("sorted");
  }
  setTimeout(function () {
    liveRegion.innerHTML = "";
  }, 1000);
  // for the fake live region to see the output
  document.getElementById("FakeLiveRegion").innerHTML = liveRegion.innerHTML;
}

function clearSorts() {
  var thSort = document.querySelectorAll("*[aria-sort]");
  var tdSort = document.querySelectorAll(".sorted");
  var thBtn = document.querySelectorAll(
    "th > button, *[role=columnheader] > button"
  );
  for (var i = 0; i < thSort.length; i++) {
    thSort[i].removeAttribute("aria-sort");
  }
  for (var i = 0; i < tdSort.length; i++) {
    tdSort[i].classList.remove("sorted");
  }
}

// Manage live region for demo
function flipLiveRegion(val) {
  var liveRegion = document.getElementById("SortNote");
  if (val == "off") {
    liveRegion.removeAttribute("aria-live");
  } else {
    liveRegion.setAttribute("aria-live", val);
  }
}

function toggleLiveRegion(btnID) {
  var deToggle = document.querySelectorAll(
    "button.toggleLiveRegion[aria-pressed]"
  );
  for (var i = 0; i < deToggle.length; i++) {
    deToggle[i].setAttribute("aria-pressed", "false");
  }
  var theButton = document.getElementById(btnID);
  theButton.setAttribute("aria-pressed", "true");
  flipLiveRegion(btnID);
}
