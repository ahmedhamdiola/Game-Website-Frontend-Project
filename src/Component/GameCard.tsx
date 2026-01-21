import type { Game } from "@/hooks/useGame";
import { Button, CardBody, CardDescription, CardFooter, CardRoot, CardTitle, HStack, Image } from "@chakra-ui/react";
import GameBadge from "./GameBadge";

// first we gonna make interface to specify what should be included in card
// we need game .. so we will just add the game type here .. but previously we
// only had id and name attributes .. now we gonna head to our Game thing and add
// the bg .. we can see from the doc of RAWG that the image is string
interface Props{
    game: Game
}
const GameCard = (props: Props) => {
    return (
    <CardRoot width={"250px"} borderRadius={20} overflow={'hidden'}>
        
        <Image src={props.game.background_image} />
        <CardBody>
            <CardTitle>{props.game.name}</CardTitle>
            <CardDescription>
                <HStack justifyContent={'space-between'}>
                    {"Rating: " + props.game.rating}
                    <GameBadge score = {props.game.metacritic}></GameBadge>
                </HStack>
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
