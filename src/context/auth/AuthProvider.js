import React, { createContext, useContext } from "react";
import useProvideAuth from "../../hooks/auth/useProvideAuth";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
