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
                                            Values to be change
                                        </Text>
                                        <Text
                                            color="white"
                                            fontWeight={'bold'}
                                            maxW="xs"
                                            textAlign={'center'}
                                            fontSize="3xl"
                                            bgColor="orange"
                                            mb="4"
                                        >
                                            CHANGE
                                        </Text>
                                    </Box>
                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        width={'xs'}
                                        mb="4"
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
                                >
                                    <Text
                                        color="white"
                                        fontSize={'xl'}
                                        maxW="xs"
                                        textAlign={'center'}
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
                                        Values to be change
                                    </Text>
                                    <Text
                                        color="black"
                                        fontWeight={'bold'}
                                        maxW={'min-content'}
                                        textAlign={'center'}
                                        fontSize="2xl"
                                        bgColor="orange"
                                        mb="4"
                                        p="2"
                                    >
                                        CHANGE
                                    </Text>
                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        maxW={'min-content'}
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
                                    height="300px"
                                    name={item}
                                    extension="png"
                                    bgColor="brown"
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
                                    {...(isMobileView && {
                                        borderColor: 'orange',
                                    })}
                                />
                                <Text
                                    color="white"
                                    fontWeight={'bold'}
                                    fontSize={{ base: 'xl', md: '6xl' }}
                                >
                                    Millitary Inspired clothing
                                </Text>
                                {isMobileView && (
                                    <Divider
                                        orientation="horizontal"
                                        borderColor={'orange'}
                                    />
                                )}
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
                                    <Text color="white" fontWeight={'bold'}>
                                        Stay
                                    </Text>
                                    <Text color="white">Active</Text>
                                    <Text color="white" fontWeight={'bold'}>
                                        Stay
                                    </Text>
                                    <Text color="white" mb="2">
                                        Young
                                    </Text>
                                    <Button colorScheme="primary" color="black">
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
                                    <Text
                                        color="white"
                                        fontWeight={'bold'}
                                        fontSize="5xl"
                                    >
                                        Stay
                                    </Text>
                                    <Text color="white" fontSize="4xl">
                                        Active
                                    </Text>
                                    <Text
                                        color="white"
                                        fontWeight={'bold'}
                                        fontSize="5xl"
                                    >
                                        Stay
                                    </Text>
                                    <Text color="white" fontSize="4xl">
                                        Young
                                    </Text>
                                    <Button colorScheme="primary" color="black">
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
                                            color="white"
                                            zIndex="overlay"
                                            fontWeight={'bold'}
                                        >
                                            Regular Clothing
                                        </Text>
                                    </Box>

                                    <Text
                                        zIndex="overlay"
                                        color="white"
                                        fontWeight={'bold'}
                                        fontSize="5xl"
                                    >
                                        Beyond
                                    </Text>
                                    <Text
                                        zIndex="overlay"
                                        color="white"
                                        fontSize="3xl"
                                    >
                                        Regular
                                    </Text>
                                    <Button colorScheme="primary" color="black">
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                            <Box position="relative" overflow={'hidden'}>
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
                                            Outdoor and
                                        </Text>
                                        <Text
                                            zIndex="overlay"
                                            fontWeight={'bold'}
                                            color="white"
                                            fontSize={'3xl'}
                                        >
                                            Functional Wear
                                        </Text>
                                    </Box>

                                    <Text
                                        zIndex="overlay"
                                        fontWeight={'bold'}
                                        color="white"
                                        fontSize={'5xl'}
                                    >
                                        New Way
                                    </Text>
                                    <Text
                                        zIndex="overlay"
                                        fontSize={'3xl'}
                                        color="white"
                                    >
                                        To go Beyond
                                    </Text>
                                    <Button colorScheme="primary" color="black">
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
                                <Box>
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

                                <Text
                                    color="white"
                                    fontSize="4xl"
                                    fontWeight={'bold'}
                                >
                                    Beyond
                                </Text>
                                <Text color="white" fontSize="2xl" mb="2">
                                    Regular
                                </Text>
                                <Button colorScheme="primary" color="black">
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
                                <Box
                                    display={'flex'}
                                    flexDirection="column"
                                    alignItems={'center'}
                                    justifyContent="center"
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

                                <Text color="white" fontWeight={'bold'}>
                                    New way to
                                </Text>
                                <Text color="white" mb="2">
                                    Go Beyond
                                </Text>

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
                                    w="full"
                                    h="full"
                                    justifyContent={'center'}
                                    alignItems="Center"
                                    flexDirection={'column'}
                                    gridRowGap="5"
                                >
                                    <Text
                                        color="white"
                                        zIndex="overlay"
                                        fontWeight={'bold'}
                                        fontSize="4xl"
                                    >
                                        Lifestyle
                                    </Text>
                                    <Text
                                        color="white"
                                        zIndex="overlay"
                                        fontWeight={'bold'}
                                        fontSize="5xl"
                                    >
                                        Products
                                    </Text>
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
                                            fontSize="5xl"
                                        >
                                            The Military way
                                        </Text>
                                        <Divider borderColor={'white'} />
                                    </Box>

                                    <Button
                                        colorScheme="primary"
                                        color="black"
                                        width={'xs'}
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
                                    ? 'repeat(3, 1fr)'
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
                                            isMobileView ? '125px' : '320px'
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
