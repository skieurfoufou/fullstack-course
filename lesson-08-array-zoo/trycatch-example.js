// ======= WITHOUT TRY CATCH ===========
// function divide(a, b) {
//   return a / b;
// }

// function main() {
//   const a = 5;
//   const b = 0;
//   if (b != 0) {
//     const division = divide(a, b);
//     console.log(`the division of ${a}/${b} is ${division}`);
//   } else {
//     console.log("denominator cannot be 0");
//   }
// }

// main();

// ======= WITH TRY CATCH ===========
function divide(a, b) {
  if (b === 0) {
    throw "[ERROR] denominator cannot be 0";
  }
  return a / b;
}

function main() {
  const a = 5;
  const b = 3;

  try {
    const division = divide(a, b);
    console.log(`the division of ${a}/${b} is ${division}`);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Happy birthday");
  }
}

main();
