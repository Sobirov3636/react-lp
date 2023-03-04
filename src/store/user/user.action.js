import { createAction } from "../../ulils/reducer/reducer.util";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrenUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
