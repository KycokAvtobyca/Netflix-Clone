import { useEffect, useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useSearch } from "../../hooks/useSearch"
import { useDebounce } from "../../hooks/useDebounce"

export function Search() {
    const [localValue, setLocalValue] = useState("")
    const { setSearchValue } = useSearch()
    const debounceValue = useDebounce(localValue)

    const navigate = useNavigate()


    const decoratorSetSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
        if (window.location.pathname !== "/") {
            navigate("/")
            setLocalValue(e.target.value)
            return
        }

        setLocalValue(e.target.value)
    }

    useEffect(() => {
        setSearchValue(debounceValue)
    }, [debounceValue, setSearchValue])

    return <input className="w-full h-full min-w-25 border border-black/15 dark:border-white/15 px-2 py-1 rounded-lg outline-0" type="search" value={localValue} onChange={decoratorSetSearchTerm} placeholder="Search..." />
}
