const popup = document.getElementById('popup')
const submit = document.getElementById("submit");
const form = document.getElementById("formID");

form.addEventListener('submit', openPopup);

function openPopup(event) {
  event.preventDefault();
  if (validate()) {
    popup.classList.add('open-popup');
    form.reset();
  }
  return false;
}

function closePopup() {
  popup.classList.remove('open-popup');
}

function validate() {

  const nameField = document.getElementById("name");
  const eMailField = document.getElementById("email");
  const phoneField = document.getElementById("phone");
  const msgField = document.getElementById("msg");

  let valid = nameField.checkValidity() && eMailField.checkValidity() &&
      phoneField.checkValidity() && msgField.checkValidity();

  return valid;
}