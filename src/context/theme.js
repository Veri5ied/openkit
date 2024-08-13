import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useEffect, useState, } from "react";
export const ThemeContext = createContext(undefined);
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
export const ThemeProvider = ({ children, initialTheme, }) => {
    const [theme, _] = useState(() => {
        const storedTheme = localStorage.getItem("openkit_theme");
        return storedTheme ? JSON.parse(storedTheme) : initialTheme;
    });
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);
    return (_jsx(ThemeContext.Provider, { value: { theme }, children: children }));
};
