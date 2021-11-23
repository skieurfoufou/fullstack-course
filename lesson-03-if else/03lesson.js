/*
let num = prompt("enter a number from 1 to 10");
let numParsed = Number(num);

if (Number(num) === 5) {
  alert("this is five");
} else {
  alert("this is not five");
  console.log("hello");
}

//exercise 1
let num1 = prompt("enter a number ");
let num2 = prompt("enter a number ");
alert ("num1*num2= "+num1*num2)

//exercise 2
let nameUser = prompt("enter your name ");
let ageUser = prompt("enter your age ");
alert (nameUser +" is "+ageUser+" years")

//exercise 3
const birthUser = prompt("enter your birth year");
const actualYear = new Date().getFullYear()
const ageUser = actualYear - birthUser;
alert("you are " + ageUser + " years old");

//exercise 4
const whatHour = prompt("enter the hour ( between 1-24)");
if (whatHour >= 1 && whatHour < 6) {
  alert("good night");
} else if (whatHour >= 6 && whatHour < 12) {
  alert("good morning");
} else if (whatHour >= 12 && whatHour < 18) {
  alert("good afternoon");
} else {
  alert("good evening");
}

//exercise 5
const userNumber = prompt("Please, enter a number (from 1-10)");
const computerNumber = Math.floor(Math.random() * 11);
if (userNumber > 10 || userNumber < 0) {
  alert("your number isn't between 0 to 10");
} else if (userNumber === computerNumber) {
  alert("good job , it's my number");
} else {
  alert("sorry, it's not my number \n" + "my number was " + computerNumber);
}

//exercise 6
const firstAnswer = prompt("what is the capital of Israel ? (10 points)");
let totalPoints = 0;
if (firstAnswer.toLowerCase() === "jerusalem") {
  alert("good answer you won 10 points");
  totalPoints = totalPoints + 10;
}
const secondAnswer = prompt("what is the capital of France ? (10 points)");
if (secondAnswer.toLowerCase() === "paris") {
  alert("good answer you won 10 points");
  totalPoints = totalPoints + 10;
}
const thirdAnswer = prompt("what is the capital of USA ? (10 points)");
if (thirdAnswer.toLowerCase() === "washington") {
  alert("good answer you won 10 points");
  totalPoints = totalPoints + 10;
}
alert("you won :" + totalPoints + " points");

//exercise 7
const firstNumber = prompt("Please, enter a number ?");
const secondNumber = prompt("Please, enter a second number ?");
if (firstNumber === secondNumber) {
  alert("You have written the same number twice !");
} else {
  alert("You have written two different numbers  !");
}

//exercise 8
// i don't think so

//exercise 9
const num1 = prompt("Please, enter a number ?");
if (num1 === "1") {
  alert("i am 1");
} else {
  alert("i am not 1");
}

//exercise 10
const foo = true;
if (foo === true) {
  alert("i am true");
} else {
  alert("i am false");
}

//exercise 11
const foo = true;
if (!foo) {
  alert("i am false");
} else {
  alert("i am true");
}

//exercise 12
const foo = Math.floor(Math.random() * 11);
if (foo > 5) {
  alert("i am greater than five ,i am " + foo);
} else {
  alert("i am lesser than five ,i am " + foo);
}

//exercise 13
let bar = 101;
if (!(bar < 100)) {
  console.log("i am 100 or greater than 100 !");
} else {
  console.log("i am lesser than 100 !");
}

// exercise 14
let num1 = 1;
if (num1 == true) {
  alert("i am always true");
} else {
  alert("i am always false");
}
// exercise 15
if (0 == false) {
  alert("i am always false");
} else {
  alert("i am always true");
}
//exercise 16   
const num = prompt("Enter a number: ");
if (num % 2 == 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

//exercise 17
const numIChoose = 52;
const userNum = prompt("please,enter a number?");
if (userNum < numIChoose) {
  alert("your number is lesser than mine");
} else if (userNum > numIChoose) {
  alert("your number is greater than mine");
} else {
  alert("your number is equal to mine");
}
alert("i finished checking");

//exercise 18
const firstNum = prompt("enter the first number?");
const secondNum = prompt("enter the second number?");
const thirdNum = prompt("enter the third number?");
if (firstNum > secondNum && firstNum > thirdNum) {
  alert("your first number " + firstNum + " is the greater");
} else if (secondNum > firstNum && secondNum > thirdNum) {
  alert("your second number " + secondNum + " is the greater");
} else {
  alert("your third number " + thirdNum + " is the greater");
}

//exercise 18 - alternative
const firstNum = prompt("enter the first number?");
const secondNum = prompt("enter the second number?");
const thirdNum = prompt("enter the third number?");
alert(`the biggest number is ${Math.max(firstNum, secondNum, thirdNum)}`);

//Math.max(3, 5, 7);

//const userName = "ariel";
//const userAge = 24;
//console.log("my name is " + userName + " and my age is " + userAge + ".");
//console.log(`my name is '${userName}', and my age "is" ${userAge}.`);

//const birthYear = 1977;

//const str = `your are very ${birthYear < 1980 ? "old" : "young"}`;
//console.log(str);

//const inputPotatoes = 8;
//const numberOfPotatoes = `you have ${inputPotatoes} ${inputPotatoes > 1 ? "potatoes": "potato"}`

//exercise 19
let whoIsThere = prompt("who's there ?");
const passWordAdmin = "TheMaster";

if (whoIsThere.toLowerCase() === "") {
  alert("by by you canceled !");
} else if (whoIsThere.toLowerCase() !== "admin") {
  alert("i don't know you");
} else {
  //if (whoIsThere.toLowerCase() === "admin")
  const userPass = prompt("what is your password ?");
  if (userPass.toLowerCase() === "") {
    alert("by by you canceled !");
  } else if (userPass !== passWordAdmin) {
    alert("Sorry, wrong password !");
  } else {
    alert("Welcome !!!");
  }
}

//exercise 20
let userMealCost = Number(prompt("what is the cost of the meal you ate ?"));
//userMealCost = Number(userMealCost);

let tip = 0;

if (userMealCost >= 50 && userMealCost <= 200) {
  tip = userMealCost * 0.15;
} else {
  tip = userMealCost * 0.2;
}
const totalCost = userMealCost + tip;
alert(
  "your meal cost " +
    userMealCost +
    ", your tip is " +
    tip +
    ", your total amount is " +
    totalCost.toFixed(2) // to avoid many decimals
);

//exercise 21
const colorTrafficLight = prompt(
  "what is the color of the traffic light ? (red, yellow, green)"
);
if (colorTrafficLight.toLowerCase() === "red") {
  alert("stop now !");
} else if (colorTrafficLight.toLowerCase() === "yellow") {
  alert("slow down ");
} else if (colorTrafficLight.toLowerCase() === "green") {
  alert("drive please ");
} else {
  alert("there is no colour like that in traffic light");
}

let result = window.confirm("voulez vous quitter ?");
*/
