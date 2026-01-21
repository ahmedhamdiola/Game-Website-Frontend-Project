import { useEffect, useState } from "react"
import apiClient from "../api-client"


export interface Game{
    id: number,
    name: string,
    background_image: string,
    rating: string,
    metacritic: number
}
interface FetchGame{
    count: number,
    results: Game[]
}

const useGame = ()=>{
    const [error, setError] = useState('')
    const [games, setGames] = useState<Game[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>
    {
        apiClient.get<FetchGame>('/games') // the endpoint
        .then(res => 
            {setGames(res.data.results)
            setLoading(false)
        })
        .catch(err => 
            {setError(err.message)
            setLoading(false)
        })
    }, [])

    return {games, error, loading}
}
export default useGame