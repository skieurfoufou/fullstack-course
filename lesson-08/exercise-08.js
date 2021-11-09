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

//exercise 2

let numUser = 1;
let arrOfNum = [];

numUser = Number(prompt("enter a number ?"));

while (numUser == -1);
{
  arrOfNum.push(numUser);
  console.log(arrOfNum);
  numUser = Number(prompt("enter a number ?"));
}
let sumOfArray = 0;
for (i = 0; i < arrOfNum.length; i++) {
  sumOfArray += arrOfNum[i];
}
let averageOfArray = sumOfArray / arrOfNum.length;
console.log("number of students is: " + arrOfNum.length);
console.log("average of the notes: " + averageOfArray);
