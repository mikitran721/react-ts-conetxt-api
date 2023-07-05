import { ReactNode, createContext, useReducer } from "react";
import { IAuthState, authReducer } from "../reducers/AuthReducer";
import { AuthActionType } from "../reducers/types";

const { TOGGLE_AUTH } = AuthActionType;

interface IAuthContextProps {
  children: ReactNode;
}

interface IAuthContextDefaultData {
  authInfo: IAuthState;
  toggleAuth: (username: string) => void;
}

const authDefault = {
  isAuthenticated: false,
  username: "",
};

export const AuthContext = createContext<IAuthContextDefaultData>({
  authInfo: authDefault,
  toggleAuth: () => {},
});

const AuthContextProvider = ({ children }: IAuthContextProps) => {
  // 1.reducer muon sd, 2. gia tri khoi diem
  const [authInfo, dispatch] = useReducer(authReducer, authDefault);

  const toggleAuth = (username: string) =>
    dispatch({ type: TOGGLE_AUTH, payload: username });

  const authContextData = {
    authInfo,
    toggleAuth,
  };
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
