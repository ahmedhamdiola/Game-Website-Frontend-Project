import useData from "./useData"


export interface Game{
    id: number,
    name: string,
    background_image: string,
    rating: string,
    metacritic: number
}

const useGame = ()=> useData<Game>('/games')
export default useGame