import { memo, useMemo } from "react"
import { MovieCard } from "../../../components/ui/MovieCard"
import { MOVIES } from "../model/movies.data"
import { useSearch } from "../../../hooks/useSearch"

function MainPage() {
  const { searchValue } = useSearch()

  const movies = useMemo(
    () => {
      console.log("movies changed")
      return MOVIES.filter(movie => movie.name.toLowerCase().includes(searchValue.toLowerCase()))
    },
    [searchValue]
  )

  return (
    <>

      <main className="flex gap-6">
        {
          movies.length > 0
          ?
            movies.map(movie => (
              <MovieCard {...movie} key={movie.name} />
            ))
          :
            <h2>Movies Not Found</h2>
        }
      </main>
    </>
  )
}

export default memo(MainPage)
