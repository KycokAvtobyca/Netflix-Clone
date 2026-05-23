import { useState, type ReactNode } from "react"
import { SearchContext } from "./SearchContext"

interface Props {
    children: ReactNode
}

export function SearchProvider({children}: Props) {
    const [searchValue, setSearchValue] = useState("")

    return (
        <SearchContext.Provider
            value={
                {
                    searchValue,
                    setSearchValue
                }
            }
        >
            {children}
        </SearchContext.Provider>
    )
}
