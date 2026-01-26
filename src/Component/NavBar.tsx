import { HStack, Image, Text } from '@chakra-ui/react'
import logoBlack from '../assets/logoBlack.png'
import logoWhite from '../assets/logoWhite.png'
import Demo from "./Demo"
import { useColorMode } from "@/components/ui/color-mode"


const NavBar = () => {
  const { colorMode } = useColorMode()

  const logo = colorMode === 'dark' ? logoWhite : logoBlack

  return (
    <HStack justifyContent={'space-between'}>
      <Image src={logo} boxSize="60px" />
      <Text>HAMDIOLA STORE</Text> 
      <Demo/> 
    </HStack>
  )
}

export default NavBar
