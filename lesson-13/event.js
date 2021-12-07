let x = document.getElementById;

function getDate() {
  console.log(new Date());
}
document.getElementById("btn2").onclick = getDate;
document.getElementById("btn2").value = "click !!!!";
document.getElementById("btn2").addEventListener("click", function (ev) {});

let btn = document.createElement("input");
btn.setAttribute("type", "button");
btn.setAttribute("id", "btn3");
btn.setAttribute("value", "button3");
document.querySelector("div").appendChild(btn);
