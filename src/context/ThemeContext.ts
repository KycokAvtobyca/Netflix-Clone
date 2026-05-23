import { createContext } from "react"

export type Theme = 'light' | 'dark'

type TypeThemeContext = {
    theme: Theme,
    toggleTheme: () => void 
}

export const ThemeContext = createContext<TypeThemeContext | null>(null)
