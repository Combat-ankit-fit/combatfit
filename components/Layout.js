import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
    Box,
    Flex,
    useBreakpoint,
    useDisclosure,
    Text,
    Container,
    Grid,
    SimpleGrid,
    Button,
    useBreakpointValue,
    Divider,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import NextImage from 'next/image';
import React from 'react';
import ItemCard from '../components/ItemCard';
import HomepageGridImages from '../components/HomepageGridImages';
import Footer1 from './Footer1';
import router, { useRouter } from 'next/router';
import MobileDrawer from './MobileDrawer';
import { ItemContext } from '../context/ItemProvider';
import GenericItemCard from '../components/GenericItemCard';
import { Carousel } from 'react-responsive-carousel';

const Layout = ({
    children,
    sidebarRequired = true,
    firstImage = '',
    streamImages = false,
    recommendedItems = false,
    secondImage = '',
    bottomGridImages = false,
    souvenirs = false,
    mugs = false,
    homepage = false,
    maxW = '4xl',
    breadCrumbsRequired = false,
    presentItem = '',

    recurringItems = false,
    breadCrumbsPath = '',
}) => {
    const router = useRouter();
    const ItemsFuncContext = React.useContext(ItemContext);
    const { name = '', selectedItems = [] } = ItemsFuncContext;

    const isMobileView = useBreakpointValue({ base: true, md: false });
    return (
        <Box id="layout" display={'flex'} minH={homepage ? '300vh' : '100vh'}>
            {!isMobileView && (
                <Header
                    breadCrumbsRequired={breadCrumbsRequired}
                    breadCrumbsPath={breadCrumbsPath}
                />
            )}
            {isMobileView && router.pathname !== '/' && (
                <MobileDrawer breadCrumbsPath={breadCrumbsPath} />
            )}

            {isMobileView && router.pathname === '/' && (
                <MobileDrawer
                    breadCrumbsPath={false}
                    position="absolute"
                    isBreadCrumRequired={false}
                    bgColor="black"
                />
            )}

            {sidebarRequired && <Sidebar presentItem={presentItem} />}

            {router.pathname === '/' && (
                <Box w="full" height={'full'} position="absolute">
                    <NextImage
                        src="/banner-souviners.png"
                        objectFit="cover"
                        layout="fill"
                    />
                </Box>
            )}

            <Box
                id="box__container"
                display={'flex'}
                justifyContent="center"
                width="full"
                flexDirection={'column'}
                position="relative"
            >
                {firstImage && (
                    <Box
                        w="full"
                        id="firstimage"
                        mt={{ base: 10, md: 8 }}
                        position={'relative'}
                    >
                        {!isMobileView && (
                            <Box
                                position={'absolute'}
                                left="10%"
                                w="sm"
                                h="full"
                                id="hello"
                                zIndex={'overlay'}
                                mt="24"
                            >
                                <Flex flexDirection={'column'} w="xs">
                                    <Box mb="12">
                                        <Text
                                            color="white"
                                            fontSize={'3xl'}
                                            maxW="xs"
                                            textAlign={'center'}
                                            fontWeight={'bold'}
                                        >
                                            Wear your
                                        </Text>
                                        <Text
                                            color="white"
                                            fontWeight={'bold'}
                                            fontSize="4xl"
                                            maxW="xs"
                                            textAlign={'center'}
                                        >
                                            values to be the change
                                        </Text>
                                    </Box>
                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        width={'xs'}
                                        mb="4"
                                        onClick={() => {
                                            router.push('/items/tshirts');
                                        }}
                                    >
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                        )}

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
                                            router.push('/items/tshirts');
                                        }}
                                    >
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                        )}

                        <NextImage
                            src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/banner01.jpg?alt=media&token=0a8f99d5-9b9b-459d-a7cb-accf316994d1"
                            objectFit="cover"
                            height={isMobileView ? 1000 : 900}
                            width={1600}
                            layout="responsive"
                        />
                    </Box>
                )}
                {streamImages && !isMobileView && (
                    <Grid
                        templateColumns="repeat(5, 1fr)"
                        mb="2"
                        w="full"
                        mt="4"
                    >
                        {[1, 2, 3, 4, 5].map((item, i) => {
                            return (
                                <HomepageGridImages
                                    key={item}
                                    height="200px"
                                    name={item}
                                    extension="png"
                                    bgColor="#2D2D2D"
                                />
                            );
                        })}
                    </Grid>
                )}

                {streamImages && isMobileView && (
                    <Box
                        w="full"
                        id="main__box"
                        bgColor={'black'}
                        border="1px solid black"
                        height={'200px'}
                        sx={{
                            '.carousel-status': {
                                display: 'none',
                            },
                            '.control-dots': {
                                position: 'absolute',
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
                        }}
                    >
                        <Carousel showThumbs={false} autoPlay>
                            {[1, 2, 3, 4, 5].map((item, index) => {
                                return (
                                    <Box
                                        marginTop={'30px'}
                                        key={index}
                                        onClick={() => {
                                            if (item === 1) {
                                                router.push(
                                                    '/items/casual-tshirts'
                                                );
                                            }
                                            if (item === 2) {
                                                router.push('/items/trousers');
                                            }
                                            if (item === 3) {
                                                router.push(
                                                    '/items/coffee-mugs'
                                                );
                                            }
                                            if (item === 4) {
                                                router.push('/items/posters');
                                            }
                                            if (item === 5) {
                                                router.push(
                                                    '/items/customized-clothing'
                                                );
                                            }
                                        }}
                                    >
                                        <NextImage
                                            id={index}
                                            key={index}
                                            src={`/${item}.png`}
                                            height={120}
                                            width={120}
                                            objectFit="fill"
                                        />
                                    </Box>
                                );
                            })}
                        </Carousel>
                    </Box>
                )}

                {secondImage && (
                    <Box w="full" id="firstimage" position={'relative'}>
                        <Box
                            position={'absolute'}
                            w="full"
                            h="inherit"
                            zIndex={'overlay'}
                            display="flex"
                            justifyContent={'center'}
                            alignItems="center"
                        >
                            <Flex
                                justifyContent={'center'}
                                alignItems="center"
                                flexDirection={'column'}
                                mt="4"
                            >
                                <Divider
                                    orientation="horizontal"
                                    borderColor={'orange'}
                                />
                                <Text
                                    color="white"
                                    fontWeight={'bold'}
                                    fontSize={{ base: 'xl', md: '5xl' }}
                                >
                                    Stay Inspired
                                </Text>

                                <Divider
                                    orientation="horizontal"
                                    borderColor={'orange'}
                                />
                            </Flex>
                        </Box>

                        {isMobileView && (
                            <Box
                                position={'absolute'}
                                id="new"
                                zIndex={'overlay'}
                                h="full"
                                mt="5"
                                right="10%"
                            >
                                <Flex
                                    flexDirection={'column'}
                                    h="inherit"
                                    alignItems={'center'}
                                    justifyContent="center"
                                >
                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        onClick={() => {
                                            router.push(
                                                '/items/millitary-clothing'
                                            );
                                        }}
                                    >
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                        )}

                        {!isMobileView && (
                            <Box
                                position={'absolute'}
                                id="new"
                                zIndex={'overlay'}
                                h="full"
                                mt="5"
                                right="10%"
                                w="md"
                            >
                                <Flex
                                    flexDirection={'column'}
                                    h="inherit"
                                    alignItems={'center'}
                                    justifyContent="center"
                                >
                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        width={'xs'}
                                        onClick={() => {
                                            router.push('/items/all-products');
                                        }}
                                    >
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                        )}

                        <NextImage
                            src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/banner02.jpg?alt=media&token=7adf5dc5-e918-4d3a-a25f-387b8ce6cf68"
                            objectFit="cover"
                            height={isMobileView ? 800 : 600}
                            width={1200}
                            layout="responsive"
                        />
                    </Box>
                )}
                {bottomGridImages && !isMobileView && (
                    <SimpleGrid columns={2} w="full" id="grid">
                        <React.Fragment>
                            <Box position={'relative'}>
                                <Box
                                    w="full"
                                    height={'full'}
                                    position="absolute"
                                >
                                    <NextImage
                                        src="/banner-souviners.png"
                                        objectFit="cover"
                                        layout="fill"
                                    />
                                </Box>
                                <Flex
                                    h="full"
                                    justifyContent={'center'}
                                    alignItems="center"
                                    flexDirection={'column'}
                                    gridRowGap="3"
                                >
                                    <Box
                                        zIndex="overlay"
                                        width={'xs'}
                                        display="flex"
                                        justifyContent={'space-around'}
                                        alignItems="center"
                                        flexDirection={'column'}
                                        gridRowGap="3"
                                    >
                                        <Divider
                                            orientation="horizontal"
                                            borderColor={'orange'}
                                        />
                                        <Text
                                            zIndex="overlay"
                                            color="white"
                                            fontWeight={'bold'}
                                            fontSize="3xl"
                                        >
                                            Beyond Regulars
                                        </Text>
                                        <Divider
                                            orientation="horizontal"
                                            borderColor={'orange'}
                                        />
                                    </Box>

                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        onClick={() => {
                                            router.push('/items/shorts');
                                        }}
                                    >
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                            <Box
                                position="relative"
                                overflow={'hidden'}
                                cursor="pointer"
                                onClick={() => {
                                    router.push('/items/shorts');
                                }}
                            >
                                <NextImage
                                    src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/banner03.jpg?alt=media&token=2412613a-f846-46d3-8548-24efe2a3e555"
                                    width={1200}
                                    height={700}
                                />
                            </Box>
                            <Box
                                position="relative"
                                overflow={'hidden'}
                                onClick={() => {
                                    router.push('/items/trousers');
                                }}
                                cursor="pointer"
                            >
                                <NextImage
                                    src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/banner04.jpg?alt=media&token=c0e5af5f-25cb-49fa-9570-a37b2521f2b2"
                                    width={1200}
                                    height={700}
                                />
                            </Box>
                            <Box position={'relative'}>
                                <Box
                                    w="full"
                                    height={'full'}
                                    position="absolute"
                                >
                                    <NextImage
                                        src="/banner-souviners.png"
                                        objectFit="cover"
                                        layout="fill"
                                    />
                                </Box>
                                <Flex
                                    h="full"
                                    justifyContent={'center'}
                                    alignItems="center"
                                    flexDirection={'column'}
                                    gridRowGap="3"
                                >
                                    <Box
                                        zIndex="overlay"
                                        width={'md'}
                                        display="flex"
                                        justifyContent={'center'}
                                        alignItems="center"
                                        flexDirection={'column'}
                                        gridRowGap="3"
                                    >
                                        <Divider
                                            orientation="horizontal"
                                            borderColor={'orange'}
                                        />
                                        <Text
                                            zIndex="overlay"
                                            fontWeight={'bold'}
                                            color="white"
                                            fontSize={'3xl'}
                                        >
                                            Outdoor and Functional Wear
                                        </Text>
                                        <Divider
                                            orientation="horizontal"
                                            borderColor={'orange'}
                                        />
                                    </Box>

                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        onClick={() => {
                                            router.push('/items/trousers');
                                        }}
                                    >
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                        </React.Fragment>
                    </SimpleGrid>
                )}
                {bottomGridImages && isMobileView && (
                    <Box position={'relative'}>
                        <Box
                            position={'absolute'}
                            id="new"
                            zIndex={'overlay'}
                            h="full"
                            right="10%"
                            w="md"
                        >
                            <Flex
                                flexDirection={'column'}
                                h="inherit"
                                alignItems={'center'}
                                justifyContent="center"
                            >
                                <Box mb="4">
                                    <Divider
                                        orientation="horizontal"
                                        borderColor={'orange'}
                                    />
                                    <Text
                                        color="white"
                                        fontWeight={'bold'}
                                        fontSize="2xl"
                                    >
                                        Beyond Regulars
                                    </Text>
                                    <Divider
                                        orientation="horizontal"
                                        borderColor={'orange'}
                                    />
                                </Box>

                                <Button
                                    colorScheme="primary"
                                    color="black"
                                    onClick={() => {
                                        router.push('/items/shorts');
                                    }}
                                >
                                    Explore Now
                                </Button>
                            </Flex>
                        </Box>
                        <NextImage
                            src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/banner03.jpg?alt=media&token=2412613a-f846-46d3-8548-24efe2a3e555"
                            objectFit="cover"
                            width={900}
                            height={700}
                        />
                    </Box>
                )}
                {bottomGridImages && isMobileView && (
                    <Box position={'relative'}>
                        <Box
                            position={'absolute'}
                            id="new123"
                            zIndex={'overlay'}
                            h="full"
                            mt="5"
                            right="7%"
                        >
                            <Flex
                                flexDirection={'column'}
                                h="inherit"
                                alignItems={'center'}
                                justifyContent="center"
                            >
                                <Box
                                    display={'flex'}
                                    flexDirection="column"
                                    alignItems={'center'}
                                    justifyContent="center"
                                    mb="3"
                                >
                                    <Divider
                                        orientation="horizontal"
                                        borderColor={'orange'}
                                    />
                                    <Text color="white" fontWeight={'bold'}>
                                        OUTDOOR AND
                                    </Text>

                                    <Text color="white" fontWeight={'bold'}>
                                        FUNCTIONAL WEAR
                                    </Text>
                                    <Divider
                                        orientation="horizontal"
                                        borderColor={'orange'}
                                    />
                                </Box>

                                <Button
                                    colorScheme="primary"
                                    color="black"
                                    onClick={() => {
                                        router.push('/items/trousers');
                                    }}
                                >
                                    Explore Now
                                </Button>
                            </Flex>
                        </Box>
                        <NextImage
                            src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/banner04.jpg?alt=media&token=c0e5af5f-25cb-49fa-9570-a37b2521f2b2"
                            objectFit="cover"
                            width={900}
                            height={700}
                        />
                    </Box>
                )}
                {souvenirs && (
                    <SimpleGrid columns={{ base: 1, md: 2 }} w="full" id="grid">
                        <Box cursor={'pointer'}>
                            <Box
                                position="relative"
                                overflow={'hidden'}
                                onClick={() => {
                                    router.push('/items/beer');
                                }}
                            >
                                <NextImage
                                    src="/banner05.jpg"
                                    width={1200}
                                    height={700}
                                />
                            </Box>
                            <Box
                                position="relative"
                                overflow={'hidden'}
                                onClick={() => {
                                    router.push('/items/coffee-mugs');
                                }}
                            >
                                <NextImage
                                    src="/banner06.jpg"
                                    width={1200}
                                    height={700}
                                />
                            </Box>
                        </Box>
                        {!isMobileView && (
                            <Box position={'relative'}>
                                <Box
                                    w="full"
                                    height={'full'}
                                    position="absolute"
                                >
                                    <NextImage
                                        src="/banner-souviners.png"
                                        objectFit="cover"
                                        layout="fill"
                                    />
                                </Box>
                                <Flex
                                    h="full"
                                    justifyContent={'center'}
                                    alignItems="center"
                                    flexDirection={'column'}
                                    gridRowGap="5"
                                    w="full"
                                >
                                    <Divider
                                        orientation="horizontal"
                                        borderColor={'orange'}
                                    />
                                    <Text
                                        color="white"
                                        zIndex="overlay"
                                        fontWeight={'bold'}
                                        fontSize="4xl"
                                    >
                                        Lifestyle Products
                                    </Text>
                                    <Divider
                                        orientation="horizontal"
                                        borderColor={'orange'}
                                    />

                                    <Box
                                        zIndex={'overlay'}
                                        display="flex"
                                        flexDirection={'column'}
                                        maxW="md"
                                        justifyContent={'center'}
                                        alignContent="center"
                                    >
                                        <Text
                                            color="white"
                                            zIndex="overlay"
                                            fontWeight={'bold'}
                                            fontSize="4xl"
                                        >
                                            The MILITARY WAY
                                        </Text>
                                    </Box>

                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        onClick={() => {
                                            router.push('/items/coffee-mugs');
                                        }}
                                    >
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                        )}
                    </SimpleGrid>
                )}
                {mugs && !isMobileView && (
                    <Box position={'relative'}>
                        <SimpleGrid
                            columns={2}
                            w="full"
                            {...(isMobileView && {
                                position: 'absolute',
                            })}
                            mb="4"
                        >
                            <Box
                                position="relative"
                                overflow={'hidden'}
                                cursor="pointer"
                                onClick={() => {
                                    router.push('/items/coffee-mugs');
                                }}
                            >
                                <NextImage
                                    src="/banner07.jpg"
                                    width={1200}
                                    height={800}
                                />
                            </Box>

                            <Box
                                position="relative"
                                overflow={'hidden'}
                                cursor="pointer"
                                onClick={() => {
                                    router.push('/items/beer');
                                }}
                            >
                                <NextImage
                                    src="/banner08.jpg"
                                    width={1200}
                                    height={800}
                                />
                            </Box>
                        </SimpleGrid>
                    </Box>
                )}

                {mugs && isMobileView && (
                    <Box position={'relative'}>
                        <SimpleGrid
                            columns={2}
                            w="full"
                            position={'absolute'}
                            h="full"
                        >
                            <Box
                                zIndex={'overlay'}
                                p="4"
                                position={'relative'}
                                display="flex"
                                alignItems={'center'}
                                id="new_box"
                                sx={{
                                    '&>span': {
                                        border: '2px solid white !important',
                                    },
                                }}
                                onClick={() => {
                                    router.push('/items/beer');
                                }}
                            >
                                <NextImage
                                    width="150px"
                                    height="200px"
                                    src="/banner08.jpg"
                                />
                            </Box>

                            <Box
                                zIndex={'overlay'}
                                p="4"
                                display="flex"
                                alignItems={'center'}
                                sx={{
                                    '&>span': {
                                        border: '2px solid white !important',
                                    },
                                }}
                                onClick={() => {
                                    router.push('/items/coffee-mugs');
                                }}
                            >
                                <NextImage
                                    width="150px"
                                    height="200px"
                                    src="/banner07.jpg"
                                />
                            </Box>
                        </SimpleGrid>
                        <NextImage
                            src="/banner-souviners.png"
                            objectFit="cover"
                            height={isMobileView ? 1000 : 900}
                            width={1600}
                            layout="responsive"
                        />
                    </Box>
                )}

                <Container
                    pos={'relative'}
                    maxW={maxW}
                    px="0"
                    flex="1"
                    id="main__container"
                    {...(!homepage && {
                        mt: 24,
                        p: 6,
                    })}
                >
                    {homepage && (
                        <NextImage src="/banner-souviners.png" layout="fill" />
                    )}
                    {recurringItems && (
                        <Grid
                            templateColumns={
                                isMobileView
                                    ? 'repeat(1, 1fr)'
                                    : 'repeat(4, 1fr)'
                            }
                            gap={3}
                            mb="16"
                            w="full"
                        >
                            {selectedItems?.map((item, i) => {
                                return (
                                    <GenericItemCard
                                        key={i}
                                        height={
                                            isMobileView ? '250px' : '320px'
                                        }
                                        info={item}
                                        extension="jpg"
                                    />
                                );
                            })}
                        </Grid>
                    )}
                    {children}
                </Container>
                <Footer1 homepage={homepage} />
            </Box>
        </Box>
    );
};

export default Layout;
