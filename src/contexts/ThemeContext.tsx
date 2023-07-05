import { PropTypes } from "@material-ui/core";
import { ReactNode, createContext, useState } from "react";

interface IThemeContextProps {
  children: ReactNode;
}

interface IThemeContextDefault {
  theme: PropTypes.Color;
  toggleTheme: (theme: PropTypes.Color) => void;
}

const themeContextDefaultData = {
  theme: "primary" as PropTypes.Color,
  toggleTheme: () => {},
};
export const ThemeContext = createContext<IThemeContextDefault>(
  themeContextDefaultData
);

const ThemeContextProvider = ({ children }: IThemeContextProps) => {
  const [theme, setTheme] = useState<PropTypes.Color>(
    themeContextDefaultData.theme
  );

  // thay doi mau theme
  const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);
  const themeContextDynamicData = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeContextDynamicData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
