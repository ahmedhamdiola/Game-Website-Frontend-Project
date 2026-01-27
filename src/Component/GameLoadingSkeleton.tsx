import { CardRoot, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameLoadingSkeleton = () => {
    return (
        <CardRoot borderRadius={20} overflow={'hidden'}>
            <Skeleton height="200px" />
            <SkeletonText />
        </CardRoot>
    )
}

export default GameLoadingSkeleton
