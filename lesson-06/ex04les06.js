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
