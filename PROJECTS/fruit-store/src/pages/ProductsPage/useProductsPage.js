import { useState } from "react";
import dataProducts from "../../data/dataProducts";

const useProductsPage = () => {
  const [products, setProducts] = useState(dataProducts);
  const [filters, setFilters] = useState({
    categories: "",
    colors: "",
    price: "",
    season: "",
  });
  const [cart, setCart] = useState({});

  const addItemToCart = (item) => {
    setCart({ ...cart, [item.code]: (cart[item.code] || 0) + 1 });
  };

  const printCart = () => {
    Object.entries(cart).forEach(([key, val]) => {
      console.log(dataProducts.find((el) => String(el.code) === key).name, val);
    });
  };

  const getCartLength = () => {
    return Object.values(cart).reduce((acc, el) => acc + el, 0);
  };

  const onFilterChange = (filterType, filtersValues) => {
    const newFilters = { ...filters };
    newFilters[filterType] = filtersValues;
    setFilters(newFilters);

    let newProducts = [...dataProducts];
    if (newFilters.categories !== "") {
      newProducts = newProducts.filter(
        (product) => product.category === newFilters.categories
      );
    }
    if (newFilters.season !== "") {
      newProducts = newProducts.filter(
        (product) => product.season === newFilters.season
      );
    }
    if (newFilters.colors !== "") {
      newProducts = newProducts.filter(
        (product) => product.color === newFilters.colors
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

  return { getCartLength, printCart, products, onFilterChange, addItemToCart };
};

export default useProductsPage;
