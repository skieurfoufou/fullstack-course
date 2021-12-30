import Title from "./Components/Title/Title";
import Filters from "./Components/Filters/Filters";
import ProductsList from "./Components/ProductsList/ProductsList";
import "./App.css";
import productsData from "./data/products";
import { useState } from "react";

const filtersValues = {
  brands: ["Rossignol", "Salomon", "Dynastar", "Head"],
  categories: ["Competion SL", "Competion GS", "Slope"],
  prices: ["200-500", "501-700", "701-1000"],
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
    const newProducts = [];

    setProducts(newProducts);
  };

  return (
    <div className="back">
      <Title text="SKI SHOP" />
      <Filters filters={filtersValues} onFilterChange={onFilterChange} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
