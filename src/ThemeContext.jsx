import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Apply the theme to the body element
  useEffect(() => {
    document.body.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };