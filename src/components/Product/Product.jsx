import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const productClass = `Boxs ${props.class ? props.class : ""}`;

  return (
    <Link className={productClass} to={`/details/${props.id}`}>
      <div className="Box">
        <span>{props.name}</span>
      </div>
    </Link>
  );
};

export default Product;
