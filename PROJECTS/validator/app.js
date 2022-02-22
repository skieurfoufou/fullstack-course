const validator = require("validator");

const emails = [
  "contact@louistiti.fr",
  "contact@louistitifr",
  "john.doe@example.com",
  "john.doe@example",
  "johndoe@example.fr",
];

emails.forEach((email) => {
  console.log("%s:%s", email, validator.isEmail(email) ? "OK" : "KO");
});

const list = ["un", "deux2", "trois3", "quatre4", "cinq"];
list.forEach((member) => {
  console.log("%s:%s", member, validator.isAlpha(member) ? "OK" : "KO");
});

const chiffre = ["301", "504", "123456", "87695", "234567"];
chiffre.forEach((member) => {
  console.log(
    "%s:%s",
    member,
    validator.isDivisibleBy(member, 5) ? "OK" : "KO"
  );
});
