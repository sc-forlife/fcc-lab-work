const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookBtn = document.getElementById("add-bookmark-button");
const closeFormBtn = document.getElementById("close-form-button");
const categoryName = document.querySelector(".category-name");
const categoryDropdown = document.getElementById("category-dropdown");

//get the books from the local storage
const getBookmarks = () => {
  const books = JSON.parse(localStorage.getItem("bookmarks"));
  //check if books exist
  if (books) {
    return books;
  } else {
    return [];
  }
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

addBookBtn.addEventListener("click", () => {
  const categorySelected =
    categoryDropdown.value.slice(0, 1).toUpperCase() +
    categoryDropdown.value.slice(1);

  categoryName.innerText = categorySelected;
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});
