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

otherSolutionButton.addEventListener("click", () => {
  solutionDescriptionContainer.classList.toggle(
    "display-description-container",
  );
});

function validateForm(e) {
  e.preventDefault();

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

  console.log(obj);

  return obj;
}

//how do we get complaint group value to bring false when nothing is selected , but re-check the fcc instructions

function checkInput(e) {
  if (e.target.name === "complaint") {
    const complaintsSelect = document.getElementsByName("complaint");
    const fieldset = document.getElementById("complaints-group");
    for (const checkbox of complaintsSelect) {
      if (checkbox.checked) {
        fieldset.style.borderColor = "green";
        // is other selected before checking
        if ((checkbox.value = "other")) {
          //check the textarea if its valid
          if (complaintDescription.checkValidity()) {
            complaintDescription.style.borderColor = "green";
          } else {
            complaintDescription.style.borderColor = "red";
          }
        }
        break;
      } else {
        fieldset.style.borderColor = "red";
      }
    }
  } else if (e.target.checkValidity() && e.target.value !== "") {
    console.log(e.target.checkValidity());
    e.target.style.borderColor = "green";
  } else {
    console.log(e.target.checkValidity());
    e.target.style.borderColor = "red";
  }
}

//form buttons
const form = document.querySelector("form");
const submit = document.getElementById("submit-btn");

form.addEventListener("change", checkInput);

submit.addEventListener("click", (e) => {
  validateForm(e);
});
