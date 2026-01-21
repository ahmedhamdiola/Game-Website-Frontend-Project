import type { Game } from "@/hooks/useGame";
import { Button, CardBody, CardDescription, CardFooter, CardRoot, CardTitle, Heading, Image } from "@chakra-ui/react";

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
