import { lazy, Suspense, useMemo } from "react"
import { useParams } from "react-router-dom"
import { MOVIES } from "../../MainPage/model/movies.data"

const LazyMovieComments = lazy(() => import("../../../components/ui/MovieComments"))

export function MoviePage() {
    const {id} = useParams()
    const movie = useMemo(() => {
        return MOVIES.find(movie => movie.trailerYoutubeId === id)
    }, [id])

    if (!movie) return <p>Movie not found</p>
    
    return (
        <div className="m-auto w-full max-w-xl bg-black text-white rounded-2xl overflow-hidden">
            {/* Постер фильма */}
            <div className="relative w-[70%] rounded-xl overflow-hidden">
                <img 
                    className="w-full object-cover" 
                    src={movie?.image} 
                    alt="Изображение видеоконтента" 
                />
            </div>

            {/* Контент под постером */}
            <div className="mt-4 space-y-2 w-full">
                {/* Название */}
                <h2 className="text-3xl font-bold tracking-tight lowercase">
                    {movie?.name}
                </h2>

                {/* Рейтинг / Метаданные */}
                <div className="text-sm text-gray-400 font-medium">
                    <span>IMDb: {movie.rating}</span>
                    <span className="mx-2 text-gray-600">•</span>
                    <span className="text-xs text-gray-500">ID: #{id}</span>
                </div>

                {/* Описание */}
                <p className="text-sm leading-relaxed text-gray-300 font-light">
                    Это краткое описание фильма. Здесь можно добавить жанр, 
                    продолжительность, год выпуска или просто синопсис, 
                    как в интерфейсе Netflix.
                </p>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Comments</h2>
                    <Suspense fallback={<p>Loading...</p>}>
                        <LazyMovieComments />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
