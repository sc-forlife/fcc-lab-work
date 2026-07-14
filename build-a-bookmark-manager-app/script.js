const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const addBookBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");
const addBookmartsBtnForm = document.getElementById("add-bookmark-button-form");
const viewCategoryBtn = document.getElementById("view-category-button");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");

//bookmarks from LS
const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

//get the books from the local storage
const getBookmarks = () => {
  return bookmarks;
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const clearInputs = () => {
  nameInput.value = "";
  urlInput.value = "";
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

const updatePageHeader = () => {
  const categorySelected =
    categoryDropdown.value.slice(0, 1).toUpperCase() +
    categoryDropdown.value.slice(1);

  categoryName.innerText = categorySelected;
};

// changes to form section
addBookBtn.addEventListener("click", () => {
  updatePageHeader();
  displayOrCloseForm();
});

//close form section
closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmartsBtnForm.addEventListener("click", () => {
  //update the bookmarks in LS
  //add array at the end

  const bookmarkName = nameInput.value;
  const category = categoryName.innerText;
  const url = urlInput.value;

  const objProperties = !bookmarkName || !category || !url;

  if (objProperties) {
    alert("Please provide all details");
    return;
  }
  //add new obj in the localStorage
  bookmarks.push({ name: bookmarkName, category: category, url: url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  clearInputs();
  displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
  updatePageHeader();
  //User stories
  displayOrHideCategory();
});
