import React from "react";
import "./ProductsPage.css";
import FruitsList from "../../components/FruitsList/FruitsList";
import Filters from "../../components/Filters/Filters";
import filtersValues from "../../data/dataFilters";
import Header from "../../components/Header/Header";
import useProductsPage from "./useProductsPage";

function ProductsPage() {
  const { getCartLength, printCart, products, onFilterChange, addItemToCart } =
    useProductsPage();

  return (
    <div className="App">
      <Header cartLength={getCartLength()} printCart={printCart} />
      <div className="App-sub">
        <Filters filters={filtersValues} onFilterChange={onFilterChange} />
        {products.length !== 0 ? (
          <FruitsList products={products} addItemToCart={addItemToCart} />
        ) : (
          <p>No products</p>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
