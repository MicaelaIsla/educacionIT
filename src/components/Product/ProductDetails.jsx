import ProductOptions from "./ProductOptions";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const currentProduct = props.currentProduct[0];

  return (
    <>
      <div className="Details__Box">
        <div className="Details__Image"></div>
      </div>
      <h3 className="Details__Title">{currentProduct.name}</h3>
      <p className="Details__Description">{currentProduct.description}</p>
      <ProductOptions
        options={currentProduct.colors}
        title="Colores"
        currentColorHandler={props.onColorChange}
      />
      <ProductOptions
        options={currentProduct.sizes}
        title="Talles"
        currentSizeHandler={props.onSizeChange}
      />
      <div className="Details__Price">Precio: ${currentProduct.price}</div>
    </>
  );
};

export default ProductDetails;
