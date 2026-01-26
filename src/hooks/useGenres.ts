import { useEffect, useState } from "react"
import apiClient from "../api-client"


export interface Genres{
    id: number,
    name: string,
    games_count: number,
}
interface FetchGenres{
    count: number,
    results: Genres[]
}

const useGame = ()=>{
    const [error, setError] = useState('')
    const [genres, setGenres] = useState<Genres[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>
    {
        apiClient.get<FetchGenres>('/genres') // the endpoint
        .then(res => 
            {setGenres(res.data.results)
            setLoading(false)
        })
        .catch(err => 
            {setError(err.message)
            setLoading(false)
        })
    }, [])

    return {genres, error, loading}
}
export default useGame