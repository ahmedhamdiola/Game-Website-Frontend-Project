import type { Game } from "@/hooks/useGame";
import { CardBody, CardRoot, Heading, Image } from "@chakra-ui/react";

// first we gonna make interface to specify what should be included in card
// we need game .. so we will just add the game type here .. but previously we
// only had id and name attributes .. now we gonna head to our Game thing and add
// the bg .. we can see from the doc of PAWG that the image is string
interface Props{
    game: Game
}
const GameCard = (props: Props) => {
    console.log(props.game.background_image)
    return (
    <CardRoot borderRadius={20} overflow={'hidden'}>
        <Image src={props.game.background_image} />
        <CardBody>
            <Heading size={'3xl'}>{props.game.name}</Heading>
        </CardBody>
    </CardRoot>
    )
};

export default GameCard;
