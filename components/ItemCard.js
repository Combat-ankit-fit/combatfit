import { Box, Button, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';

const ItemCard = (props) => {
    const itemName = props.name;
    const extension = props.extension;
    const itemText = props.itemText;

    return (
        <Box border="2px solid black">
            <Box position="relative" overflow={'hidden'} {...props}>
                <NextImage src={`/${itemName}.${extension}`} layout="fill" />
            </Box>
            <Flex
                flexDirection={'column'}
                gridRowGap={4}
                alignItems="center"
                mb="4"
            >
                <Text textAlign={'center'}>Round Neck Polo Tshirt</Text>
                <Button colorScheme="primary" maxW="sm">
                    Rs. 500
                </Button>
            </Flex>
        </Box>
    );
};

export default ItemCard;
