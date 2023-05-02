import { useContext } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import CartProductContext from "../../context/CartProductContext";
import "./CartProductList.css";

const CartProductList = () => {
  const cartProductList = useContext(CartProductContext);

  const cart = useSelector((state) => state.cart);
  const cartWithDetails = cart.map((product, index) => {
    return {
      ...cartProductList.find((p) => p.id === +product.id),
      quantity: product.quantity,
    };
  });

  return (
    <>
      {cartWithDetails.length ? (
        cartWithDetails.map((product, index) => (
          <CartProduct
            key={index}
            color={product.color}
            name={product.name}
            price={product.price}
            size={product.size}
            quantity={product.quantity}
          />
        ))
      ) : (
        <p className="Cart__Default-Message">Tu carrito esta vacío</p>
      )}
    </>
  );
};

export default CartProductList;
