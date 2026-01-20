import { useEffect, useState } from "react"
import apiClient from "../api-client"
import { Text } from '@chakra-ui/react'

interface Game{
  id: number,
  name: string
}

interface FetchGame{
  count: number,
  results: Game[]
}
const GameGrid = () => {
  const [error, setError] = useState('')
  const [games, setGames] = useState<Game[]>([])


    useEffect(()=>
    {
        apiClient.get<FetchGame>('/games') // the endpoint
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    }, [])
    if(!games) console.log('wait loading games')
  return (
      <>
      {error && <Text>{error}</Text>}
        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
      </>
  )
}

export default GameGrid
