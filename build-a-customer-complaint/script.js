export function validateForm() {
  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const orderNumInput = document.getElementById("order-no");
  const productCodeInput = document.getElementById("product-code");
  return { fullName: fullNameInput.checkValidity() };
}
