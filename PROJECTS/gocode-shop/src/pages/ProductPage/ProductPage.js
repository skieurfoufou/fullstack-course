import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductContext from "../../contexts/ProductContext";
import products from "../../data/products";
import Spinner from "../../components/Spinner/Spinner";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const foundProduct = products.find((p) => p.id === Number(id));
      setProduct(foundProduct);
    }, 1000);
  }, []);

  const { onAddProduct } = useContext(ProductContext);

  const addProductAndRedirect = () => {
    onAddProduct(product);
    navigate("/", { replace: true });
  };

  return (
    <div className="product-card">
      {product ? (
        <>
          <div className="product-image">
            <img alt="product" src={product.image} />
          </div>
          <div className="product-info">
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
          </div>
          <button className="product-button" onClick={addProductAndRedirect}>
            Add to CART
          </button>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
