const liMilk = document.getElementById("liMilk");
const liMilkCart = document.getElementById("liMilkCart");
const liBamba = document.getElementById("liBamba");
const liBambaCart = document.getElementById("liBambaCart");
const sum = document.getElementById("sum");
let arrItem = [];
let amountTotal = 0;

liMilk.addEventListener("click", addToCart1);
liBamba.addEventListener("click", addToCart2);

function createItem(name, price) {
  let item = {
    name: name,
    price: price,
  };
  return item;
}

let priceCartMilk = 0;
let numOfMilk = 0;
function addToCart1() {
  priceCartMilk += Number(arrItem[0].price);
  numOfMilk++;
  liMilkCart.textContent = `Milk: quantity ${numOfMilk} = ${priceCartMilk.toFixed(
    2
  )}$`;
  amountTotal += Number(arrItem[0].price);
  addToAmount();
}
let priceCartBamba = 0;
let numOfBamba = 0;
function addToCart2() {
  priceCartBamba += Number(arrItem[1].price);
  numOfBamba++;
  liBambaCart.textContent = `Bamba: quantity ${numOfBamba} = ${priceCartBamba.toFixed(
    2
  )}$`;
  amountTotal += Number(arrItem[1].price);
  addToAmount();
}

function addToAmount() {
  sum.textContent = `Sum: ${amountTotal.toFixed(2)}$`;
}

let item1 = createItem("milk", 5);
let item2 = createItem("bamba", 2.4);
let item3 = createItem("cheese", 3);
let item4 = createItem("meat", 60);
let item5 = createItem("chicken", 38.2);

arrItem.push(item1, item2, item3, item4, item5);
