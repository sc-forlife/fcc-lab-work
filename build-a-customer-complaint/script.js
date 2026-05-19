const fullNameInput = document.getElementById("full-name");

function checkInput(e) {
  if (e.target.checkValidity()) {
    console.log(e.target.checkValidity());
    e.target.style.borderColor = "green";
  } else {
    console.log(e.target.checkValidity());
    e.target.style.borderColor = "red";
  }
}

const form = document.querySelector("form");

form.addEventListener("change", checkInput);
