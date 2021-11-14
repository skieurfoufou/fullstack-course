// 4 sort of functions
/* 
1.function who receive value and give value.
2.function who receive  value and don't give us nothing.
3.function who don't receive value and give us value.
4.function who don't receive and don't give us value.
*/
/*
function saySomething() {
  console.log("hello world!!!");
}
saySomething(); //to call the function.

function saySomething2() {
  return "good morning";
}
let msg = saySomething2();
console.log(msg);

function saySomething3(msg, sign) {
  sign = String(sign);
  console.log(sign.repeat(5), msg, sign.repeat(5));
}
saySomething3("hello", "*");
saySomething3("good morning", "!");
*/

//exercise to do in class
function randomNumber(num1, num2) {
  return Math.round((num2 - num1) * Math.random() + num1);
}
console.log(randomNumber(50, 100));

function createArrayWithRandomNumber(sizeArray, minNumber, maxNumber) {
  let randomArray = [];
  for (i = 0; i < sizeArray; i++) {
    randomArray.push(randomNumber(minNumber, maxNumber));
  }
  return randomArray;
}
console.log(createArrayWithRandomNumber(10, 20, 30));

function addFunction(num1, num2) {
  return num1 + num2;
}
console.log(addFunction(10, 15));

function addAllMembersFromArray(array1) {
  let sumOfAll = 0;
  for (i = 0; i < array1.length; i++) {
    sumOfAll = addFunction(array1[i], sumOfAll);
  }
  return sumOfAll;
}
console.log("sum of all the array: " + addAllMembersFromArray([5, 10, 15, 20]));
