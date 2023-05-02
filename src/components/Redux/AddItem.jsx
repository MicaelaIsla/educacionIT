import { connect } from "react-redux";
import { addItem } from "../../redux/cart/actions";
import "./AddItem.css";

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => {
      dispatch(addItem(id));
    },
  };
};

const AddToCartButton = (props) => {
  return (
    <button className="Details__AddButton" onClick={props.addItem}>
      Lo Quiero
    </button>
  );
};

const myConnector = connect(mapStateToProps, mapDispatchToProps);

export default myConnector(AddToCartButton);
