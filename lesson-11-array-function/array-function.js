let names = ["mordi", "ariel", "gil", "tal", "yossi"];
/*
let result = names.find(function (value, index, arr) {
  if (value.length == 3) {
    return true;
  }
  console.log(value, index, arr);
});
console.log(result);

//all this you can resume
let result = names.find((v) => v.length == 3);
console.log(result);

let result2 = names.find((v, i) => v.length == 5 && i % 2 != 0);
//return the first value of the array it is impair and lenght is 5
console.log(result2);

let char = "il";
let result3 = names.filter((v) => v.includes(char));
console.log(result3);

let result3 = names.map((v) => v.toUpperCase());
console.log(result3);

names.forEach(v,i,arr)=>{};
*/
//exercise 1
let arrayNum = [
  10, 18, 26, 52, 72, 101, 104, 156, 180, 260, 360, 520, 540, 720,
];

arrayNum.filter((v) => v > 150).forEach((v) => console.log(v));

//exercise 2
arrayNum.forEach((v) => console.log("${v} | ${String(v).length}"));

//exercice 3
arrayNum
  .filter((v) => v > 99)
  .filter((v) => String(v).length > 2)
  .forEach((v) => console.log(v));

//exercise 4
console.log("is exist:${arrayNum.find(v=>v==770)?true:false");
//console.log("is exist: ${arrayNum.some})

// the inside of the reduce
function myReduce(arr, func, initialValue) {
  let acc = initialValue;
  for (const el of arr) {
    acc = func(acc, el);
  }
  return acc;
}

arr = [1, 2, 3];

myReduce(arr, (acc, el) => acc + el, 0);
