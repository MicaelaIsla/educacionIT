import {
  ADDITEM,
  INCREASEQUANTITY,
  DELETEITEM,
  DECREASEQUANTITY,
} from "./action_types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case ADDITEM:
      return [...state, { id: action.payload, quantity: 1 }];

    case INCREASEQUANTITY:
      newState = newState.map((item) => {
        if (item.id === action.payload)
          return {
            id: item.id,
            quantity: item.quantity + 1,
          };
        else return item;
      });
      return newState;

    case DELETEITEM:
      newState = newState.filter((item) => item.id !== action.payload);
      return newState;

    case DECREASEQUANTITY:
      newState = newState.map((item) => {
        if (item.id === action.payload)
          return {
            id: item.id,
            quantity: item.quantity - 1,
          };
        else return item;
      });

      newState = newState.filter((item) => item.quantity !== 0);

      return newState;

    default:
      return state;
  }
};

export default cartReducer;
