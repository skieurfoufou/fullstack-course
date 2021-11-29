function createProduct(name, price, id) {
  return { name, price, id };
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
    productElement.setAttribute("id", product.id);
    productElement.addEventListener("click", onProductClick);
    productsListElement.appendChild(productElement);
  });
}

function onProductClick(event) {
  // find the product that been clicked
  const productClickedId = event.target.id;
  const product = productsList.find(
    (product) => product.id === productClickedId
  );

  // added the product to the cart (data)
  cart.items.push(product);

  // render the new product to the cart (view)
  const cartElement = document.getElementById("cart");

  const cartItem = document.createElement("li");
  cartItem.textContent = `${product.name}`;
  cartElement.appendChild(cartItem);

  // render the TOTAL amount of the cart (view)
  const totalElement = document.getElementById("total");
  const cartTotal = cart.getTotal();
  totalElement.textContent = `Sum: ${cartTotal}$`;
}

// MAIN
const productsList = [
  createProduct("Milk", 5, "P001"),
  createProduct("Bamba", 2.4, "P002"),
  createProduct("Cheese", 3, "P003"),
  createProduct("Meat", 60, "P004"),
  createProduct("Chicken", 38.2, "P005"),
];

const cart = {
  items: [],
  getTotal: function () {
    return this.items.reduce((acc, el) => acc + el.price, 0);
  },
};

renderProductsList();
