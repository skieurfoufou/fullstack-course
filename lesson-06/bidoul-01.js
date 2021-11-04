const myStr = "Hello papa je suis dans une boite";
const repeatCount = myStr.length + 10;
const ch = "=";
const offset = myStr.length % 2 === 0 ? 1 : 0;
const starLine = ch.repeat(repeatCount);
const halfLine = ch.repeat((repeatCount - myStr.length - 2 + offset) / 2);
console.log(`${starLine}`);
console.log(`${halfLine} ${myStr} ${halfLine}`);
console.log(`${starLine}`);
