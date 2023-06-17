import React from 'react';
import { Box, Flex, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import Header from './Header';
import NextImage from 'next/image';
import Footer from './Footer1';
import { useRouter } from 'next/router';
import MobileDrawer from './MobileDrawer';

const LayoutNew = () => {
    const router = useRouter();
    const isMobileView = useBreakpointValue({ base: true, md: false });
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
                    mt={{ base: 10, md: 8 }}
                    position={'relative'}
                >
                    {isMobileView && (
                        <Box
                            position={'absolute'}
                            top="0px"
                            left="0"
                            h="full"
                            id="hello"
                            zIndex={'overlay'}
                            pt="4"
                            ps="2"
                        >
                            <Flex
                                flexDirection={'column'}
                                alignItems="center"
                                ms="8"
                                mt="4"
                            >
                                <Text
                                    color="white"
                                    fontSize="2xl"
                                    maxW="xs"
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                >
                                    Wear your
                                </Text>
                                <Text
                                    color="white"
                                    fontWeight={'bold'}
                                    fontSize="2xl"
                                    maxW="xs"
                                    textAlign={'center'}
                                >
                                    values to be the
                                </Text>
                                <Text
                                    color="white"
                                    fontWeight={'bold'}
                                    fontSize="2xl"
                                    maxW="xs"
                                    textAlign={'center'}
                                    mb="8"
                                >
                                    change
                                </Text>

                                <Button
                                    colorScheme="primary"
                                    color="black"
                                    maxW={'min-content'}
                                    onClick={() => {
                                        router.push('/items/all-items');
                                    }}
                                >
                                    Order Now
                                </Button>
                            </Flex>
                        </Box>
                    )}
                    <NextImage
                        src={
                            isMobileView
                                ? 'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/banner01.jpg?alt=media&token=0a8f99d5-9b9b-459d-a7cb-accf316994d1'
                                : 'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/New_Banner02.jpg?alt=media&token=05674af2-2639-494d-a96d-4eb03cf1f4d2'
                        }
                        objectFit="fill"
                        height={isMobileView ? 1000 : 1000}
                        width={isMobileView ? 1600 : 2000}
                        layout="responsive"
                    />
                </Box>
            </Box>
            <Flex flexDirection={'column'} px={10} py={4}>
                <Text color="white" fontWeight={'bold'}>
                    Our Categories
                </Text>
                <Text color="white">
                    Order our diverce range of clothing categories. Active for
                    dynamic performance. Tactical for strategic missions.
                    Inspire for style and motivation. Winter for extreme
                    conditions, and Customized for personalized apparel.
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
                            right="8"
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
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/Tactical.jpg?alt=media&token=60b38d59-fd1b-4aa6-9043-693bc5d5ffb3'
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
            <Flex width="full">
                <Box
                    id="second__image"
                    mt={{ base: 10, md: 8 }}
                    position={'relative'}
                    width="full"
                >
                    <NextImage
                        src={
                            'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/bottom_design.jpg?alt=media&token=a407d639-01a9-402f-bb03-0ab156356ce8'
                        }
                        objectFit="fill"
                        height={isMobileView ? 1000 : 800}
                        width={isMobileView ? 1600 : 1600}
                    />
                </Box>
            </Flex>
            <Flex width="full">
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
                        objectFit="fill"
                        height={isMobileView ? 1000 : 1000}
                        width={isMobileView ? 1600 : 2000}
                        layout="responsive"
                    />
                </Box>
            </Flex>
            <Footer homepage={true} />
        </Box>
    );
};

export default LayoutNew;
