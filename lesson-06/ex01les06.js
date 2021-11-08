///*
// Version 1
let inputStr = "applE, BanaNa, Kiwi, AvOCado, CheRry, FiGs, LeMon, GrapEs";
inputStr = inputStr + ",";
let separatorIndex = inputStr.indexOf(",");
let startIndex = 0;

while (separatorIndex != -1) {
  let word = inputStr.slice(startIndex, separatorIndex);
  word = word.toLowerCase().trim();

  let firstChar = word.charAt(0).toUpperCase();

  word = firstChar + word.slice(1);

  console.log(`${word} | ${word.length}`);
  startIndex = separatorIndex + 1;

  separatorIndex = inputStr.indexOf(",", separatorIndex + 1);
}
/*
// Version 2
const inputStr = "applE, BanaNa, Kiwi, AvOCado, CheRry, FiGs, LeMon, GrapEs";
const inputArray = inputStr.split(",");

for (let i = 0; i < inputArray.length; i++) {
  let word = inputArray[i].trim().toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  console.log(`${word} | ${word.length}`);
}
*/
