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
const categoryList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

const getBookmarks = () => {
  //get the books from the local storage
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || ["Empty"];
  console.log(bookmarks);
  //bookmarks from LS
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
  const bookmarks = getBookmarks();
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

const viewFunction = () => {
  updatePageHeader();
  //User stories
  let selectedBookmarks = getBookmarks();
  selectedBookmarks = selectedBookmarks.filter(
    (bookmark) => bookmark.category === categoryName.innerText,
  );
  if (selectedBookmarks.length) {
    selectedBookmarks.forEach((bookmark) => {
      categoryList.innerHTML += `<label><input type="radio" name="category-list" id="${bookmark.name}" value="${bookmark.name}"/><a href="${bookmark.url}">  ${bookmark.name}</a></label><br>`;
    });
  } else {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  }
  displayOrHideCategory();
};

viewCategoryBtn.addEventListener("click", viewFunction);

closeListBtn.addEventListener("click", () => {
  categoryList.innerHTML = "";
  displayOrHideCategory();
});

deleteBookmarkBtn.addEventListener("click", () => {
  const radioBtns = document.getElementsByName("category-list");
  console.log(radioBtns);
  radioBtns.forEach((radio) => {
    if (radio.checked) {
      const bookmark = getBookmarks().filter((book) => {
        return book.name !== radio.value;
      });
      localStorage.setItem("bookmarks", JSON.stringify(bookmark));
    }
  });
  console.log(getBookmarks());
  categoryList.innerHTML = "";
  viewFunction();
  displayOrHideCategory();
});
