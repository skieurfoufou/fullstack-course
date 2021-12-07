const button = document.getElementById("btn");
button.addEventListener("click", appearDisappear);

function appearDisappear() {
  const h1 = document.querySelector(".title");
  h1.classList.toggle("hidden");
  const div = document.querySelector("div");
  div.classList.toggle("hidden");
}
