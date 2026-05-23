//form inputs

const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNumInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintsGroupInput = document.getElementById("complaints-group");
const otherComplaintsInput = document.getElementById("other-complaint");
const solutionsGroupInput = document.getElementById("solutions-group");
const otherSolutionsInput = document.getElementById("solution-description");

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
    checkTrue: for (const checkbox of complaintsSelect) {
      if (checkbox.checked) {
        fieldset.style.borderColor = "green";
        break checkTrue;
      } else {
        fieldset.style.borderColor = "red";
      }
    }
  }
  // if (e.target.checkValidity() && e.target.value !== "") {
  //   console.log(e.target.checkValidity());
  //   e.target.style.borderColor = "green";
  // } else {
  //   console.log(e.target.checkValidity());
  //   e.target.style.borderColor = "red";
  // }
}

//form buttons
const form = document.querySelector("form");
const submit = document.getElementById("submit-btn");

form.addEventListener("change", checkInput);

submit.addEventListener("click", (e) => {
  validateForm(e);
});
