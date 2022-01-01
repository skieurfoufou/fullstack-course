const HOST_URL = "http://localhost:5000";

const ACTION_PANCH_IN = "PANCH_IN";
const ACTION_PANCH_OUT = "PANCH_OUT";

const inputText = document.querySelector("input");
const beginButton = document.querySelector(".begin");
const endButton = document.querySelector(".end");

beginButton.addEventListener("click", onBeginButtonClick);
endButton.addEventListener("click", onEndButtonClick);

async function getTimeOfShifts() {
  const res = await fetch(`${HOST_URL}/shiftstime`);
  const parsedRes = await res.text();
  return parsedRes;
}

async function getSalaryOfShifts() {
  const res = await fetch(`${HOST_URL}/shiftsmoney`);
  const parsedRes = await res.text();
  return parsedRes;
}

async function getPanchTime(action) {
  const timeNow = new Date().getTime();
  const res = await fetch(`${HOST_URL}/panchtime/${action}/${timeNow}`);
  const parsedRes = await res.text();
  return parsedRes;
}

async function onBeginButtonClick() {
  // console.log(inputText.value);
  const res = await getPanchTime(ACTION_PANCH_IN);
  console.log(res);
}

async function onEndButtonClick() {
  // console.log(inputText.value);
  const resShift = await getPanchTime(ACTION_PANCH_OUT);
  console.log(resShift);

  const [resAllShifts, resSalary] = await Promise.all([
    getTimeOfShifts(),
    getSalaryOfShifts(),
  ]);
  console.log(resAllShifts);
  console.log(resSalary);
}
