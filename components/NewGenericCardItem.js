import { Box, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

const NewGenericItemCard = (props) => {
    const itemName = props.name;
    const extension = props.extension;
    const itemText = props.itemText;
    const info = props?.info;
    const router = useRouter();

    return (
        <Box border="2px solid black" cursor="pointer">
            <Box
                position="relative"
                overflow={'hidden'}
                display="flex"
                justifyContent={'center'}
                {...props}
            >
                <NextImage
                    src={`/${info.name}.${extension}`}
                    objectFit="contain"
                    height={'300'}
                    width="300px"
                />
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
                    Rs. {props?.info?.price}
                </Button>
            </Flex>
        </Box>
    );
};

export default NewGenericItemCard;
