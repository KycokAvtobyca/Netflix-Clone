import { memo, useState } from "react"

const FavoriteButtonComponent = memo(() => {
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <button onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? "❤️" : "🤍"}
        </button>
    )
})

export const FavoriteButton = memo(FavoriteButtonComponent);
FavoriteButton.displayName = 'FavoriteButton'