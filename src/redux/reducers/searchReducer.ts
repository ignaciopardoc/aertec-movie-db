import { TAction } from "../types";

const initialState = "";

export default (state = initialState, action: TAction) => {
  switch (action.type) {
    case "SET_SEARCH":
      return action.payload;
    default:
      return state;
  }
};
