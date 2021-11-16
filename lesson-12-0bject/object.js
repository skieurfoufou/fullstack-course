/*
let person = {
  fullName: "bar levi",
  age: 29,
  isFather: true,
  children: [3, 4, 7],
};
let person2 = {
  fullName: "ofer levi",
  age: 39,
  isFather: true,
  children: [10, 14, 17],
};
let person3 = {
  fullName: "Noa Haim",
  age: 19,
  isFather: false,
  children: [],
};
//access
person.age;
person["age"];

//set new
person.city = "Jerusalem";
person["city"] = "jerusalem";
*/
function createPerson(fname, age, isFather) {
  let person = {
    fullName: fname,
    age: age,
    isFather: isFather,
  };
  return person;
}
let person1 = createPerson("gil b", 50, true);

function person(fname, age, isFather) {
  this.fullName = fname;
  this.age = age;
  this.isFather = isFather;
}
let person3 = new person("sabine B", 52, true);
