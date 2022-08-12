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
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import NextImage from 'next/image';
import React from 'react';
import ItemCard from '../components/ItemCard';
import HomepageGridImages from '../components/HomepageGridImages';
import Footer1 from './Footer1';

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
}) => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    return (
        <Box id="layout" display={'flex'} minH="100vh">
            {!isMobileView && <Header />}

            {sidebarRequired && <Sidebar />}
            <Box
                id="box__container"
                display={'flex'}
                justifyContent="center"
                width="full"
                flexDirection={'column'}
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
                                zIndex={'modal'}
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
                        gap={1}
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
                        mt="4"
                    >
                        {[1, 2, 3].map((item, i) => {
                            return (
                                <HomepageGridImages
                                    key={item}
                                    height="200px"
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
                        templateColumns="repeat(2, 1fr)"
                        gap={1}
                        mb="2"
                        w="full"
                        mt="4"
                    >
                        {[4, 5].map((item, i) => {
                            return (
                                <HomepageGridImages
                                    key={item}
                                    height="200px"
                                    name={item}
                                    extension="png"
                                    bgColor="brown"
                                />
                            );
                        })}
                    </Grid>
                )}

                {secondImage && (
                    <Box w="full" id="firstimage" mt="8" position={'relative'}>
                        <Box
                            position={'absolute'}
                            w="full"
                            h="inherit"
                            zIndex={'overlay'}
                        >
                            <Flex
                                w="inherit"
                                justifyContent={'center'}
                                alignItems="center"
                            >
                                <Text color="white" fontWeight={'bold'}>
                                    Millitary Inspired clothing
                                </Text>
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
                                    <Text color="white">Young</Text>
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

                {bottomGridImages && (
                    <SimpleGrid columns={2} w="full" id="grid">
                        <React.Fragment>
                            <Box p="4">
                                <Flex
                                    h="full"
                                    justifyContent={'center'}
                                    alignItems="center"
                                    flexDirection={'column'}
                                >
                                    <Text>Regular Clothing</Text>
                                    <Text>Beyond Regular</Text>
                                    <Button colorScheme="primary" color="black">
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                            <Box
                                position="relative"
                                overflow={'hidden'}
                                border="2px solid white"
                            >
                                <NextImage
                                    src="/banner03.jpg"
                                    width={900}
                                    height={700}
                                />
                            </Box>
                            <Box
                                position="relative"
                                overflow={'hidden'}
                                border="2px solid white"
                            >
                                <NextImage
                                    src="/banner04.jpg"
                                    width={900}
                                    height={700}
                                />
                            </Box>
                            <Box p="4">
                                <Flex
                                    h="full"
                                    justifyContent={'center'}
                                    alignItems="center"
                                    flexDirection={'column'}
                                >
                                    <Text>Outdoor and Functional Wear</Text>
                                    <Text>New Way</Text>
                                    <Button colorScheme="primary" color="black">
                                        Explore Now
                                    </Button>
                                </Flex>
                            </Box>
                        </React.Fragment>
                    </SimpleGrid>
                )}

                {souvenirs && (
                    <SimpleGrid columns={2} w="full" id="grid">
                        <Box>
                            <Box
                                position="relative"
                                overflow={'hidden'}
                                border="2px solid white"
                            >
                                <NextImage
                                    src="/banner05.jpg"
                                    width={900}
                                    height={700}
                                />
                            </Box>
                            <Box
                                position="relative"
                                overflow={'hidden'}
                                border="2px solid white"
                            >
                                <NextImage
                                    src="/banner06.jpg"
                                    width={900}
                                    height={700}
                                />
                            </Box>
                        </Box>
                        <Box p="4">
                            <Flex
                                w="full"
                                h="full"
                                justifyContent={'center'}
                                alignItems="Center"
                                flexDirection={'column'}
                            >
                                <Text>Lifestyle Products</Text>
                                <Text>The Military way</Text>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                )}

                {mugs && (
                    <SimpleGrid columns={2} w="full">
                        <Box
                            position="relative"
                            overflow={'hidden'}
                            border="2px solid white"
                        >
                            <NextImage
                                src="/banner07.jpg"
                                width={900}
                                height={700}
                            />
                        </Box>

                        <Box
                            position="relative"
                            overflow={'hidden'}
                            border="2px solid white"
                        >
                            <NextImage
                                src="/banner08.jpg"
                                width={900}
                                height={700}
                            />
                        </Box>
                    </SimpleGrid>
                )}

                <Container
                    mt="12"
                    pos={'relative'}
                    maxW="4xl"
                    p="6"
                    px="0"
                    flex="1"
                    id="main__container"
                >
                    {children}
                </Container>
                <Footer1 />
            </Box>
        </Box>
    );
};

export default Layout;
