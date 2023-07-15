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
                    height={isMobileView ? '220px' : '600px'}
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
                            height: isMobileView ? '100%' : '110%',
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
                                        height={isMobileView ? 60 : 500}
                                        width={isMobileView ? 60 : 600}
                                        objectFit={
                                            isMobileView ? 'contain' : 'cover'
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
                <Text color="white" textAlign="justify">
                    For the diverse roles performed by our Heroes in Uniform, we
                    offer Active Wears for unbeatable sports performance,
                    Tactical Wears for special operations, Inspire Wears to stay
                    invogue anytime anywhere, Winter Wears to combat the cold
                    and harsh and Customized clothing categories.
                </Text>
            </Flex>
            <Flex>
                <Box
                    id="firstimage"
                    mt={{ base: 1, md: 8 }}
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
                                    Explore Now
                                </Button>
                            </Flex>
                        </Box>
                    )}
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Active.jpg?alt=media&token=3e73c5fc-d108-43e1-909c-20d970ab8009'
                        }
                        objectFit={isMobileView ? 'cover' : 'contain'}
                        height={isMobileView ? 1000 : 600}
                        width={isMobileView ? 1600 : 1000}
                    />
                </Box>
                {!isMobileView && (
                    <Flex
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={'lg'}
                    >
                        <Text
                            fontSize={'6xl'}
                            color="white"
                            fontWeight={'bold'}
                        >
                            Active
                        </Text>
                        <Text color="white" fontSize={'4xl'} mb="4">
                            Collection
                        </Text>
                        <Button
                            colorScheme="primary"
                            onClick={() => {
                                router.push('/clothing-category?item=active');
                            }}
                        >
                            Explore Now
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
                        <Text color="white" fontSize={'4xl'} mb="4">
                            Collection
                        </Text>
                        <Button
                            colorScheme="primary"
                            onClick={() => {
                                router?.push(
                                    '/clothing-category?item=tactical'
                                );
                            }}
                        >
                            Explore Now
                        </Button>
                    </Flex>
                )}
                <Box
                    id="second__image"
                    mt={{ base: 4, md: 8 }}
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
                                    Explore Now
                                </Button>
                            </Flex>
                        </Box>
                    )}
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Tactical_left.jpg?alt=media&token=66752436-7407-4a15-be31-79ce5bf3cc0a'
                        }
                        objectFit={isMobileView ? 'cover' : 'contain'}
                        height={isMobileView ? 1000 : 600}
                        width={isMobileView ? 1600 : 1000}
                    />
                </Box>
            </Flex>
            <Flex my={4}>
                <Box
                    id="third__image"
                    mt={{ base: 1, md: 8 }}
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
                                    Explore Now
                                </Button>
                            </Flex>
                        </Box>
                    )}
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Inspire.jpg?alt=media&token=f7f83fa1-7873-4b3c-b0a7-ce7b10417299'
                        }
                        objectFit={isMobileView ? 'cover' : 'contain'}
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
                        <Text color="white" fontSize={'4xl'} mb="4">
                            Collection
                        </Text>
                        <Button
                            colorScheme="primary"
                            onClick={() => {
                                router.push('/clothing-category?item=inspire');
                            }}
                        >
                            Explore Now
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
                        <Text color="white" fontSize={'4xl'} mb="4">
                            Collection
                        </Text>
                        <Button
                            colorScheme="primary"
                            onClick={() => {
                                router.push('/clothing-category?item=winter');
                            }}
                        >
                            Explore Now
                        </Button>
                    </Flex>
                )}
                <Box
                    id="second__image"
                    mt={{ base: 0, md: 8 }}
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
                                    Explore Now
                                </Button>
                            </Flex>
                        </Box>
                    )}
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Winter.jpg?alt=media&token=49d61921-b392-4302-a7e6-f96e9126e29a'
                        }
                        objectFit={isMobileView ? 'cover' : 'contain'}
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
                    mt={{ base: 0, md: 8 }}
                    position={'relative'}
                    width="full"
                >
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/new_customized_ankit.jpg?alt=media&token=9f3fa646-fa60-470b-ac2f-528a2152932f'
                        }
                        objectFit={isMobileView ? 'contain' : 'cover'}
                        height={isMobileView ? 600 : 300}
                        width={isMobileView ? 1200 : 600}
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
                    mt={{ base: 0, md: 8 }}
                    position={'relative'}
                    width="full"
                >
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/new_military_ankit.jpg?alt=media&token=f04ef7a5-e215-4ddb-8485-8c1ea370544e'
                        }
                        objectFit={isMobileView ? 'contain' : 'cover'}
                        height={isMobileView ? 600 : 300}
                        width={isMobileView ? 1200 : 600}
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
