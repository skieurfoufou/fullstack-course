//Exercise 1
/*
let inputStr = "applE, BanaNa, Kiwi, AvOCado, CheRry, FiGs, LeMon, GrapEs";
inputStr = inputStr + ",";
let separatorIndex = inputStr.indexOf(",");
let startIndex = 0;

while (separatorIndex != -1) {
  let word = inputStr.slice(startIndex, separatorIndex);
  word = word.toLowerCase().trim();

  let firstChar = word.charAt(0).toUpperCase();

  word = firstChar + word.slice(1);

  console.log(`${word} | ${word.length}`);
  startIndex = separatorIndex + 1;

  separatorIndex = inputStr.indexOf(",", separatorIndex + 1);
}

//Exercise 2
const secretAnswer = "gad is cool";
let guessCounter = 0;
let charGuessedCounter = 0;

let charGuess = prompt("enter a guess ?").toLowerCase();

while (guessCounter <= 3) {
  if (charGuess.length != 1) {
    charGuess = prompt("please fix");
  } else {
    if (secretAnswer.includes(charGuess)) {
      charGuessedCounter++;
    }
    guessCounter++;
    if (guessCounter !== 4) {
      charGuess = prompt("please enter a new guess ?");
    }
  }
}
console.log(`you guessed ${charGuessedCounter} / 4`);

//Exercise 3
let str = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    str = `${str}\t\t\t${i * j}`;
  }
  console.log(str);
  str = "";
}

//Exercise 3 BONUS
let str = "";
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 10; j++) {
    str = `${str}\t\t\t${i * j}`;
  }
  console.log(str);
  str = "";
}

//Exercise 4
let str = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    if (String(i * j).includes("8")) {
      str = `${str}\t\tBOOM`;
    } else {
      str = `${str}\t\t${i * j}\t`;
    }
  }
  console.log(str);
  str = "";
}
*/

//Exercise Math
const amountOfSum = parseInt(prompt("how many numbers you want ?")); //5
const minNumber = parseInt(prompt("what is your minimum number ?")); //40
const maxNumber = parseInt(prompt("what is your maximun number ?")); //50

for (i = 0; i < amountOfSum; i++) {
  let randomNumber = (maxNumber - minNumber) * Math.random() + minNumber;
  console.log(randomNumber);
}
