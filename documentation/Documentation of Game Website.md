# Chapter 1: Responsive Layout
at the beginning we need to make a responsive UI so using `Grid` component in `Chakra Ui` we did as follows
```tsx
function App() {
  return(
  <Grid templateAreas={
    {base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`}
  }>
      <GridItem area = "nav" bg = "red"> NAV </GridItem>
      <GridItem
      area = "aside" bg={`gold`}
      display={{ base: "none", lg: "block" }}
      >
        ASIDE</GridItem>
      <GridItem area = "main" bg="blue"> MAIN </GridItem>
  </Grid>
  )
}
```
so using this we divided the layout into nav, aside and main .. but i wanted the aside panel to only show on the large screens .. so we did that `templateAreas` thing and used the `display` prop to say that this component here only appears for the large not for the base thing .. so this is how it looked like for the large screens
![[Pasted image 20260120164321.png]]
and this is how it looks for mobile screen
![[Pasted image 20260120164420.png]]

---

# Chapter 2: Navigation Bar
## first: put the logo
i first imported logo (white and black versions for the dark and light modes) 
```tsx
import logoBlack from '../assets/logoBlack.png'
import logoWhite from '../assets/logoWhite.png'
```
## second: make the Dark mode button
i literally took it copy-paste from chakra documentation 
```tsx
import { Button } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"

const Demo = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Button variant="outline" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  )
}
export default Demo
```


## finally: put them all in one component
so in the `NavBar.tsx` component we gonna mix all together and maintain the logo switching depending on the mode chosen (dark or light)
```tsx
import { useColorMode } from "@/components/ui/color-mode"

const NavBar = () => {

  const { colorMode } = useColorMode()
  const logo = colorMode === 'dark' ? logoWhite : logoBlack
  
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <Demo/> // the toggle mode button
    </HStack>
  )
}
```

and this how it looks like dark and light
![[Pasted image 20260120175430.png]]![[Pasted image 20260120175445.png]]

---
# Chapter 3: Fetching API
to fetch the API its recommended to make a .ts file and use `axios` in it .. we just need to import it and use the following piece of code
```ts
import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key: '058a56fd5e8f439aa22ba43488052b6f'
    }
})
```
so now in the file `api-client.ts` we got the API base URL and key in it .. now how to use them?

## first: see what the response should contain
here it says that response has these things
![[Pasted image 20260120171131.png]]
 but we need from them only count and results .. so we need to make interface to indicate what specifically should be fetched .. so in our `GameGrid.tsx` file  
 ```tsx
 interface FetchGame{
  count: number,
  results: // but what should results contain? games? so lets make game interface
}
 ``` 
 so now to indicate we need from the results data we should see what it contains 
 ![[Pasted image 20260120171651.png]]
 in our project we only need to take `id` and `name` attributes .. so we gonna make a `Game` interface
 ```tsx
interface Game{
  id: number,
  name: string
}

interface FetchGame{
  count: number,
  results: Game[]
}
 ```
## Second: do the fetch process
so now using `useEffect` we gonna fetch the data as follows
```tsx
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
    useEffect(()=>
    {
        apiClient.get<FetchGame>('/games') // the endpoint
        .then(res => setGames(res.data.results))
        .catch(err => setError(err.message))
    }, [])
```
now we got the id and names on the games in array `games` .. so finally we gonna return the names of the games in unordered list as follows
```tsx
  return (

    <div>
      {   games.map(game => {
             return <ul>
                <li key={game.id}>{game.name}</li>
                    </ul>
          })
      }
    </div>
  )
```
so the final result is as follows 
![[Pasted image 20260120173746.png]]

---


# Chapter 4: Making Hook
so now in the chapter 3 we did the fetch process but inside the `GameGrid` component which is not the best practice .. so to increase the modularity and make code cleaner, we may make a hook called `useGame` and it should contain as follows
```tsx
import { useEffect, useState } from "react"
import apiClient from "../api-client"

interface Game{
    id: number,
    name: string
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
```
so this is literally the code we had in chapter 3 but everything related with fetching the data is copied here .. so our `GameGrid` component became more modular and making only one task which is rendering games as follows
```tsx
import { Text } from '@chakra-ui/react'
import useGame from "@/hooks/useGame"

const GameGrid = () => {
  const {games, error} = useGame()
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
```
---

# Chapter 5: Making Cards
to make cards its very simple in Chakra Ui where in the docs there are lots of cards details .. so we will make the cards easily .. but what to display in them? we gonna make a `GameCard` component as follows: READ the comments
```tsx
import type { Game } from "@/hooks/useGame";
import 
{ Button, CardBody, CardDescription, CardFooter, CardRoot, CardTitle, Image }
 from "@chakra-ui/react";

// first we gonna make interface to specify what should be included in card
// we need game .. so we will just add the game type here .. but previously we
// only had id and name attributes .. now we gonna head to our Game thing and add
// the bg .. we can see from the doc of RAWG that the image is string

interface Props{
    game: Game
}

const GameCard = (props: Props) => {
    return (
    <CardRoot borderRadius={20} overflow={'hidden'}>
        <Image src={props.game.background_image} />
        <CardBody>
            <CardTitle>{props.game.name}</CardTitle>
            <CardDescription>
                {"Rating: " + props.game.rating}
            </CardDescription>
        </CardBody>
        <CardFooter gap={3}>
            <Button variant="solid">Buy now</Button>
            <Button variant="ghost">Add to cart</Button>
        </CardFooter>
    </CardRoot>
    )
};

export default GameCard;
```
and tiny change in the Game interface `useGame` hook so that we added the rating and background image attributes (names should be the same like in the response of the docs)
![[Pasted image 20260121120236.png]]
and the code of the interface would be 
```tsx
// don't forget to export the interface to use it in the GameCard
export interface Game{
    id: number,
    name: string,
    background_image: string,
    rating: string
}
```
so now we made the card correctly ... its time to display .. how to do so? we used `SimpleGrid` to display them .. so in the `GameGrid` component we will remove the `<ul>` tags and make as follows:
```tsx
const GameGrid = () => {
  const {games, error} = useGame()
  return (
      <>
      {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={10}                                columnGap="5" rowGap="6"> 
            {games.map(game =>
            <GameCard key={game.id} game = {game} />
            )}
        </SimpleGrid>
      </>
  )
}
//Note: gaps and padding can be customized its for the shape .. but the columns number it was done this way to improve the responsiveness of our layout
```

and finally this the final result for the mobile and the laptop views
![[Pasted image 20260121121706.png]]![[Pasted image 20260121121728.png]]