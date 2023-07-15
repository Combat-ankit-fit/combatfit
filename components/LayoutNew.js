import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';
import { Box, Flex, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import Header from './Header';
import NextImage from 'next/image';
import Footer from './Footer1';
import { useRouter } from 'next/router';
import MobileDrawer from './MobileDrawer';
import { Carousel } from 'react-responsive-carousel';

const LayoutNew = () => {
    const router = useRouter();
    const isMobileView = useBreakpointValue({
        base: true,
        md: false,
        lg: false,
    });
    const isTabletView = useBreakpointValue({
        base: false,
        md: true,
        lg: false,
    });
    const isDesktopView = useBreakpointValue({
        base: false,
        md: false,
        lg: true,
    });

    const carousalImages = [
        'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/new_inspire.jpg?alt=media&token=08609396-c981-484c-894d-70987d02a4ca',
        'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/new_polo.jpg?alt=media&token=d7bdf65e-e4e9-426a-bb81-44456b37c4bf',
        'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/new_tactical.jpg?alt=media&token=78556de7-2dcc-474b-8382-bf11866269ad',
    ];

    return (
        <Box bgColor="black">
            <Box id="layout" display={'flex'}>
                {!isMobileView && <Header />}
                {isMobileView && (
                    <MobileDrawer
                        breadCrumbsPath={false}
                        position="absolute"
                        isBreadCrumRequired={false}
                        bgColor="black"
                    />
                )}
                <Box
                    w="full"
                    id="firstimage"
                    mt={{ base: 4, md: 2 }}
                    position={'relative'}
                    height={isMobileView ? '220px' : '800px'}
                    cursor={'pointer'}
                    sx={{
                        '.carousel-status': {
                            display: 'none',
                        },
                        '.control-dots': {
                            display: 'none',
                        },
                        '.carousel-slider > button': {
                            display: 'none',
                        },
                        '.carousel-root': {
                            height: '100%',
                        },
                        '.carousel-slider': {
                            height: '100%',
                        },
                        '.slider-wrapper': {
                            height: '100%',
                        },
                        '.slider-wrapper > ul': {
                            height: '100% !important',
                        },
                        '.slider-wrapper > ul > li > div': {
                            height: '100% !important',
                        },
                        '.slider-wrapper > ul > li > div > span': {
                            height: isMobileView
                                ? '100% !important'
                                : '85% !important',
                        },
                    }}
                >
                    <Carousel showThumbs={false} autoPlay infiniteLoop>
                        {carousalImages.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    onClick={() => {
                                        if (index === 0) {
                                            router.push(
                                                '/clothing-category?item=inspire'
                                            );
                                        }
                                        if (index === 1) {
                                            router.push('/items/all-items');
                                        }
                                        if (index === 2) {
                                            router.push(
                                                '/clothing-category?item=tactical'
                                            );
                                        }
                                    }}
                                >
                                    <NextImage
                                        id={index}
                                        key={index}
                                        src={item}
                                        height={isMobileView ? 60 : 600}
                                        width={isMobileView ? 60 : 600}
                                        objectFit={
                                            isMobileView ? 'contain' : 'contain'
                                        }
                                        layout="responsive"
                                    />
                                </Box>
                            );
                        })}
                    </Carousel>
                </Box>
            </Box>
            <Flex flexDirection={'column'} px={10} py={4}>
                <Text color="white" fontWeight={'bold'}>
                    Our Categories
                </Text>
                <Text color="white">
                    Explore our diverse range of clothing categories: Active for
                    dynamic performance, Tactical for strategic missions,
                    Inspire for style and motivation, Winter for extreme
                    conditions, and Customized for personalized military
                    apparel.
                </Text>
            </Flex>
            <Flex>
                <Box
                    id="firstimage"
                    mt={{ base: 10, md: 8 }}
                    position={'relative'}
                >
                    {isMobileView && (
                        <Box
                            position={'absolute'}
                            top="0px"
                            left="0"
                            h="full"
                            zIndex={'overlay'}
                            pt="4"
                            ps="2"
                        >
                            <Flex
                                flexDirection={'column'}
                                alignItems="center"
                                ms="2"
                                mt="8"
                            >
                                <Text
                                    color="white"
                                    fontWeight={'bold'}
                                    fontSize="2xl"
                                    maxW="xs"
                                    textAlign={'center'}
                                >
                                    Active
                                </Text>
                                <Text
                                    color="white"
                                    maxW="xs"
                                    textAlign={'center'}
                                    mb="8"
                                >
                                    Collection
                                </Text>

                                <Button
                                    colorScheme="primary"
                                    color="black"
                                    maxW={'min-content'}
                                    onClick={() => {
                                        router.push(
                                            '/clothing-category?item=active'
                                        );
                                    }}
                                >
                                    Order Now
                                </Button>
                            </Flex>
                        </Box>
                    )}
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Active.jpg?alt=media&token=3e73c5fc-d108-43e1-909c-20d970ab8009'
                        }
                        objectFit="contain"
                        height={isMobileView ? 1000 : 600}
                        width={isMobileView ? 1600 : 1000}
                    />
                </Box>
                {!isMobileView && (
                    <Flex
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gridRowGap={4}
                        width={'lg'}
                    >
                        <Text
                            fontSize={'6xl'}
                            color="white"
                            fontWeight={'bold'}
                        >
                            Active
                        </Text>
                        <Text color="white">Collection</Text>
                        <Button
                            colorScheme="primary"
                            onClick={() => {
                                router.push('/clothing-category?item=active');
                            }}
                        >
                            Order Now
                        </Button>
                    </Flex>
                )}
            </Flex>
            <Flex>
                {!isMobileView && (
                    <Flex
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gridRowGap={4}
                        width={'lg'}
                    >
                        <Text
                            fontSize={'6xl'}
                            color="white"
                            fontWeight={'bold'}
                        >
                            Tactical
                        </Text>
                        <Text color="white">Collection</Text>
                        <Button
                            colorScheme="primary"
                            onClick={() => {
                                router?.push(
                                    '/clothing-category?item=tactical'
                                );
                            }}
                        >
                            Order Now
                        </Button>
                    </Flex>
                )}
                <Box
                    id="second__image"
                    mt={{ base: 10, md: 8 }}
                    position={'relative'}
                >
                    {isMobileView && (
                        <Box
                            position={'absolute'}
                            top="10"
                            left="0"
                            h="full"
                            zIndex={'overlay'}
                            pt="4"
                            ps="2"
                        >
                            <Flex
                                flexDirection={'column'}
                                alignItems="center"
                                ms="4"
                            >
                                <Text
                                    color="white"
                                    fontWeight={'bold'}
                                    fontSize="2xl"
                                    maxW="xs"
                                    textAlign={'center'}
                                >
                                    Tactical
                                </Text>
                                <Text
                                    color="white"
                                    maxW="xs"
                                    textAlign={'center'}
                                    mb="2"
                                >
                                    Collection
                                </Text>

                                <Button
                                    colorScheme="primary"
                                    color="black"
                                    maxW={'min-content'}
                                    onClick={() => {
                                        router?.push(
                                            '/clothing-category?item=tactical'
                                        );
                                    }}
                                >
                                    Order Now
                                </Button>
                            </Flex>
                        </Box>
                    )}
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Tactical_left.jpg?alt=media&token=66752436-7407-4a15-be31-79ce5bf3cc0a'
                        }
                        objectFit="contain"
                        height={isMobileView ? 1000 : 600}
                        width={isMobileView ? 1600 : 1000}
                    />
                </Box>
            </Flex>
            <Flex my={4}>
                <Box
                    id="third__image"
                    mt={{ base: 10, md: 8 }}
                    position={'relative'}
                >
                    {isMobileView && (
                        <Box
                            position={'absolute'}
                            left="0"
                            h="full"
                            zIndex={'overlay'}
                            ps="2"
                            top={20}
                        >
                            <Flex
                                flexDirection={'column'}
                                alignItems="center"
                                ms="2"
                            >
                                <Text
                                    color="white"
                                    fontWeight={'bold'}
                                    fontSize="2xl"
                                    maxW="xs"
                                    textAlign={'center'}
                                >
                                    Inspire
                                </Text>
                                <Text
                                    color="white"
                                    maxW="xs"
                                    textAlign={'center'}
                                    mb="2"
                                >
                                    Collection
                                </Text>

                                <Button
                                    colorScheme="primary"
                                    color="black"
                                    maxW={'min-content'}
                                    onClick={() => {
                                        router.push(
                                            '/clothing-category?item=inspire'
                                        );
                                    }}
                                >
                                    Order Now
                                </Button>
                            </Flex>
                        </Box>
                    )}
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Inspire.jpg?alt=media&token=f7f83fa1-7873-4b3c-b0a7-ce7b10417299'
                        }
                        objectFit="contain"
                        height={isMobileView ? 1000 : 600}
                        width={isMobileView ? 1600 : 1000}
                    />
                </Box>
                {!isMobileView && (
                    <Flex
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gridRowGap={4}
                        width={'lg'}
                    >
                        <Text
                            fontSize={'6xl'}
                            color="white"
                            fontWeight={'bold'}
                        >
                            Inspire
                        </Text>
                        <Text color="white">Collection</Text>
                        <Button
                            colorScheme="primary"
                            onClick={() => {
                                router.push('/clothing-category?item=inspire');
                            }}
                        >
                            Order Now
                        </Button>
                    </Flex>
                )}
            </Flex>
            <Flex>
                {!isMobileView && (
                    <Flex
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gridRowGap={4}
                        width={'lg'}
                    >
                        <Text
                            fontSize={'6xl'}
                            color="white"
                            fontWeight={'bold'}
                        >
                            Winter
                        </Text>
                        <Text color="white">Collection</Text>
                        <Button
                            colorScheme="primary"
                            onClick={() => {
                                router.push('/clothing-category?item=winter');
                            }}
                        >
                            Order Now
                        </Button>
                    </Flex>
                )}
                <Box
                    id="second__image"
                    mt={{ base: 10, md: 8 }}
                    position={'relative'}
                >
                    {isMobileView && (
                        <Box
                            position={'absolute'}
                            left="0"
                            h="full"
                            zIndex={'overlay'}
                            ps="2"
                            top={20}
                        >
                            <Flex
                                flexDirection={'column'}
                                alignItems="center"
                                ms="4"
                            >
                                <Text
                                    color="white"
                                    fontWeight={'bold'}
                                    fontSize="2xl"
                                    maxW="xs"
                                    textAlign={'center'}
                                >
                                    Winter
                                </Text>
                                <Text
                                    color="white"
                                    maxW="xs"
                                    textAlign={'center'}
                                    mb="2"
                                >
                                    Collection
                                </Text>

                                <Button
                                    colorScheme="primary"
                                    color="black"
                                    maxW={'min-content'}
                                    onClick={() => {
                                        router.push(
                                            '/clothing-category?item=winter'
                                        );
                                    }}
                                >
                                    Order Now
                                </Button>
                            </Flex>
                        </Box>
                    )}
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Winter.jpg?alt=media&token=49d61921-b392-4302-a7e6-f96e9126e29a'
                        }
                        objectFit="contain"
                        height={isMobileView ? 1000 : 600}
                        width={isMobileView ? 1600 : 1000}
                    />
                </Box>
            </Flex>
            <Flex
                width="full"
                onClick={() => {
                    router?.push('/contact-us');
                }}
                cursor={'pointer'}
            >
                <Box
                    id="second__image"
                    mt={{ base: 10, md: 8 }}
                    position={'relative'}
                    width="full"
                >
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/new_customized.jpg?alt=media&token=40774237-b76d-42c7-b60a-e9f6d6829d84'
                        }
                        objectFit="contain"
                        height={isMobileView ? 1000 : 400}
                        width={isMobileView ? 1600 : 600}
                        layout="responsive"
                        quality={100}
                    />
                </Box>
            </Flex>
            <Flex
                width="full"
                onClick={() => {
                    router?.push('/contact-us');
                }}
                cursor={'pointer'}
            >
                <Box
                    id="second__image"
                    mt={{ base: 10, md: 8 }}
                    position={'relative'}
                    width="full"
                >
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Military%20Stroies%20banner.jpg?alt=media&token=b66de554-64d2-46bd-b480-68c810b8a4ad'
                        }
                        objectFit="contain"
                        height={isMobileView ? 1000 : 400}
                        width={isMobileView ? 1600 : 600}
                        layout="responsive"
                        quality={100}
                    />
                </Box>
            </Flex>
            <Footer homepage={true} />
        </Box>
    );
};

export default LayoutNew;
