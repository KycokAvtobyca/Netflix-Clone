import { createContext } from "react";

type SearchContextType = {
    searchValue: string,
    setSearchValue: (searchValue: string) => void
}

export const SearchContext = createContext<SearchContextType | null>(null)