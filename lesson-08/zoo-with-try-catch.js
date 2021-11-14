function runMenu(animalList) {
  const menu = [
    "Welcome to the database's zoo",
    "[0] Show all animals",
    "[1] Find an animal by his code",
    "[2] Find an animal by his name",
    "[3] Add a new animal in the database",
    "[4] Delete an animal from the database",
    "[5] Exit",
  ];
  const key = prompt(menu.join("\n"));

  switch (key) {
    case "0":
      printAnimals(animalList);
      break;
    case "1":
      triggerFindAnimalByCode(animalList);
      break;
    case "2":
      triggerFindAnimalByName(animalList);
      break;
    case "3":
      triggerAddAnimal(animalList);
      break;
    case "4":
      triggerDeleteAnimal(animalList);
      break;
    case "5":
      return "exit";
    default:
      alert("not a good choice!");
      break;
  }
}
// ====================
// ===== TRIGGERS =====
// ====================
function triggerFindAnimalByCode(animalList) {
  const inputCode = prompt("enter animal code ?");
  // const foundAnimal = findAnimalByCode(inputCode, animalList);
  // if (foundAnimal) {
  //   printAnimal(inputCode, getAnimalName(foundAnimal));
  // } else {
  //   console.log("error 111, animal was not found");
  // }
  try {
    const foundAnimal = findAnimalByCode(inputCode, animalList);
    printAnimal(inputCode, getAnimalName(foundAnimal));
  } catch (error) {
    console.log("error 111, animal was not found");
  }
}

function triggerFindAnimalByName(animalList) {
  const inputName = prompt("enter animal name ?").toLowerCase();
  const foundAnimal = findAnimalByName(inputName, animalList);
  if (foundAnimal.length) {
    console.log(`animal's name to find: ${inputName}\nthe found animals:`);
    printAnimals(foundAnimal);
  } else {
    console.log("error 222, animal was not found");
  }
}

function triggerAddAnimal(animalList) {
  const inputCode = prompt("enter the new's animal code ?");
  const inputName = prompt("enter a new animal name ?");
  if (!findAnimalByCode(inputCode, animalList)) {
    addAnimal(inputCode, inputName, animalList);
    console.log(`${inputName} was added to list !`);
  } else {
    console.log("error 333: animal already exist !");
  }
}

function triggerDeleteAnimal(animalList) {
  const inputCode = prompt("enter the animal's code you want to delete?");
  const foundAnimal = findAnimalByCode(inputCode, animalList);
  if (foundAnimal) {
    deleteAnimal(foundAnimal, animalList);
    console.log(`${foundAnimal} was removed to list !`);
  } else {
    console.log("error 444: animal does not exist !");
  }
}
// ============================
// ===== ANIMAL FUNCTIONS =====
// ============================
function findAnimalByCode(code, animalList) {
  for (animal of animalList) {
    if (getAnimalCode(animal) === code) {
      return animal;
    }
  }
  throw "animal not found";
}

function findAnimalByName(inputName, animalList) {
  let filteredAnimals = [];
  for (animal of animalList) {
    if (animal.includes(inputName)) {
      filteredAnimals.push(animal);
    }
  }
  return filteredAnimals;
}

function addAnimal(code, name, animalList) {
  animalList.push(code + name);
}

function deleteAnimal(animal, animalList) {
  let index = animalList.indexOf(animal);
  if (index > -1) {
    animalList.splice(index, 1);
  }
}

// ----- PRINTING FUNCTIONS -----
function printAnimal(code, animal) {
  console.log(`animal code: ${code}\nanimal name: ${animal}`);
}

function printAnimals(animalArray) {
  let isFirst = true;
  for (const animal of animalArray) {
    if (isFirst) {
      isFirst = false;
    } else {
      console.log("--------------");
    }

    printAnimal(getAnimalCode(animal), getAnimalName(animal));
  }
}

// ----- HELPER FUNCTIONS -----
function getAnimalName(animal) {
  let animalName = "";
  for (let i = 0; i < animal.length; i++) {
    const character = animal[i];
    if (character.match(/[a-z]/i)) {
      animalName += character;
    }
  }
  return animalName;
}

function getAnimalCode(animal) {
  let animalCode = "";
  for (let i = 0; i < animal.length; i++) {
    const character = animal[i];
    if (character.match(/[0-9]/)) {
      animalCode += character;
    }
  }
  return animalCode;
}

// ================
// ===== MAIN =====
// ================
let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6 ";
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14";
let animalList = txt1.concat("," + txt2).split(",");

for (let i = 0; i < animalList.length; i++) {
  animalList[i] = animalList[i].trim().toLowerCase();
}
console.log(animalList);

let condition = "";

while (condition != "exit") {
  condition = runMenu(animalList);
}
