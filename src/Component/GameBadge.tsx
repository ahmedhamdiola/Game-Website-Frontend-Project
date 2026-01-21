import { Badge } from "@chakra-ui/react";
interface Props{
    score: number
}
const GameBadge = (props: Props) => {
    let color
    if(props.score >= 90) color = 'green';
    else if(props.score >= 80) color = 'yellow';
    else color = 'red'
    return (
        <Badge colorPalette={color}>{props.score}</Badge>
    )
}

export default GameBadge
