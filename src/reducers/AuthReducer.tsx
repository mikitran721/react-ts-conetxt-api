import { AuthActionType } from "./types";

const { TOGGLE_AUTH } = AuthActionType;

export interface IAuthState {
  isAuthenticated: boolean;
  username: string;
}

type AuthAction = {
  type: AuthActionType;
  payload: string;
};

export const authReducer = (state: IAuthState, action: AuthAction) => {
  switch (action.type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        isAuthenticated: !state.isAuthenticated,
        username: action.payload,
      };

    default:
      return state;
  }
};
