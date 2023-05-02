import { createContext } from "react";

const ProductContext = createContext([
  {
    id: 1,
    class: "Boxs1",
    colors: ["Azul", "Marrón", "Verde"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga veritatis fugit quo placeat eius veniam consectetur voluptate cum omnis molestiae illo iusto quasi fugiat nisi impedit assumenda, dolores ducimus distinctio.",
    name: "Anteojos 1",
    price: 100,
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    class: "Boxs2",
    colors: ["Blanco", "Negro", "Rojo"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga veritatis fugit quo placeat eius veniam consectetur voluptate cum omnis molestiae illo iusto quasi fugiat nisi impedit assumenda, dolores ducimus distinctio.",
    name: "Anteojos 2",
    price: 200,
    sizes: ["S", "M", "L"],
  },
  {
    id: 3,
    class: "Boxs3",
    colors: ["Amarillo", "Gris", "Violeta"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga veritatis fugit quo placeat eius veniam consectetur voluptate cum omnis molestiae illo iusto quasi fugiat nisi impedit assumenda, dolores ducimus distinctio.",
    name: "Anteojos 3",
    price: 150,
    sizes: ["S", "M", "L"],
  },
]);

export default ProductContext;
