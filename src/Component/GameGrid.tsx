import { SimpleGrid, Text } from '@chakra-ui/react'
import useGame from "@/hooks/useGame"
import GameCard from './GameCard'
import GameLoadingSkeleton from './GameLoadingSkeleton'

const GameGrid = () => {
  const {games, error, loading} = useGame()
  const skeletons = [1,2,3,4,5,6,7,8,9,10];
  return (
      <>
      {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={10} columnGap="5" rowGap="6">
          {loading && skeletons.map(s => <GameLoadingSkeleton key={s} />)}
            {games.map(game => 
            <GameCard key={game.id} game = {game} />
            )}
        </SimpleGrid>
      </>
  )
}

export default GameGrid
