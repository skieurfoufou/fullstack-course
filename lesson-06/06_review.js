/*
 let tip=(!(cost>50 && cost >170))? 0.10 :0.20;
console.log (`tip: ${tip*cost}`);

let color = prompt("enter a color ? (red,orange,green)");

let answer =
  color == "red"
    ? "stop"
    : color == "green"
    ? "drive"
    : color == "orange"
    ? "slowly"
    : "wrong color";

console.log(`you have to ${answer}`);

let speed = prompt("enter your speed ?");

let answerSpeed =
  speed < 40
    ? "drive"
    : speed >= 40 && speed < 80
    ? "have a good trip"
    : speed >= 80 && speed < 120
    ? "slowly"
    : "stop now";

console.log(answerSpeed);

let bigger = a > b ? (a > c ? a : c) : b > c ? b : c;



let userName = prompt("enter your user name?");
let lastName = prompt("enter your last name?");
let firstName = prompt("enter your first name ?");

console.log(`hello ${userName || firstName || familyName || "anonymous"}`);

alert(alert(1) || 2 || 3);
alert(1) || alert(2) || alert(3);

let x;
for (i = 0; i < 1000; i++) {
  x = prompt();
  if (x == "exit") {
    break;
  }
  if (!isNaN(x)) {
    continue;
  }
  console.log("input: " + x);
}
console.log("end");
*/

let strUser = prompt("enter a string?");
let choice = prompt(`what's your choice?:
[1] - print all the letters one after the other
[2] - print the inverse string
[3] - print if philindrom`);
//("aviad");
if (choice == 1) {
  for (i = 0; i < strUser.length; i++) {
    console.log(`${strUser[i]}`);
  }
} else if (choice == 2) {
  let u = strUser.length - 1;
  for (i = 0; i < strUser.length; i++) {
    console.log(`${strUser[u]}`);
    u -= 1;
  }
} else if (choice == 3) {
  let u = strUser.length - 1;
  let strDown = "";
  for (i = 0; i < strUser.length; i++) {
    strDown = strDown + strUser[u];
    u -= 1;
  }
  if (strUser == strDown) {
    console.log(strDown);
  } else {
    console.log("not a philindrom");
  }
}
/*
//SWITCH CASE
let choose;
switch (choose) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  default:
    console.log("default");
}
*/
