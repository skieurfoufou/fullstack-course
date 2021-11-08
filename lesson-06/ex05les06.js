//Exercise Math
const amountOfSum = parseInt(prompt("how many numbers you want ?")); //5
const minNumber = parseInt(prompt("what is your minimum number ?")); //40
const maxNumber = parseInt(prompt("what is your maximun number ?")); //50

for (i = 0; i < amountOfSum; i++) {
  let randomNumber = (maxNumber - minNumber) * Math.random() + minNumber;
  console.log(randomNumber);
}
