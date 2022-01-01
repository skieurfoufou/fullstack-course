import Title from "./Components/Title/Title";
import Filters from "./Components/Filters/Filters";
import ProductsList from "./Components/ProductsList/ProductsList";
import "./App.css";
import productsData from "./data/products";
import { useState } from "react";

const filtersValues = {
  brands: ["Rossignol", "Salomon", "Dynastar", "Head"],
  categories: ["competition-giant", "competition-slalom", "slope"],
  prices: ["200-500", "501-750", "751-1000"],
};

function App() {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    price: "",
  });
  const onFilterChange = (filterType, filterValue) => {
    const newFilters = { ...filters };
    newFilters[filterType] = filterValue;
    setFilters(newFilters);

    //TODO: filters productsData by those filters
    let newProducts = [...productsData];
    if (newFilters.brand !== "") {
      newProducts = newProducts.filter(
        (product) => product.brand === newFilters.brand
      );
    }
    if (newFilters.category !== "") {
      newProducts = newProducts.filter(
        (product) => product.category === newFilters.category
      );
    }
    if (newFilters.price !== "") {
      const [lowPrice, highPrice] = newFilters.price.split("-");

      newProducts = newProducts.filter(
        (product) => product.price >= lowPrice && product.price <= highPrice
      );
    }
    setProducts(newProducts);
  };

  return (
    <div className="back">
      <Title text="SKI SHOP" />
      <Filters filters={filtersValues} onFilterChange={onFilterChange} />
      {products.length !== 0 ? (
        <ProductsList products={products} />
      ) : (
        <p>No products</p>
      )}
    </div>
  );
}

export default App;
