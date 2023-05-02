import Button from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="Header">
      <h3 className="Header__Title">MioMio</h3>
      {props.view !== "cart" ? (
        <Button class="Header__Cart1" link="/cart" text="Carrito" />
      ) : (
        <p className="Header__Cart2">Tu Compra</p>
      )}
      <div className="Header__Line"></div>
    </div>
  );
};

export default Header;
