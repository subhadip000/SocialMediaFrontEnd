import React, { createContext, useContext } from "react";
import useProvideTheme from "../../hooks/theme/useProvideTheme";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const theme = useProvideTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
