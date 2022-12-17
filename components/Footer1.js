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
            {isDesktopView && (
                <Flex
                    as="footer"
                    bgColor={'black'}
                    bottom={0}
                    w="100%"
                    p="4"
                    {...(!homepage && {
                        marginTop: '50px',
                    })}
                >
                    <Flex
                        justifyContent={'space-between'}
                        w="full"
                        alignItems={'baseline'}
                    >
                        <Text color="white">Need Support?</Text>
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
            )}
            {isMobileView && (
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
                                    color={'white'}
                                    fontWeight="bold"
                                    fontSize={'lg'}
                                >
                                    Clothing
                                </Text>
                            </Flex>
                            <Flex
                                flexDirection={'column'}
                                alignItems="baseline"
                            >
                                <Text
                                    color={'white'}
                                    textAlign="center"
                                    fontWeight="bold"
                                    fontSize={'lg'}
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
                                        router.push('/items/tshirts');
                                    }}
                                >
                                    Tshirts
                                </Text>
                                <Text
                                    onClick={() => {
                                        router.push('/items/sweatshirts');
                                    }}
                                    color={'white'}
                                >
                                    Sweatshirts
                                </Text>
                                <Text
                                    color={'white'}
                                    onClick={() => {
                                        router.push('/items/trousers');
                                    }}
                                >
                                    Trousers
                                </Text>
                                <Text
                                    color={'white'}
                                    onClick={() => {
                                        router.push('/items/shorts');
                                    }}
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
                                >
                                    Coffee Mugs
                                </Text>
                                <Text
                                    color={'white'}
                                    onClick={() => {
                                        router.push('/items/beer');
                                    }}
                                >
                                    Beer Mugs
                                </Text>
                                <Text
                                    color={'white'}
                                    onClick={() => {
                                        router.push('/');
                                    }}
                                >
                                    Whisky Glasses
                                </Text>
                                <Text
                                    color={'white'}
                                    onClick={() => {
                                        router.push('/items/posters');
                                    }}
                                >
                                    Posters
                                </Text>
                                <Text
                                    color={'white'}
                                    onClick={() => {
                                        router.push('/items/keyrings');
                                    }}
                                >
                                    Keyrings
                                </Text>
                                <Text
                                    color={'white'}
                                    onClick={() => {
                                        router.push('/items/notepads');
                                    }}
                                >
                                    Notepad
                                </Text>
                            </Flex>
                        </Grid>
                        <Divider borderColor={'darkgrey'} mt="8" mb="4" />
                        <Grid templateColumns="repeat(2, 1fr)" gap={2} mt="0">
                            <Flex flexDirection={'column'} mt="0">
                                <Text
                                    color={'orange'}
                                    fontWeight="bold"
                                    fontSize={'xl'}
                                >
                                    SERVICES
                                </Text>
                                <Text
                                    color={'white'}
                                    onClick={() => {
                                        router.push(
                                            '/items/customized-clothing'
                                        );
                                    }}
                                    ms="4"
                                >
                                    Product Customization
                                </Text>
                                <Text
                                    ms="4"
                                    color={'white'}
                                    onClick={() => {
                                        router.push(
                                            '/items/customized-clothing'
                                        );
                                    }}
                                >
                                    Digital Design Aid
                                </Text>
                                <Text
                                    ms="4"
                                    color={'white'}
                                    onClick={() => {
                                        router.push('/contact-us');
                                    }}
                                >
                                    Procurement services
                                </Text>
                            </Flex>
                        </Grid>
                        <Box
                            border="1px solid darkgrey"
                            my="4"
                            py="4"
                            px="2"
                            borderRadius={'md'}
                        >
                            <Text color={'white'} textAlign={'justify'}>
                                At CombatFit, we are driven by three main
                                principles quality, transparency and value to
                                the clients. CombatFit aims to provide premium
                                quality clothing, gear and accessories which are
                                truly unique and at a price which is unbeatable.
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
            )}
        </React.Fragment>
    );
};

export default Footer;
