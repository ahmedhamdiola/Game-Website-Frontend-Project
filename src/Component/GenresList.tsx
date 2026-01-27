import useGenres from "@/hooks/useGenres"
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react"

const GenresList = () => {
    const {data, loading} = useGenres()
    return (
        <>
        {loading && <Spinner size="lg"/>}
        <List.Root unstyled={true}>
            {data.map(genre => {
                return <ListItem key = {genre.id} paddingY={'5px'}>
                        <HStack>
                            <Image boxSize='32px' borderRadius={'10px'} src={genre.image_background}/>
                            <Text fontSize={'lg'}>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                })}
        </List.Root>
        </>
    )
}

export default GenresList
