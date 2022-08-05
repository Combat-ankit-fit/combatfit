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
            <Box p="6">
                <NextImage
                    src="/polo-shirt.png"
                    layout="responsive"
                    objectFit="cover"
                    height="18px"
                    width="20px"
                />
                <Text>Combat Fit</Text>
            </Box>
        </Box>
    );
};

export default ItemCard;
