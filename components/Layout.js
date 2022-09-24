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
                    bgColor="none"
                    isBreadCrumRequired={false}
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
                        mt={{ base: 0, md: 8 }}
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
                                            Values to be the change
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
                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        maxW="xs"
                                    >
                                        Go To Products
                                    </Button>
                                </Flex>
                            </Box>
                        )}

                        {isMobileView && (
                            <Box
                                position={'absolute'}
                                top="0"
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
                                        Values to be
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
                            src="/banner01.jpg"
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
                                    height="230px"
                                    name={item}
                                    extension="png"
                                    bgColor="#2D2D2D"
                                />
                            );
                        })}
                    </Grid>
                )}
                {streamImages && isMobileView && (
                    <Grid
                        templateColumns="repeat(3, 1fr)"
                        gap={1}
                        mb="2"
                        w="full"
                        mt="1"
                    >
                        {[1, 2, 3].map((item, i) => {
                            return (
                                <HomepageGridImages
                                    key={item}
                                    height="150px"
                                    name={item}
                                    extension="png"
                                    bgColor="#2D2D2D"
                                />
                            );
                        })}
                    </Grid>
                )}
                {streamImages && isMobileView && (
                    <Grid
                        templateColumns="repeat(2, 1fr)"
                        gap={1}
                        mb="2"
                        w="full"
                    >
                        {[4, 5].map((item, i) => {
                            return (
                                <HomepageGridImages
                                    key={item}
                                    height="150px"
                                    name={item}
                                    extension="png"
                                    bgColor="#2D2D2D"
                                />
                            );
                        })}
                    </Grid>
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
                                    Military Inspired Clothing
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

                        <NextImage
                            src="/banner02.jpg"
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
                                            Regular Clothing
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
                                    src="/banner03.jpg"
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
                                    src="/banner04.jpg"
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
                                        Regular Clothing
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
                            src="/banner03.jpg"
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
                            src="/banner04.jpg"
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
                                            The Military way
                                        </Text>
                                    </Box>

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
