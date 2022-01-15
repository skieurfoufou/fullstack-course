import Product from "./Product/Product";
import "./Products.css";

export default function Products({ products }) {
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
