import {
    Box,
    Button,
    Flex,
    HStack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

const GenericItemCard = (props) => {
    const itemName = props.name;
    const extension = props.extension;
    const itemText = props.itemText;
    const info = props?.info;
    const router = useRouter();

    const isDesktopView = useBreakpointValue({
        base: false,
        md: false,
        lg: true,
    });

    return (
        <Box
            border="2px solid lightgray"
            position={'relative'}
            cursor="pointer"
            onClick={() => {
                if (info?.availability === 'no') {
                    return;
                }

                router.push({
                    pathname: `/detail/clothing/${info?.identifier}`,
                    query: {
                        name: router?.query?.item,
                    },
                });
            }}
        >
            {info?.availability === 'no' && (
                <HStack
                    position={'absolute'}
                    right="0px"
                    zIndex={'modal'}
                    bgColor={'gray'}
                    p="0.5"
                >
                    <Text top="10px" fontWeight={'bold'}>
                        Out of stock
                    </Text>
                </HStack>
            )}

            <Box position="relative" overflow={'hidden'} {...props}>
                <NextImage
                    src={info?.name}
                    objectFit="contain"
                    width="450px"
                    height="500px"
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
                <Button
                    colorScheme="primary"
                    maxW="sm"
                    disabled={info?.availability === 'no'}
                >
                    Rs. {props?.info?.price}
                </Button>
            </Flex>
        </Box>
    );
};

export default GenericItemCard;
