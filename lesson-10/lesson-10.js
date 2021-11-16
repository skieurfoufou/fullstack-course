//functions expressions
let sayHi = function (msg) {
  console.log(msg);
};

// arrow functions
let sayBy = (msg) => {
  console.log(msg);
};

function ask(question, yes, no) {
  let result = confirm(question);
  if (result) {
    yes();
  } else {
    no();
  }
}
function yesPizza() {
  console.log("yes a good pizza");
}
function noPizza() {
  console.log("sorry for you!");
}
ask("do you want a pizza?", yesPizza, noPizza);
ask(
  "do you want banana",
  () => {
    alert("banana is good");
  },
  () => {
    console.log("sorry!");
  }
);
