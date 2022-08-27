import { Box, Button, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';

const GenericItemCard = (props) => {
    const itemName = props.name;
    const extension = props.extension;
    const itemText = props.itemText;
    const info = props?.info;

    return (
        <Box border="2px solid black">
            <Box position="relative" overflow={'hidden'} {...props}>
                <NextImage src={`/${info.name}.${extension}`} layout="fill" />
            </Box>
            <Flex
                flexDirection={'column'}
                gridRowGap={4}
                alignItems="center"
                mb="4"
                p="2"
            >
                <Text textAlign={'center'} fontWeight="bold">
                    {info.alt}
                </Text>
                <Button colorScheme="primary" maxW="sm">
                    Rs. 500
                </Button>
            </Flex>
        </Box>
    );
};

export default GenericItemCard;
