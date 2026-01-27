import { useEffect, useState } from "react"
import apiClient from "../api-client"


interface FetchData <T>{
    count: number,
    results: T[]
}

const useData = <T> (endpoint: string)=>{
    const [error, setError] = useState('')
    const [data, setData] = useState<T[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>
    {
        apiClient.get<FetchData<T>>(endpoint) // the endpoint
        .then(res => 
            {setData(res.data.results)
            setLoading(false)
        })
        .catch(err => 
            {setError(err.message)
            setLoading(false)
        })
    }, [endpoint])

    return {data, error, loading}
}
export default useData