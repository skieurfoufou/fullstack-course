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
let str1 = "";
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j <= 10; j++) {
    str1 = `${str1}\t\t\t${i * j}`;
  }
  console.log(str1);
  str1 = "";
}
