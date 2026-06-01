//form inputs

const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNumInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintsGroupInput = document.getElementById("complaints-group");
const otherComplaintsInput = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroupInput = document.getElementById("solutions-group");

//This is wrong ???????
//You need to query "Other radio button" to check if its selected or not
const otherSolutionsInput = document.getElementById("solution-description");
const otherComplaintButton = document.getElementById("other-complaint");
const otherSolutionButton = document.getElementById("other-solution");
const complaintsSelect = document.getElementsByName("complaint");
const solutionsSelect = document.getElementsByName("solutions");

const complaintDescriptionContainer = document.getElementById(
  "complaint-description-container",
);
const solutionDescriptionContainer = document.getElementById(
  "solution-description-container",
);

otherComplaintButton.addEventListener("click", () => {
  complaintDescriptionContainer.classList.toggle(
    "display-description-container",
  );
});

solutionsGroupInput.addEventListener("change", () => {
  if (otherSolutionButton.checked) {
    solutionDescriptionContainer.classList.add("display-description-container");
  } else {
    solutionDescriptionContainer.classList.remove(
      "display-description-container",
    );
  }
});

function validateForm() {
  //check if inputs not empty
  const obj = {};
  obj["full-name"] = fullNameInput.value ? true : false; //good
  obj["email"] = emailInput.checkValidity() ? true : false; //good
  obj["order-no"] = orderNumInput.checkValidity() ? true : false; //bad
  obj["product-code"] = productCodeInput.checkValidity() ? true : false; //bad
  obj["quantity"] = quantityInput.checkValidity() ? true : false; //bad

  obj["complaints-group"] = false;
  for (const checkbox of complaintsSelect) {
    if (checkbox.checked) {
      obj["complaints-group"] = true;
      break;
    }
  }

  if (otherComplaintsInput.checked) {
    //good

    obj["complaint-description"] = complaintDescription.checkValidity()
      ? true
      : false;
  } else {
    obj["complaint-description"] = true;
  }

  obj["solutions-group"] = false; //bad

  for (const radio of solutionsSelect) {
    if (radio.checked) {
      obj["solutions-group"] = true;
      break;
    }
  }

  //This is wrong
  //This is not
  if (otherSolutionButton.checked) {
    obj["solution-description"] = otherSolutionsInput.checkValidity()
      ? true
      : false; //bad
  } else {
    obj["solution-description"] = true; //bad
  }

  return obj;
}

//how do we get complaint group value to bring false when nothing is selected , but re-check the fcc instructions

function checkInput(e) {
  if (e.target.name === "complaint") {
    for (const checkbox of complaintsSelect) {
      if (checkbox.checked) {
        complaintsGroupInput.style.borderColor = "green";
        break;
      } else {
        complaintsGroupInput.style.borderColor = "red";
      }
    }
  } else if (e.target.name === "solutions") {
    for (const checkbox of solutionsSelect) {
      if (checkbox.checked) {
        solutionsGroupInput.style.borderColor = "green";
        break;
      } else {
        solutionsGroupInput.style.borderColor = "red";
      }
    }
  } else if (e.target.checkValidity() && e.target.value !== "") {
    e.target.style.borderColor = "green";
  } else {
    e.target.style.borderColor = "red";
  }
}

function isValid(validateFunc) {
  const obj = validateFunc();

  console.log(obj);

  for (const key in obj) {
    if (!obj[key]) {
      return false;
    }
  }

  return true;
}

//form buttons
const form = document.querySelector("form");
const submit = document.getElementById("submit-btn");

form.addEventListener("change", checkInput);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(isValid(validateForm));
});
