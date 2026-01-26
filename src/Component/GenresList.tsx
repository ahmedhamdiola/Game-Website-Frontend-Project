import useData from "@/hooks/useData"
import type { Genres } from "@/hooks/useGenres"
import useGenres from "@/hooks/useGenres"

const GenresList = () => {
    const {data} = useGenres()
    return (
        <ul>
            {data.map(genre => {
                return <li key = {genre.id}>{genre.name}</li>
            })}
        </ul>
    )
}

export default GenresList
