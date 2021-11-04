// const secretAnswer = "gad is cool";
// const maxGuesses = 4;
// let guessCounter = 0;
// let charGuessedCounter = 0;

// let isValidGuess = true;
// do {
//   const message = isValidGuess
//     ? guessCounter === 0
//       ? "enter a guess:"
//       : "enter another guess:"
//     : "enter a VALID guess: ";
//   const charGuess = prompt(message).toLowerCase();
//   if (charGuess.length != 1) {
//     isValidGuess = false;
//     continue;
//   } else {
//     isValidGuess = true;
//     if (secretAnswer.includes(charGuess)) {
//       charGuessedCounter++;
//     }
//     guessCounter++;
//   }
// } while (guessCounter < maxGuesses);

// console.log(`you guessed ${charGuessedCounter} / ${maxGuesses}`);

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
