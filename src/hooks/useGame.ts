import { useEffect, useState } from "react"
import apiClient from "../api-client"


export interface Game{
    id: number,
    name: string,
    background_image: string
}
interface FetchGame{
    count: number,
    results: Game[]
}

const useGame = ()=>{
    const [error, setError] = useState('')
    const [games, setGames] = useState<Game[]>([])


    useEffect(()=>
    {
        apiClient.get<FetchGame>('/games') // the endpoint
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    }, [])

    return {games, error}
}
export default useGame