import Button from "../../components/Button/Button";
import CartProductList from "../../components/CartProduct/CartProductList";
import Header from "../../components/Header/Header";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <Header view="cart" />
      <div className="Cart">
        <CartProductList />
      </div>
      <div className="Cart__Buttons">
        <Button class="Cart__ShopButton" link="/" text="Seguir Comprando" />
        <Button class="Cart__PayButton" link="" text="Pagar $2500" />
      </div>
    </>
  );
};

export default Cart;
