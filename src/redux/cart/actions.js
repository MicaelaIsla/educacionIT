import {
  ADDITEM,
  INCREASEQUANTITY,
  DELETEITEM,
  DECREASEQUANTITY,
} from "./action_types";

export const addItem = (id) => {
  return function (dispatch) {
    dispatch({ type: ADDITEM, payload: id });
  };
};

export const increaseQuantity = (id) => ({
  type: INCREASEQUANTITY,
  payload: id,
});

export const deleteItem = (id) => ({
  type: DELETEITEM,
  payload: id,
});

export const decreaseQuantity = (id) => ({
  type: DECREASEQUANTITY,
  payload: id,
});
