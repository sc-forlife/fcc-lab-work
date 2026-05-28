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
const otherSolutionsInput = document.getElementById("solution-description");
const otherComplaintButton = document.getElementById("other-complaint");
const otherSolutionButton = document.getElementById("other-solution");
const solutionsGroup = document.getElementById("solutions-group");

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

solutionsGroup.addEventListener("change", () => {
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
  obj["full-name"] = fullNameInput.value ? true : false;
  obj["email"] = emailInput.value ? true : false;
  obj["order-no"] = orderNumInput.value ? true : false;
  obj["product-code"] = productCodeInput.value ? true : false;
  obj["quantity"] = quantityInput.value ? true : false;
  obj["complaints-group"] = complaintsGroupInput.value ? true : false;
  obj["other-complaint"] = otherComplaintsInput.value ? true : false;

  if (otherComplaintsInput) {
    if (complaintDescription.checkValidity()) {
      obj["complaint-description"] = true;
    } else {
      obj["complaint-description"] = false;
    }
  } else {
    obj["complaint-description"] = true;
  }

  obj["solutions-group"] = solutionsGroupInput.value ? true : false;
  obj["solution-description"] = otherSolutionsInput.value ? true : false;

  return obj;
}

//how do we get complaint group value to bring false when nothing is selected , but re-check the fcc instructions

function checkInput(e) {
  if (e.target.name === "complaint") {
    const complaintsSelect = document.getElementsByName("complaint");
    const fieldsetComplaint = document.getElementById("complaints-group");
    for (const checkbox of complaintsSelect) {
      if (checkbox.checked) {
        fieldsetComplaint.style.borderColor = "green";
        break;
      } else {
        fieldsetComplaint.style.borderColor = "red";
      }
    }
  } else if (e.target.name === "solutions") {
    const solutionsSelect = document.getElementsByName("solutions");
    const fieldsetSolutions = document.getElementById("solutions-group");
    for (const checkbox of solutionsSelect) {
      if (checkbox.checked) {
        fieldsetSolutions.style.borderColor = "green";
        break;
      } else {
        fieldsetSolutions.style.borderColor = "red";
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
