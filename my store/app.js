// ============== FUNCTIONS ==================

function createProduct(name, price) {
  return { name, price, id: `P${productsList.length}` };
}

function renderProductsList() {
  //get the ul of the items
  const productsListElement = document.getElementById("products-list");
  // clear the old list
  productsListElement.innerHTML = "";

  // for each product create a product and render it (view)
  productsList.forEach((product) => {
    const productElement = document.createElement("li");
    productElement.textContent = `${product.name} | ${product.price}$`;
    productElement.setAttribute("data-id", product.id);
    productElement.addEventListener("click", onProductClick);
    productsListElement.appendChild(productElement);
  });
}

function addCartItem(productToAdd) {
  // added the product to the cart (data)
  cart.items.push(productToAdd);
  //added the product in the local Storage
  saveToLocalStorage();
  console.log(localStorage.myCart);
  // render the new product to the cart (view)
  const cartElement = document.getElementById("cart");
  const cartItem = document.createElement("li");

  //render the product from the locale Storage
  getFromLocalStorage();
  //cartItem.textContent = `${productToAdd.name}`;
  //cartItem.setAttribute("data-id", productToAdd.id);
  cartElement.appendChild(cartItem);
  // remove an item from the card list
  cartItem.addEventListener("dblclick", onCartItemDblClick);

  renderTotal();
}
function saveToLocalStorage() {
  localStorage.myCart = JSON.stringify({ cart });
}
function getFromLocalStorage() {
  if (localStorage.myCart) {
    let productFromLocal = [];
    productFromLocal = JSON.parse(localStorage.myCart);
    console.log(productFromLocal);
    cart = productFromLocal;
    cartItem.textContent = `${productFromLocal[items].name}`;
  }
}

function renderTotal() {
  // render the TOTAL amount of the cart (view)
  const totalElement = document.getElementById("total");
  const cartTotal = cart.getTotal();
  totalElement.textContent = `Sum: ${cartTotal.toFixed(2)}$`;
}

function onProductClick(event) {
  // find the product that been clicked
  const productClickedId = event.target.dataset.id;
  const product = productsList.find(
    (product) => product.id === productClickedId
  );

  addCartItem(product);
}

function onCartItemDblClick(event) {
  // This only delete the data in the array not in the view
  cart.deleteProduct(event.target.dataset.id);

  // Re-render the view
  event.target.remove();
  renderTotal();
}

function onAddProductButtonClick(event) {
  const div = document.querySelector(".form");
  div.classList.toggle("hidden");
}

function addProductToList(product) {
  productsList.push(product);
  renderProductsList();
}

function onFormProductSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const productName = String(formData.get("title")).toLowerCase();
  const productPrice = Number(formData.get("price"));

  addProductToList(createProduct(productName, productPrice));
  onAddProductButtonClick();
  event.target.reset();
}

//********************MAIN*******************
const productsList = [];
productsList.push(createProduct("Milk", 5));
productsList.push(createProduct("Bamba", 2.4));
productsList.push(createProduct("Cheese", 3));
productsList.push(createProduct("Meat", 60));
productsList.push(createProduct("Chicken", 38.2));

const cart = {
  items: [],
  getTotal: function () {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  },
  deleteProduct: function (productId) {
    const indexToDelete = this.items.findIndex((item) => item.id === productId);
    this.items.splice(indexToDelete, 1);
  },
};

renderProductsList();

// Add event listener to add product button
const addProductButtonElement = document.querySelector(
  ".products-container > .add-button"
);
addProductButtonElement.addEventListener("click", onAddProductButtonClick);

//Add event to the form for the submit button
const form = document.querySelector("form");
form.addEventListener("submit", onFormProductSubmit);
