import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/ui/MainPage";
import { MoviePage } from "../pages/MoviePage/ui/MoviePage";
import { Layout } from "../components/Layout";

export function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route 
                        path="/"
                        element={<MainPage />}
                    />
                    <Route 
                        path="/movie/:id"
                        element={<MoviePage />}
                    />
                </Route>
            </Routes>
        </Router>
    )
}