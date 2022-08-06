import { Box, Button, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';

const ItemCard = (props) => {
    console.log('Name is:-', props.name);
    const itemName = props.name;
    return (
        <Box border="2px solid black">
            <Box position="relative" overflow={'hidden'} {...props}>
                <NextImage src={`/${itemName}.jpg`} layout="fill" />
            </Box>
            <Flex
                flexDirection={'column'}
                gridRowGap={4}
                alignItems="center"
                mb="4"
            >
                <Text>Round Neck Polo Tshirt</Text>
                <Button colorScheme="primary" width="50%">
                    Rs. 500
                </Button>
            </Flex>
        </Box>
    );
};

export default ItemCard;
