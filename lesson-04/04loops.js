/*
let num=Number(prompt("enter a number ?"));
while (num<10){
console.log ("bad number "+ num )}
*/
/*
let userName = prompt("enter your name?");

while (userName.length > 7 || userName.length < 2) {
  console.log("bad name");
  userName = prompt("enter your name again?");
}

alert("shalom " + userName);


let score = prompt("enter a score");
let student = 0;
let scoreSum = 0;
let maxScore = 0;
let minScore = 100;

while (score != "exit") {
  let number = Number(score);
  student = student + 1;
  scoreSum = scoreSum + number;
  if (score > maxScore) {
    maxScore = score;
  }
  if (score < minScore) {
    minScore = score;
  }
  score = prompt("enter a score");
}
console.log(student + " students");
console.log("the average score is: " + scoreSum / student);
console.log("the score max is :" + maxScore);
console.log("the min score is :" + minScore);



let userNumber = prompt("enter a number ?");
numberSum = 0;
numberScore = 0;

while (userNumber != "exit") {
  numberSum += Number(userNumber);
  numberScore++;
  userNumber = prompt("enter a new number ?");
}
console.log(` the sum is :${numberSum} \n you entered :${numberScore} scores`);

let str = "abcdef";
let counter = 0;
let counterTrue = 0;
let guess = prompt("enter a guess ?");

while (counter < 4) {
  if (guess.length > 1) guess = prompt("please fix");
  else {
    if (str.includes(guess)) {
      counterTrue++;
    }
    counter++;
    if (counter>4)
    guess = prompt("please enter a new guess ?");
  }
}
console.log`you guess ${counterTrue} from 4`;

//exercise 1
let counter = 0;
while (counter < 10) {
  if (counter != 5) {
    console.log(counter);
  }
  counter++;
}

//exercise 2
let counter = 0;
while (counter < 11) {
  if (counter % 2 == 0) {
    console.log(counter);
  }
  counter++;
}

//exercise 3
let counter = 7;
while (counter < 78) {
  console.log(counter);
  counter = counter + 7;
}

//exercise 4
let counter = 3;
while (counter < 301) {
  console.log(counter);
  counter = counter + 3;
}

//exercise 5
let counter = 1;
let str = "*";
while (counter < 6) {
  console.log(str);
  str = str + "*";
  counter++;
}

//exercise 5 bonus
let numberUser = Number(prompt("enter a number ?"));
let counter = 1;
let str = "*";
while (counter <= numberUser) {
  console.log(str);
  str = str + "*";
  counter++;
}
// exercise 6
let is3Digit, num;
do {
  num = Number(prompt("enter a  number?"));
  const isPositive3Digit = num >= 100 && num < 1000;
  const isNegative3Digit = num <= -100 && num > -1000;
  is3Digit = isPositive3Digit || isNegative3Digit;
} while (!is3Digit);
console.log(`your number is a three-digit number : ${num}`);



/


//exercise 7
// the sentence 2 "let i = 0;" is not where it is to be
// you have to declare the variable at the beginning before the while
//the program don't know i when you begin "while (i<9)"


//exercise 8
let userNum1 = 1;
let userNum2 = 1;
let sumBefore = 0;

while (userNum1 !== 0 && userNum2 !== 0) {
  userNum1 = parseInt(prompt("enter a number ?"));
  userNum2 = parseInt(prompt("enter a second number ?"));
  let sum = userNum1 + userNum2;
  console.log(`the sum is :${sum}`);
  if (sum < sumBefore) {
    console.log(
      `the new sum ${sum} is smaller than the sum before ${sumBefore}`
    );
  }
  sumBefore = sum;
}


//exercise 9 bonus
let clothPrice = 1;
let sumPrices = 0;
let priceAfterReduction = 0;

while (clothPrice !== 0) {
  clothPrice = Number(
    prompt("enter the price of the cloth? if you want to end, write 0")
  );
  if (Number.isNaN(clothPrice)) {
    console.log("Yo dude this is a weird number please dont do that yo !!!"); //sentence provided by my son
  } else {
    sumPrices = sumPrices + clothPrice;
  }
}
if (sumPrices > 100 && sumPrices <= 250) {
  priceAfterReduction = sumPrices - sumPrices * 0.2;
} else if (sumPrices > 250 && sumPrices <= 400) {
  priceAfterReduction = sumPrices - sumPrices * 0.4;
} else if (sumPrices <= 100) {
  priceAfterReduction = sumPrices;
} else {
  priceAfterReduction = sumPrices - sumPrices * 0.4 - 50;
}
console.log(`you have to pay ${priceAfterReduction.toFixed(2)}`);



// exercise 10 bonus
let packetWeight = 0;
let packetVolume = 0;
let packetVolumeTotal = 0;
let packetWeightTotal = 0;
const maxWeight = 10;
const maxVolume = 32;

while (packetVolumeTotal < maxVolume && packetWeightTotal < maxWeight) {
  packetWeight = Number(prompt("enter the weight of the packet (in ton)?"));
  packetVolume = Number(prompt("enter the volume of the packet (in M^2?"));
  packetVolumeTotal = packetVolumeTotal + packetVolume;
  packetWeightTotal = packetWeightTotal + packetWeight;

  if (packetVolumeTotal > maxVolume || packetWeightTotal > maxWeight) {
    if (packetVolumeTotal > maxVolume && packetWeightTotal > maxWeight) {
      console.log(
        `the weight and the volume of this packet is too much for our truck! we can maximum a total of 10 tons and 32M^2`
      );
    } else if (packetWeightTotal > maxWeight) {
      console.log(
        `the weight of this packet is too heavy for our truck! we can maximum a total of 10 tons`
      );
    } else {
      console.log(
        `the volume of this packet is too big for our truck! we can maximum a total ofS 32M^2`
      );
    }
    packetVolumeTotal = packetVolumeTotal - packetVolume;
    packetWeightTotal = packetWeightTotal - packetWeight;
  }
}
console.log(
  `the truck is full ! the volume is ${packetVolumeTotal} M^2, the weight is ${packetWeightTotal} tons.`
);

//lesson 26/10/21
for (counter = 1; counter <= 10; counter++) {
  console.log(counter);
}
console.log(`end`);

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

for (let i = 1; i <= 120; i++) {
  if (i % 4 == 0) {
    console.log(i);
  }
}

let count = 0;
for (let i = 1; i <= 100; i++) {
  count++;
  if (count == 4) {
    count = 0;
    console.log(i);
  }
}

for (let i = 4; i <= 120; i += 4) console.log(i);

let sumNumber = 0;
for (let i = 1; i < 6; i++) {
  let userNumber = Number(prompt("enter a number?"));
  if (Number.isInteger(userNumber)) {//if(!isNan(userNumber))
    sumNumber = sumNumber + userNumber;
  } else {
    console.log(`the number is not good!`);
    break;
  }
}
console.log(`the sum is ${sumNumber}`);
for (let i = 1; i < 10; i++) {
  for (let f = 1; f < 10; f++) {
    console.log(`i=${i} f=${f}`);
    break;
  }
}
*/
let x = "aviad";
x.includes(a); // בודק אם מה שבסוגריים קיים ב STRING
//אפשר לתת לו כפרמטר שני מספר מאיפה להתחיל את הבדיקה
x.includes(a, 3);
//includes() מחזיר BOOLEAN
