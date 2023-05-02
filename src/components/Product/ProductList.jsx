import Product from "./Product";
import "./ProductList.css";

const ProductList = (props) => {
  return (
    <div className="Container">
      {props.productList.map((product, index) => (
        <Product
          key={index}
          id={product.id}
          name={product.name}
          class={product.class}
        />
      ))}
    </div>
  );
};

export default ProductList;
