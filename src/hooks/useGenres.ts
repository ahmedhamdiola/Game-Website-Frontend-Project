import useData from "./useData"


export interface Genres{
    id: number,
    name: string,
    games_count: number,
    image_background: string
}
const useGenres = ()=> useData<Genres>('/genres')

export default useGenres