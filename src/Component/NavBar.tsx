import { HStack, Image, Text } from '@chakra-ui/react'
import logoBlack from '../assets/logoBlack.png'
import logoWhite from '../assets/logoWhite.png'
const NavBar = () => {
  return (
    <HStack>
        <Image src= {logoWhite} boxSize={`60px`}/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
