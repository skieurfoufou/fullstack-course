//*************** TRIGGER FUNCTIONS ******************

function triggerFindHumanById(arrHumans) {
  const human = findHumanById(
    arrHumans,
    getIdFromUser("enter the id number you search, please? (only 9 numbers)")
  );

  human?.print();
}

function triggerFindHumanByName(arrHumans) {
  printHumans(
    findHumansByName(
      arrHumans,
      getStringFromUser("enter the name you search, please? (only letters)")
    )
  );
}

function triggerAddHuman(arrHumans) {
  const firstName = getStringFromUser(
    "enter your first name, please? (only letters)"
  );
  const lastName = getStringFromUser(
    "enter your last name, please? (only letters)"
  );
  const id = getIdFromUser("enter your id number, please? (only 9 numbers)");
  const city = getStringFromUser(
    "enter your city address, please? (only letters)"
  );
  const bDate = getDateFromUser(
    "enter your birth date, please? (format:YYYY,MM,DD)"
  );

  let parentID;
  if (confirm("do you want to enter your parent id?")) {
    parentID = getIdFromUser("enter your id number, please? (only 9 numbers)");
  }
  if (!findHumanById(arrHumans, parentID)) {
    parentID = NULLISH_ID;
  }
  arrHumans.push(createHuman(firstName, lastName, id, city, bDate, parentID));
}

function triggerDeleteHuman(arrHumans) {
  deleteHuman(
    arrHumans,
    getIdFromUser(
      "enter the id number you want to delete, please? (only 9 numbers)"
    )
  );
}

function triggerEditDetails(arrHumans) {
  runMenuChoiceEdit(arrHumans);
}
function triggerQueriesAndReports() {
  runMenuChoiceQueriesAndReports();
}

//******************* FUNCTIONS **********************

function createHuman(firstName, lastName, id, city, bDate, idParent) {
  let human = {
    // PROPRIETIES
    firstName: firstName,
    lastName: lastName,
    idNumber: id,
    city: city,
    birthDate: bDate,
    idParent: idParent,

    // METHODS
    getAge: function () {
      return getDiffOfDatesInYears(new Date(this.birthDate), new Date());
    },
    print: function (indent = 0) {
      let lines = [
        `${this.firstName} ${this.lastName} | ID :${this.idNumber}`,
        `BORN THE :${this.birthDate} | AGE :${this.getAge()}`,
        `LIVES IN :${this.city}`,
      ];
      const tabs = Array(indent).fill("\t").join("");
      lines = lines.map((line) => tabs + line);
      console.log(lines.join(`\n`));

      if (confirm("do you want to print his children ?"))
        printChildren(this.idNumber, indent + 1);
    },
  };
  return human;
}

function getDateFromUser(promptStr) {
  let inputDate = prompt(promptStr);
  while (!isDateValid(inputDate)) {
    inputDate = prompt(promptStr);
  }
  return inputDate;
}

function findHumansByName(arrHumans, promptStr) {
  let result = arrHumans.filter((human) => {
    if (human.lastName.includes(promptStr)) return true;
    if (human.firstName.includes(promptStr)) return true;
    return false;
  });
  return result;
}

function findHumanById(arrHumans, StrId) {
  for (const human of arrHumans) {
    if (StrId == human.idNumber) return human;
  }
  console.log("error there is no ID like this in the DatabAse");
}

function deleteHuman(arrHumans, idToDelete) {
  let indexToDelete = arrHumans.findIndex(
    (human) => human.idNumber === idToDelete
  );
  if (indexToDelete === arrHumans.length) {
    indexToDelete - 1;
  }

  arrHumans = arrHumans.map((human) => {
    if (human.idParent === idToDelete) {
      human.idParent = NULLISH_ID;
      console.log(human.idParent);
    }
    return human;
  });

  arrHumans.splice(indexToDelete, 1);

  console.log("deleted");
}
function getAgeFromUser(promptStr) {
  let inputAge = prompt(promptStr);
  // ? Business Rule: In the Torah we CANNOT live past 121 but until the last moment yes...
  while (
    !isAllDigits(inputAge) &&
    Number(inputAge) <= 0 &&
    Number(inputAge) >= 121
  ) {
    inputAge = prompt(promptStr);
  }
  return inputAge;
}

function getChildren(idParent) {
  return arrHumans.filter((human) => human.idParent === idParent);
}

//**************** MENU FUNCTIONS ********************

function runMenu(arrHumans) {
  const key = menu([
    "Welcome to the human zoo",
    "[0] Show all humans",
    "[1] Find a human by his ID",
    "[2] Find a human by his name or part of it",
    "[3] Add a new human to the database",
    "[4] Delete a human from the database",
    "[5] Edit details",
    "[6] Queries and reports",
    "[7] Exit",
  ]);

  switch (key) {
    case "0":
      printHumans(arrHumans);
      break;
    case "1":
      triggerFindHumanById(arrHumans);
      break;
    case "2":
      triggerFindHumanByName(arrHumans);
      break;
    case "3":
      triggerAddHuman(arrHumans);
      break;
    case "4":
      triggerDeleteHuman(arrHumans);
      break;
    case "5":
      triggerEditDetails(arrHumans);
      break;
    case "6":
      triggerQueriesAndReports();
      break;
    case "7":
      return "exit";
    default:
      alert("not a good choice!");
      break;
  }
}

function runMenuChoiceEdit(arrHumans) {
  const key = menu([
    "Choose how to find the human",
    "[0] Find human by ID",
    "[1] Find human by Name",
    "[2] Exit",
  ]);

  switch (key) {
    case "0":
      const humanById = findHumanById(
        arrHumans,
        getIdFromUser(
          "enter the id number you search, please? (only 9 numbers)"
        )
      );

      if (!humanById) {
        console.log("Id not found");
        return;
      }

      runMenuEditDetails(humanById);
      break;
    case "1":
      const inputId = getStringFromUser(
        "enter the name you search, please? (only letters)"
      );
      const humans = findHumansByName(arrHumans, inputId);
      const humanToEdit = humans[0]; // we take the first one by default
      runMenuEditDetails(humanToEdit);
      break;

    case "2":
      return "exit";

    default:
      alert("not a good choice!");
      break;
  }
}

function menu(options) {
  const key = prompt(options.join("\n"));
  return key;
}
function runMenuEditDetails(human) {
  console.log(
    `you are editing ${human.firstName} ${human.lastName} [${human.idNumber}]`
  );
  const key = menu([
    "Choose what you want to edit",
    "[0] Edit the first name ",
    "[1] Edit the last name ",
    "[2] Edit the ID  ",
    "[3] Edit the city ",
    "[4] Edit the parent ID ",
    "[5] Exit",
  ]);

  switch (key) {
    case "0":
      human.firstName = getStringFromUser(
        "enter the new first name, please? (only letters)"
      );
      break;
    case "1":
      human.lastName = getStringFromUser(
        "enter the new last name, please? (only letters)"
      );
      break;
    case "2":
      human.idNumber = getIdFromUser(
        "enter the new ID, please? (only numbers)"
      );
      break;
    case "3":
      human.city = getStringFromUser(
        "enter the new city, please? (only letters)"
      );
      break;
    case "4":
      human.idParent = getIdFromUser(
        "enter the new parent's ID, please? (only numbers)"
      );
      break;
    case "5":
      return "exit";
    default:
      alert("not a good choice!");
      break;
  }
}
function runMenuChoiceQueriesAndReports() {
  const key = menu([
    "Choose queries or report",
    "[0] Find all human from age",
    "[1] Find all children of a human",
    "[2] Find all humans by the orders",
    "[3] Find all humans who lives in a city",
    "[4] Exit",
  ]);

  switch (key) {
    case "0":
      const humanAge = getAgeFromUser(
        "enter the age you search, please? (only numbers, from 1 to 120)"
      );

      const arr = arrHumans.filter((human) => human.getAge() >= humanAge);
      printHumans(arr);
      break;

    case "1":
      const inputId = getIdFromUser(
        "enter the ID of the human you want to print his children, please? (only 9 numbers)"
      );
      printChildren(inputId);
      break;

    case "2":
      const allHumans = arrHumans.map((el) => el);
      const validHumans = [];
      // Check if the month is even
      for (let i = 0; i < allHumans.length; i++) {
        const human = allHumans[i];
        if ((new Date(human.birthDate).getMonth() + 1) % 2 === 0) {
          validHumans.push(...allHumans.splice(i--, 1));
        }
      }
      //He have 2 children at least
      for (let i = 0; i < allHumans.length; i++) {
        const human = allHumans[i];
        if (getChildren(human.idNumber).length >= 2) {
          console.log("ASdf");
          validHumans.push(...allHumans.splice(i--, 1));
        }
      }
      // check if palindrome
      for (let i = 0; i < allHumans.length; i++) {
        const human = allHumans[i];
        if (
          checkIfOneOfTheHumansArePalindrome(
            getChildren(human.idNumber).concat(human)
          )
        ) {
          validHumans.push(...allHumans.splice(i--, 1));
        }
      }
      printHumans(validHumans);
      break;

    case "3":
      const cityToHumansMap = {};
      arrHumans.forEach((human) => {
        if (!cityToHumansMap[human.city]) {
          cityToHumansMap[human.city] = [human];
        } else {
          cityToHumansMap[human.city].push(human);
        }
      });

      for (const city in cityToHumansMap) {
        const humansInCity = cityToHumansMap[city];
        console.log(`${city}:`);
        printHumans(humansInCity);
      }
      break;

    case "4":
      return "exit";

    default:
      alert("not a good choice!");
      break;
  }
}

function checkIfOneOfTheHumansArePalindrome(humans) {
  return humans.some(
    (human) =>
      checkPalindrome(human.firstName) || checkPalindrome(human.lastName)
  );
}

function checkPalindrome(str) {
  return str == str.split("").reverse().join("");
}

//************** PRINTING FUNCTIONS *****************

function printHumans(humans, indent) {
  humans.forEach((human) => human.print(indent));
}

function printChildren(idParent, indent) {
  printHumans(getChildren(idParent), indent);
}

//*************** HELPER FUNCTIONS ******************

/**
 * This gets me the difference between two dates in years
 * @param {Date} date1 should be the old date
 * @param {Date} date2 should be the new date
 * @returns number of years
 */
function getDiffOfDatesInYears(date1, date2) {
  let diffInYears = date2.getFullYear() - date1.getFullYear();
  const month = date2.getMonth() - date1.getMonth();
  if (month < 0 || (month === 0 && date2.getDate() < date1.getDate())) {
    diffInYears--;
  }
  return diffInYears;
}

function isDateValid(dateStr) {
  const d = new Date(dateStr);
  if (!isNaN(d)) {
    return true;
  }
  return false;
}

function isValidString(name) {
  return isAllAlphabet(name);
}

function getStringFromUser(promptStr) {
  let inputName = prompt(promptStr);
  while (!isValidString(inputName)) {
    inputName = prompt(promptStr);
  }
  return inputName;
}

function isAllDigits(str) {
  for (const ch of str) {
    if (!ch.match(/[0-9]/)) {
      console.log("error, only numbers");
      return false;
    }
  }
  return true;
}

function isAllAlphabet(str) {
  for (const ch of str) {
    if (!ch.match(/[a-z| ]/i)) {
      //also /^[A-Za-z]+$/
      console.log("error, only a-z");
      return false;
    }
  }
  return true;
}

function isValidID(idToCheck) {
  return idToCheck.length === 9 && isAllDigits(idToCheck);
}

function getIdFromUser(promptStr) {
  let inputId = prompt(promptStr);
  while (!isValidID(inputId)) {
    inputId = prompt(promptStr);
  }
  return inputId;
}

// ******************* MAIN **********************
const NULLISH_ID = "000000000";
const arrHumans = [];

function main() {
  arrHumans.push(
    createHuman(
      "gad",
      "benichou",
      "326554466",
      "kochav yaakov",
      "2004,12,06",
      "304711377"
    )
  );
  arrHumans.push(
    createHuman(
      "tehila",
      "benichou",
      "325288355",
      "kochav yaakov",
      "2002,11,15",
      "304711377"
    )
  );
  arrHumans.push(
    createHuman(
      "Eithan",
      "hadjadj",
      "111111111",
      "kochav hachahar",
      "2003,08,01",
      "123123123"
    )
  );
  arrHumans.push(
    createHuman(
      "mordehai",
      "benichou",
      "304711377",
      "kochav yaakov",
      "1971,02,24",
      "789456123"
    )
  );
  arrHumans.push(
    createHuman(
      "naomie",
      "zenou",
      "209552553",
      "san francisco",
      "1996,11,14",
      "304711377"
    )
  );
  arrHumans.push(
    createHuman(
      "kalalak",
      "boop",
      "321321321",
      "san francisco",
      "1000,10,10",
      "209552553"
    )
  );

  let condition = "";

  while (condition != "exit") {
    condition = runMenu(arrHumans);
  }
}

main();
