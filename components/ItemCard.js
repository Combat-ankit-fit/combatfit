import { Box, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';

const ItemCard = (props) => {
    return (
        <Box
            pos={'relative'}
            rounded="md"
            overflow={'hidden'}
            h="40px"
            {...props}
        >
            <NextImage
                src="/polo-shirt.png"
                layout="responsive"
                objectFit="cover"
                height="20px"
                width="20px"
            />

            <Box p="6">
                <Text>Combat Fit</Text>
            </Box>
        </Box>
    );
};

export default ItemCard;
