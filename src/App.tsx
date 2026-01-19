import { Grid, GridItem, Show } from "@chakra-ui/react"

function App() {
  return(
  <Grid templateAreas={
    {base: `"nav" "main"`,
     lg: `"nav nav" "aside main"`}
  }>
      <GridItem area = "nav" bg={`red`}>NAV</GridItem>
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
