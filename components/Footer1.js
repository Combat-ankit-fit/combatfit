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
import NextImage from 'next/image';

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
                    <Text
                        color="orange"
                        fontWeight="bold"
                        fontSize={{ base: 'md', md: 'xl' }}
                    >
                        PRODUCTS
                    </Text>

                    <Grid templateColumns="repeat(2, 1fr)" gap={2} mb="2">
                        <Flex flexDirection={'column'}>
                            <Text
                                color={'orange'}
                                fontWeight="bold"
                                fontSize={{ base: 'md', md: 'xl' }}
                            >
                                Clothing
                            </Text>
                        </Flex>
                        <Flex flexDirection={'column'} alignItems="baseline">
                            <Text
                                color={'orange'}
                                textAlign="center"
                                fontWeight="bold"
                                fontSize={{ base: 'md', md: 'xl' }}
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
                                fontSize={{ base: 'md', md: 'xl' }}
                            >
                                Tshirts
                            </Text>
                            <Text
                                onClick={() => {
                                    router.push('/items/all-items');
                                }}
                                color={'white'}
                                fontSize={{ base: 'md', md: 'xl' }}
                            >
                                Sweatshirts
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/all-items');
                                }}
                                fontSize={{ base: 'md', md: 'xl' }}
                            >
                                Trousers
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/all-items');
                                }}
                                fontSize={{ base: 'md', md: 'xl' }}
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
                                fontSize={{ base: 'md', md: 'xl' }}
                            >
                                Coffee Mugs
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/beer');
                                }}
                                fontSize={{ base: 'md', md: 'xl' }}
                            >
                                Beer Mugs
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/');
                                }}
                                fontSize={{ base: 'md', md: 'xl' }}
                            >
                                Whisky Glasses
                            </Text>
                            <Text
                                color={'white'}
                                onClick={() => {
                                    router.push('/items/posters');
                                }}
                                fontSize={{ base: 'md', md: 'xl' }}
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
                            fontSize={{ base: 'sm', md: 'lg' }}
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
                        mt="8"
                        mb="4"
                        flexDirection={'row'}
                        alignItems="center"
                    >
                        <Flex flexDirection="column">
                            <Text color="white" fontSize="md">
                                Keep in touch
                            </Text>
                            <Flex>
                                <Box
                                    cursor="pointer"
                                    onClick={() => {
                                        window.open(
                                            'https://instagram.com/combatfit.in?igshid=NGVhN2U2NjQ0Yg=='
                                        );
                                    }}
                                >
                                    <NextImage
                                        src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/insta.png?alt=media&token=ebdb2795-d600-45fc-ac09-1fef60ea4d59"
                                        height={isMobileView ? '20px' : '40px'}
                                        width={isMobileView ? '20px' : '40px'}
                                        objectFit="contain"
                                    />
                                </Box>
                                <Box
                                    ms={1}
                                    cursor="pointer"
                                    onClick={() => {
                                        window.open(
                                            'https://www.facebook.com/combatfit.in/'
                                        );
                                    }}
                                >
                                    <NextImage
                                        src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/fb.png?alt=media&token=bd71a066-2714-42ce-a705-a4c944f811b0"
                                        height={isMobileView ? '20px' : '40px'}
                                        width={isMobileView ? '20px' : '40px'}
                                        objectFit="contain"
                                    />
                                </Box>
                                <Box
                                    ms={1}
                                    cursor="pointer"
                                    onClick={() => {
                                        window.open('https://pin.it/60AJdQq');
                                    }}
                                >
                                    <NextImage
                                        src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/pinterest.png?alt=media&token=6da85e0c-3b82-4007-92db-7493688310c5"
                                        height={isMobileView ? '20px' : '40px'}
                                        width={isMobileView ? '20px' : '40px'}
                                        objectFit="contain"
                                    />
                                </Box>
                            </Flex>
                        </Flex>

                        <Flex flexDir={'column'}>
                            <Text color="white" fontSize="md">
                                Need Support?
                            </Text>

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
                </Flex>
            </React.Fragment>
        </React.Fragment>
    );
};

export default Footer;
