import { TAction } from "../types";
import { IApiResponse } from "../../interfaces/IApiResponse";
const initialState: IApiResponse[] = [];

export default (state = initialState, action: TAction) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};
