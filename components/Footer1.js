import {
    Flex,
    HStack,
    Text,
    Button,
    useBreakpointValue,
    Grid,
    Divider,
    Box,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const Footer = ({ homepage = false }) => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const isDesktopView = useBreakpointValue({ base: false, md: true });
    const router = useRouter();
    return (
        <React.Fragment>
            <React.Fragment>
                <Flex
                    as="footer"
                    bgColor={'black'}
                    bottom={0}
                    w="100%"
                    p="4"
                    {...(!homepage && {
                        marginTop: '50px',
                    })}
                    flexDir="column"
                >
                    <Divider borderColor={'darkgrey'} my="8" />
                    <Text color="orange" fontWeight="bold" fontSize={'xl'}>
                        PRODUCTS
                    </Text>

                    <Grid templateColumns="repeat(2, 1fr)" gap={2} mb="2">
                        <Flex flexDirection={'column'}>
                            <Text
                                color={'orange'}
                                fontWeight="bold"
                                fontSize={'xl'}
                            >
                                Clothing
                            </Text>
                        </Flex>
                        <Flex flexDirection={'column'} alignItems="baseline">
                            <Text
                                color={'orange'}
                                textAlign="center"
                                fontWeight="bold"
                                fontSize={'xl'}
                            >
                                Souvenirs
                            </Text>
                        </Flex>
                    </Grid>
                    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                        <Flex flexDirection={'column'} ms="4">
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/all-items');
                                }}
                                fontSize="lg"
                            >
                                Tshirts
                            </Text>
                            <Text
                                onClick={() => {
                                    router.push('/items/all-items');
                                }}
                                color={'white'}
                                fontSize="lg"
                            >
                                Sweatshirts
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/all-items');
                                }}
                                fontSize="lg"
                            >
                                Trousers
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/all-items');
                                }}
                                fontSize="lg"
                            >
                                Shorts
                            </Text>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            ps="4"
                            alignItems="baseline"
                        >
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/coffee-mugs');
                                }}
                                fontSize="lg"
                            >
                                Coffee Mugs
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/beer');
                                }}
                                fontSize="lg"
                            >
                                Beer Mugs
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/');
                                }}
                                fontSize="lg"
                            >
                                Whisky Glasses
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/posters');
                                }}
                                fontSize="lg"
                            >
                                Posters
                            </Text>
                        </Flex>
                    </Grid>
                    <Divider borderColor={'darkgrey'} mt="8" mb="4" />

                    <Box
                        border="1px solid darkgrey"
                        my="4"
                        py="4"
                        px="2"
                        borderRadius={'md'}
                    >
                        <Text
                            color={'white'}
                            textAlign={'justify'}
                            fontSize={{ base: 'xs', md: 'lg' }}
                        >
                            At CombatFit, we imbibe our values from Armed Forces
                            which teaches us time immemorial lessons about life
                            not only in broader sense and but also in minutest
                            details, the very basics of everyday life. This is
                            what we reflect in all our products, be it outdoors
                            and active wear clothing, inspired souvenirs and
                            various other lifestyle products. We are driven by
                            three main principles - Quality, Transparency and
                            Value to the clients. The whole idea behind bringing
                            CombatFit to life is to provide premium quality
                            outdoor and active wear clothing and gear which are
                            ergonomically designed and functionally suitable.
                            This truly fascinates us to deliver our best to the
                            very best.
                        </Text>
                    </Box>

                    <Flex
                        justifyContent={'space-between'}
                        w="full"
                        alignItems={'center'}
                        mt="8"
                        mb="4"
                    >
                        <Flex flexDir={'column'}>
                            <Text color="white">Need Support?</Text>
                            <Text color="white">Get in touch ...</Text>
                        </Flex>

                        <Button
                            colorScheme="primary"
                            color="black"
                            onClick={() => {
                                router.push('/contact-us');
                            }}
                        >
                            Contact us
                        </Button>
                    </Flex>
                </Flex>
            </React.Fragment>
        </React.Fragment>
    );
};

export default Footer;
