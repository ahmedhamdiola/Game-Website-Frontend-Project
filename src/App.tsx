import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./Component/NavBar"
import GameGrid from "./Component/GameGrid"
import GenresList from "./Component/GenresList"

function App() {
  return(
  <Grid templateAreas={
    {base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`}
  }
  templateColumns={{base: '1fr', lg: '200px 1fr'}}>
      <GridItem area = "nav">
        <NavBar />
      </GridItem>
      <GridItem 
      area = "aside" 
      display={{ base: "none", lg: "block" }}
      paddingLeft={5}
      >
        <GenresList />
        </GridItem>
      <GridItem area = "main">
        <GameGrid />
        </GridItem>
  </Grid>
  )
}

export default App
