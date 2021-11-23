/*
//exercise 1 
let arr = [8, 1.6, 0.1, 22, 8.8, 15, 54.1, 1000];
let sumOfDeleteNum = 0;
let arr2 = [];

for (i = 0; i < arr.length; i++) {
  if (Number.isInteger(arr[i])) {
    sumOfDeleteNum += arr[i];
  } else {
    arr2.push(arr[i]);
  }
}
console.log("sum of delete: " + sumOfDeleteNum);
console.log(arr2);
arr2.sort((a, b) => a - b);
console.log("the min number is " + arr2[0]);
console.log("the max number is " + arr2[arr2.length - 1]);
*/
/*
//exercise 2

let numUser = Number(prompt("enter a number ?"));
let arrOfNum = [];
let sumOfArray = 0;

while (numUser >= 0) {
  arrOfNum.push(numUser);
  console.log(arrOfNum);
  numUser = Number(prompt("enter a number ?"));
}
let biggestNumber = arrOfNum[0];
let smallestNumber = arrOfNum[0];

for (i = 0; i < arrOfNum.length; i++) {
  sumOfArray += arrOfNum[i];
  biggestNumber = arrOfNum[i] > biggestNumber ? arrOfNum[i] : biggestNumber;
  smallestNumber = arrOfNum[i] < smallestNumber ? arrOfNum[i] : smallestNumber;
}
const averageOfArray = sumOfArray / arrOfNum.length;
console.log("number of students is: " + arrOfNum.length);
console.log("average of grades is: " + averageOfArray);
console.log("the biggest number is: " + biggestNumber);
console.log("the smallest  number is: " + smallestNumber);
console.log("reverse: " + arrOfNum.reverse());
*/
/*
//exercise 3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [];
let j = 0;

for (i = arr.length; i > 0; i--) {
  arr2[j] = arr[i - 1];
  j++;
}
console.log("the new array in reverse order is: " + arr2);
*/
//exercise 4
let arr = [8, "a", "a", "a", 12, 8, "a", 3, "a", 12, 4, 9, 3];
let mostCount = 0;
let mostValue;

for (value of arr) {
  let count = 0;

  for (localValue of arr) {
    if (localValue === value) {
      count++;
    }
  }

  if (count > mostCount) {
    mostCount = count;
    mostValue = value;
  }
}

console.log("value: " + mostValue);
console.log("count: " + mostCount);
