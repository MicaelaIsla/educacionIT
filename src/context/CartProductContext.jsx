import { createContext } from "react";

const CartProductContext = createContext([
  {
    id: 1,
    color: "Negro",
    price: 1500,
    name: "Anteojos 1",
    size: "S",
  },
  {
    id: 2,
    color: "Blanco",
    price: 500,
    name: "Anteojos 2",
    size: "M",
  },
  {
    id: 3,
    color: "Rojo",
    price: 1000,
    name: "Anteojos 3",
    size: "M",
  },
]);

export default CartProductContext;
