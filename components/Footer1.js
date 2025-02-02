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

                    <Flex
                        flexDirection={isMobileView ? "column" : 'row'}
                        justifyContent="space-between"
                        w="100%"
                        p="8"
                    >
                        {/* Combatfit Section */}
                        <Flex flexDirection="column" gap="2">
                            <Text
                                color="white"
                                fontWeight="bold"
                                fontSize="xl"
                                mb="4"
                            >
                                Combatfit
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() => router.push('/')}
                            >
                                Home
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() => router.push('/clothing')}
                            >
                                Clothing
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() => router.push('/contact-us')}
                            >
                                About Us
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() => router.push('/contact-us')}
                            >
                                Contact Us
                            </Text>
                        </Flex>

                        {/* Clothing Section */}
                        <Flex flexDirection="column" gap="2">
                            <Text
                                color="white"
                                fontWeight="bold"
                                fontSize="xl"
                                mb="4"
                            >
                                Clothing
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() => router.push('/clothing-category?item=active')}
                            >
                                Active
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() =>
                                    router.push('/clothing-category?item=tactical')
                                }
                            >
                                Tactical
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() => router.push('/clothing-category?item=inspire')}
                            >
                                Inspire
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() => router.push('/clothing-category?item=winter')}
                            >
                                Winter
                            </Text>
                        </Flex>

                        {/* Service Section */}
                        <Flex flexDirection="column" gap="2">
                            <Text
                                color="white"
                                fontWeight="bold"
                                fontSize="xl"
                                mb="4"
                            >
                                Service
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() =>
                                    router.push('/contact-us')
                                }
                            >
                                Wholesale
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() =>
                                    router.push('/contact-us')
                                }
                            >
                                Payments & Shipping
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() =>
                                    router.push('/contact-us')
                                }
                            >
                                Exchange & Return
                            </Text>
                            <Text
                                color="white"
                                cursor="pointer"
                                onClick={() =>
                                    router.push('/contact-us')
                                }
                            >
                                Size Chart
                            </Text>
                        </Flex>

                        {/* Follow Us Section */}
                        <Flex
                            flexDirection="column"
                            alignItems="center"
                            gap="2"
                            {...isMobileView && {
                                alignItems: "baseline"
                            }}
                        >
                            <Text
                                color="white"
                                fontWeight="bold"
                                fontSize="xl"
                                mb="4"
                            >
                                Follow Us
                            </Text>
                            <Flex gap="4">
                                <Box
                                    cursor="pointer"
                                    onClick={() =>
                                        window.open(
                                            'https://www.facebook.com/combatfit.in/'
                                        )
                                    }
                                >
                                    <NextImage
                                        src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/fb.png?alt=media&token=bd71a066-2714-42ce-a705-a4c944f811b0"
                                        height={40}
                                        width={40}
                                        objectFit="contain"
                                    />
                                </Box>
                                <Box
                                    cursor="pointer"
                                    onClick={() =>
                                        window.open(
                                            'https://instagram.com/combatfit.in?igshid=NGVhN2U2NjQ0Yg=='
                                        )
                                    }
                                >
                                    <NextImage
                                        src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/insta.png?alt=media&token=ebdb2795-d600-45fc-ac09-1fef60ea4d59"
                                        height={40}
                                        width={40}
                                        objectFit="contain"
                                    />
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Divider borderColor={'darkgrey'} mt="8" mb="4" />

                    <Flex
                        justifyContent={'space-between'}
                        w="full"
                        mt="8"
                        mb="4"
                        flexDirection={'row'}
                        alignItems="center"
                    >
                        <Flex flexDirection="column">
                            <Text
                                color="white"
                                fontSize="md"
                                sx={{
                                    visibility: 'hidden',
                                }}
                            >
                                Keep in touch
                            </Text>
                       
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
