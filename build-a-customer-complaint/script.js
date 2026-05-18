export function validateForm() {
  const obj = {};

  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const OrderNoInput = document.getElementById("order-no");
  const ProductCodeInput = document.getElementById("product-code");

  // console.log(fullNameInput.checkValidity());
  // console.log(fullNameInput.validity);

  obj["fullName"] = fullNameInput.checkValidity();
  obj["email"] = emailInput.checkValidity();
  obj["order-no"] = OrderNoInput.checkValidity();
  obj["product-code"] = ProductCodeInput.checkValidity();

  console.log(fullNameInput.validity);
  console.log(emailInput.validity);

  return obj;
}

const form = document.querySelector("form");

form.addEventListener("input", () => {
  validateForm();
});
