/*
let x = "aviad";
x.includes(a); // בודק אם מה שבסוגריים קיים ב STRING
//אפשר לתת לו כפרמטר שני מספר מאיפה להתחיל את הבדיקה
x.includes(a, 3);
//includes() מחזיר BOOLEAN
*/
let howManyDays = Number(prompt("how many days you want to check ?"));
let average = 0;
let measurement = 0;
let sum = 0;

for (let i = 1; i <= howManyDays; i++) {
  measurement = Number(prompt(`what is the ${i} measurement?`));
  if (measurement < average - 20 || measurement > average + 20) {
    let input = prompt("do you want to enter the measurement ? (yes/no)");
    if (input === "yes") {
      sum = sum + measurement;
      console.log(`the sum is ${sum}`);
      average = sum / i;
    } else {
      continue;
    }
  } else {
    sum = sum + measurement;
    console.log(`the sum is ${sum}`);
    average = sum / i;
  }

  console.log(`the average is ${average}`);
}
