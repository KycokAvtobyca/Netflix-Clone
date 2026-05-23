import { memo, useCallback, useState } from "react"
import { FavoriteButton } from "./FavoriteButton"
import { Modal } from "./Modal"
import { Link } from "react-router-dom"

interface Props {
    image: string,
    rating: number,
    trailerYoutubeId: string
}

export const MovieCardComponent = ({
    image,
    rating,
    trailerYoutubeId
}: Props) => {
    const [isOpenTrailer, setIsOpenTrailer] = useState(false)
    const openTrailer = useCallback(
        () => setIsOpenTrailer(true), []
    )
    const closeTrailer = useCallback(
        () => setIsOpenTrailer(false), []
    )
    
    return (
        <article className="rounded-xl overflow-hidden w-40 h-62 shadow-mist-900
            shadow-lg"
        aria-label="Карточка видеоконтента"
        title="Карточка видеоконтента">
            <figure className="relative w-full h-full">
                <button className="w-full h-full" onClick={openTrailer}>
                    <img className="h-full rounded-xl object-cover w-full" src={image} alt="Изображение видеоконтента" />
                </button>

                {isOpenTrailer && (
                    <Modal onClose={closeTrailer}>
                        <iframe width="500" height="300" src={`https://www.youtube.com/embed/${trailerYoutubeId}?si=KnZ8GfhAGw3MhTbG`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </Modal>
                )}

                {/* Кнопка избранного и ссылка на страницу карточки */}
                <div className="absolute top-0.5 right-1 flex bg-white/30 gap-1 rounded-sm">
                    <div className="px-1 rounded-sm hover:bg-white/40 transition-colors duration-300 text-xl">
                        <FavoriteButton />
                    </div>

                    <div className="px-1 rounded-sm hover:bg-white/40 transition-colors duration-300 text-xl">
                        <Link to={`/movie/${trailerYoutubeId}`}>⛓️‍💥</Link>
                    </div>
                </div>

                {/* Тень внутри */}
                <div className="rounded-xl absolute inset-0 shadow-inner-bottom pointer-events-none" />

                {/* Рейтинг */}
                <figcaption className="absolute left-2 bottom-2 text-sm text-white">IMDb rating: {rating}</figcaption>
            </figure>
        </article>
    )
}

export const MovieCard = memo(MovieCardComponent)
MovieCard.displayName = "MovieCard"
