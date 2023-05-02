import "./CartProduct.css";

const CartProduct = (props) => {
  return (
    <div className="Cart__Container">
      <div className="Cart__Title">{props.name}</div>
      <div className="Cart__Details">
        Talle: {props.size} | Color: {props.color}
      </div>
      <div className="Cart__BottomRow">
        <div className="Cart__Price">${props.price}</div>
        <div className="Cart__Quantity">
          <div>-</div>
          <div>{props.quantity}</div>
          <div>+</div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
