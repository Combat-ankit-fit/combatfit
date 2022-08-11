import { Box, Button, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';

const ItemCard = (props) => {
    const itemName = props.name;
    const extension = props.extension;

    return (
        <Box border="2px solid black">
            <Box position="relative" overflow={'hidden'} {...props}>
                <NextImage src={`/${itemName}.${extension}`} layout="fill" />
            </Box>
            <Flex
                flexDirection={'column'}
                gridRowGap={4}
                alignItems="center"
            ></Flex>
        </Box>
    );
};

export default ItemCard;
