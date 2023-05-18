import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

const useProvideTheme = () => {
  const [theme, setTheme] = useState("");
  const color = useColorScheme();

  useEffect(() => {
    setTheme(color);
  }, [color]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log("After", theme);
  };

  return {
    toggleTheme,
    theme,
  };
};

export default useProvideTheme;
