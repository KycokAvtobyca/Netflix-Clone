import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

interface Props {
    children: ReactNode
}

export function ThemeProvider({children}: Props) {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme");
        
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme
        }
        
        return 'dark'
    })

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"))

    return (
        <ThemeContext.Provider
            value={
                {
                    theme,
                    toggleTheme
                }
            }
        >
            {children}
        </ThemeContext.Provider>
    )
}