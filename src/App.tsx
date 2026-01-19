import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./Component/NavBar"

function App() {
  return(
  <Grid templateAreas={
    {base: `"nav" "main"`,
     lg: `"nav nav" "aside main"`}
  }>
      <GridItem area = "nav">
        <NavBar />
      </GridItem>
      <GridItem 
      area = "aside" bg={`gold`}
      display={{ base: "none", lg: "block" }}
      >
        ASIDE</GridItem>
      <GridItem area = "main" bg={`coral`}>MAIN</GridItem>
  </Grid>
  )
}

export default App
