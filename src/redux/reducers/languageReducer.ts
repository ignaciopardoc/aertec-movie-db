import { TAction } from "../types";
const initialState = "en";

export default (state = initialState, action: TAction) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
