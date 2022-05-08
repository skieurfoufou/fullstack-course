const password = document.getElementById("password");
const PASSWORD_LENGTH = 12;

function genPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = PASSWORD_LENGTH;
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  const copyText = document.getElementById("password");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}
