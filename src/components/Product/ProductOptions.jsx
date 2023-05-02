import "./ProductOptions.css";

const ProductOptions = (props) => {
  const currentLabel = props.title === "Colores" ? "Colors" : "Sizes";

  const currentOptionHandler = (event) => {
    props.title === "Colores"
      ? props.currentColorHandler(event.target.value)
      : props.currentSizeHandler(event.target.value);
  };

  return (
    <>
      <div className={`Details__${currentLabel}Title`}>{props.title}:</div>
      <div
        className={`Details__${currentLabel}`}
        onChange={currentOptionHandler}
      >
        {props.options.map((option, index) => {
          return (
            <div key={index}>
              <label
                htmlFor={option}
                className={`Details__${currentLabel}Label`}
              >
                {option}
              </label>
              <input
                type="radio"
                id={option}
                name={`Details__${currentLabel}`}
                className={`Details__${currentLabel}Input`}
                value={option}
              ></input>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductOptions;
