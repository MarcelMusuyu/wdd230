const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

//  Book of Mormon localStorage

let chaptersArray = getChapterList() || [];

//Now let's populate the displayed list of chapters
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  const myItem = input.value;
  if (myItem.trim() === "") {
    const li = document.createElement("li");
    li.innerHTML = "<strong>Please make sure to fill the input</strong>";
    li.style.backgroundColor = "#dbbb57";
    li.style.color = "#3c2d04";
    list.appendChild(li);

    input.focus();
  } else {
    input.value = "";
    displayList(myItem);
    chaptersArray.push(myItem);
    setChapterList(); // update the localStorage with the new array

    input.focus();
  }
});

function displayList(item) {
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  item === "" ? "Helaman 5:2" : item;
  li.textContent = item; // note the use of the displayList parameter 'item'

  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete"); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
  });
  console.log(
    "I like to copy code instead of typing it out myself and trying to understand it."
  );
}
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
  //reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when we called the deleteChapter function. Use string.slice() method to extract the last character.
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
