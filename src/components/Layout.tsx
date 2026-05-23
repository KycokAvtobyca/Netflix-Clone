import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { Search } from "./ui/Search";

export function Layout() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className="min-h-screen w-full p-3 space-y-8 bg-white text-black dark:bg-black dark:text-white">
            <header className="flex justify-between h-11 space-x-3">
                <Link to="/">
                    <img src="/logo.png" alt="" width={150} className="shrink-0" />
                </Link>

                <div className="flex items-center justify-end flex-1 max-w-md space-x-2">
                <Search />

                <button className="shrink-0 w-12" onClick={toggleTheme}>
                    {theme === "dark" ? "Light": "Dark"}
                </button>
                </div>
            </header>
                
            <Outlet />
        </div>
    )
}