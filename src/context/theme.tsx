/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme: string;
}

interface ThemeContextType {
  theme: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeProviderProps) => {
  const [theme, _] = useState(() => {
    const storedTheme: string = localStorage.getItem("openkit_theme")!;
    return storedTheme ? JSON.parse(storedTheme) : initialTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
