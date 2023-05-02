import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
/* import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/actions"; */
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import ProductContext from "../../context/ProductContext";
import ProductDetails from "../../components/Product/ProductDetails";
import "./Details.css";

const Details = () => {
  /* const dispatch = useDispatch(); */

  const { id } = useParams();
  const productList = useContext(ProductContext);
  const currentProduct = productList.filter((product) => product.id === +id);

  const [currentColor, setCurrentColor] = useState();
  const currentColorHandler = (color) => setCurrentColor(color);

  const [currentSize, setCurrentSize] = useState();
  const currentSizeHandler = (size) => setCurrentSize(size);

  return (
    <>
      <Header view="details" />
      <div className="Details__Container">
        <Button class="Details__ReturnButton" link="/" text="Volver" />
        <ProductDetails
          currentProduct={currentProduct}
          onColorChange={currentColorHandler}
          onSizeChange={currentSizeHandler}
        />
        <button
          className="Details__AddButton"
          /* onClick={() => dispatch(addItem(id))} */
          onClick={() =>
            console.log({
              id: id,
              color: currentColor,
              size: currentSize,
            })
          }
        >
          Lo Quiero
        </button>
      </div>
    </>
  );
};

export default Details;
