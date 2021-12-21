const objMes = { fname: "", lname: "", message: "" };
console.log(objMes);
initPage();

function initPage() {
  const button = document.getElementById("button");
  button.addEventListener("click", () => onClickButton(objMes));
}

async function onClickButton(objMes) {
  const inputFname = document.getElementById("fname");
  const inputLname = document.getElementById("lname");
  const inputMessage = document.getElementById("message");

  objMes.fname = inputFname.value;
  objMes.lname = inputLname.value;
  objMes.message = inputMessage.value;

  const res = await sendToServer(objMes);
  console.log("res", res);
}

async function sendToServer(bodyToSend) {
  const res = await fetch("http://localhost:8080/users?withSmile=false", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyToSend),
  });

  const jsonRes = await res.json();

  return jsonRes;
}
