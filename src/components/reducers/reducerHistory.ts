import { ActionHistory, TProduct } from "../../types/storeTypes";

const reducerHistory = (state: TProduct[], action: ActionHistory) => {
  switch (action.type) {
    case "initialize":
      return action.payload;
    case "addProduct":
      return [...state, action.payload];
    case "removeProduct":
      return [...state].filter((product) => product.id !== action.payload);
  }
};

export default reducerHistory;
