import {
    Text,
    Grid,
    GridItem,
    Box,
    Flex,
    Textarea,
    Spacer,
    Divider,
    Button,
    FormLabel,
    Container,
    useBreakpointValue,
    useDisclosure,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    VStack,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import ItemCard from '../components/ItemCard';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { InputControl, FormControl, TextAreaControl } from '../exporter';
import NextImage from 'next/image';
import React from 'react';

import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Footer1 from '../components/Footer1';
import router, { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';

const ContactUs = () => {
    const router = useRouter();
    const [isRequestSubmitted, setRequestSubmitted] = React.useState(false);
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const { isOpen, onOpen, onClose } = useDisclosure();
    const clothingItems = [
        { item: 'Tshirts', path: '/' },
        { item: 'Sweatshirts', path: '/sweatshirts' },
        { item: 'Trousers', path: '/trousers' },
        { item: 'Shorts', path: '/shorts' },
        { item: 'Customized Clothing', path: '/customized-clothing' },
    ];
    const souvenirs = [
        { item: 'Coffee Mugs', path: '/coffee-mugs' },
        { item: 'Beer Mugs', path: '/beer' },
        { item: 'Whisky Glasses', path: '/' },
        { item: 'Posters', path: '/posters' },
        { item: 'Keyrings', path: '/keyrings' },
        { item: 'Notepads', path: '/notepads' },
    ];

    const submitHandler = async (values) => {
        setRequestSubmitted(true);

        await axios.post(
            'https://clothing-app-b7613-default-rtdb.firebaseio.com/queries.json',
            values
        );
    };

    const validate = Yup.object({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        phonenumber: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        description: Yup.string().required('Email is required'),
    });

    return (
        <Flex flexDirection={'column'}>
            {!isMobileView && <Header />}

            <Box
                position={'relative'}
                {...(isMobileView && {
                    mb: '16',
                })}
            >
                {isMobileView && (
                    <Box p="4" position={'absolute'} id="icon" zIndex={'modal'}>
                        {!isOpen && (
                            <HamburgerIcon
                                color={'white'}
                                boxSize={6}
                                onClick={() => {
                                    isOpen ? onClose() : onOpen();
                                }}
                            />
                        )}
                    </Box>
                )}
                {isOpen && (
                    <Box
                        w="full"
                        as="nav"
                        position={'fixed'}
                        overflow="hidden"
                        zIndex={'modal'}
                        bgColor="black"
                        h={isOpen ? '80%' : '0px'}
                        p="4"
                        display={'flex'}
                        flexDirection="column"
                    >
                        <CloseIcon
                            color="white"
                            boxSize={5}
                            onClick={() => {
                                isOpen ? onClose() : onOpen();
                            }}
                        />

                        <Box py="4" display={'flex'}>
                            <Text
                                color="white"
                                onClick={() => {
                                    router.push('/');
                                }}
                            >
                                Home
                            </Text>
                        </Box>
                        <Box pb="4" display={'flex'} flexDirection="column">
                            <Text color="white">Clothing</Text>
                            <List spacing={3}>
                                <Box p="2" px="4">
                                    {clothingItems?.map((clothingItem) => {
                                        return (
                                            <ListItem
                                                color={'white'}
                                                key={clothingItem}
                                                onClick={() => {
                                                    onClose();
                                                    router.push(
                                                        `/items/${clothingItem?.path}`
                                                    );
                                                }}
                                            >
                                                <ListIcon
                                                    as={ChevronRightIcon}
                                                    color="white"
                                                />
                                                {clothingItem?.item}
                                            </ListItem>
                                        );
                                    })}
                                </Box>
                            </List>
                        </Box>
                        <Box pb="4" display={'flex'} flexDirection="column">
                            <Text color="white">Souviners</Text>
                            <List spacing={3}>
                                <Box py="2" px="4">
                                    {souvenirs?.map((souvenir) => {
                                        return (
                                            <ListItem
                                                color={'white'}
                                                key={souvenir?.item}
                                                onClick={() => {
                                                    onClose();
                                                    router.push(
                                                        `/items/${souvenir?.path}`
                                                    );
                                                }}
                                            >
                                                <ListIcon
                                                    as={ChevronRightIcon}
                                                    color="white"
                                                />
                                                {souvenir.item}
                                            </ListItem>
                                        );
                                    })}
                                </Box>
                            </List>
                        </Box>

                        <Box pb="4" display={'flex'}>
                            <Text color="white">Vision</Text>
                        </Box>
                        <Box pb="4" display={'flex'}>
                            <Text
                                color="white"
                                onClick={() => {
                                    isOpen ? onClose() : onOpen();
                                    router.push('/contact-us');
                                }}
                            >
                                Contact Us
                            </Text>
                        </Box>
                    </Box>
                )}
                <Box
                    position={'absolute'}
                    left="0"
                    height={'full'}
                    width="full"
                    zIndex={'overlay'}
                >
                    <Flex
                        height={'full'}
                        width="full"
                        justifyContent={'center'}
                        alignItems="center"
                        flexDir={'column'}
                        gridRowGap="3"
                    >
                        <Text
                            color="white"
                            fontWeight={'bold'}
                            fontSize={{ base: '2xl', md: '7xl' }}
                        >
                            VISION
                        </Text>

                        <Text
                            fontWeight={'bold'}
                            color="white"
                            fontSize={{ base: '2xl', md: '6xl' }}
                            fontStyle="italic"
                        >
                            Fitness for life
                        </Text>
                    </Flex>
                </Box>
                <Box id="hello">
                    <NextImage
                        src="/vision-banner.jpg"
                        objectFit="cover"
                        height={isMobileView ? 1000 : 1000}
                        width={1600}
                        layout="responsive"
                    />
                </Box>
            </Box>

            <Container maxW="4xl" mt="5">
                <Flex
                    id="first"
                    justifyContent={'center'}
                    {...(!isMobileView && {
                        h: '70vh',
                    })}
                    mt={{ base: '20px', md: 0 }}
                >
                    <Box
                        id="box1"
                        width="full"
                        display="flex"
                        flexDirection={'column'}
                        gridRowGap="4"
                    >
                        <Flex
                            border="2px solid black"
                            borderRadius={'md'}
                            p="4"
                            gridColumnGap={2}
                            flexDirection={{ base: 'column', md: 'row' }}
                        >
                            {isMobileView && (
                                <Box
                                    width="full"
                                    display={'flex'}
                                    justifyContent="center"
                                >
                                    <Image
                                        boxSize="100px"
                                        objectFit="cover"
                                        src="/quality.png"
                                        alt="Dan Abramov"
                                    />
                                </Box>
                            )}

                            {!isMobileView && (
                                <Image
                                    boxSize="100px"
                                    objectFit="cover"
                                    src="/quality.png"
                                    alt="Dan Abramov"
                                />
                            )}

                            <VStack>
                                <Text
                                    width="full"
                                    textAlign={'start'}
                                    fontWeight="bold"
                                >
                                    Quality
                                </Text>
                                <Text
                                    {...(isMobileView && {
                                        textAlign: 'justify',
                                    })}
                                >
                                    Everytime we source the raw material for any
                                    bulk manufacturing, we are offered with
                                    choices of cheaper materials which sounds
                                    lucrative in terms of cheaper end products,
                                    but we firmly believe that it will not
                                    provide the user experience and satisfaction
                                    which we strive for. Hence we invest into
                                    products which ensure an everlasting user
                                    satisfaction.{' '}
                                </Text>
                            </VStack>
                        </Flex>
                        <Flex
                            border="2px solid black"
                            borderRadius={'md'}
                            p="4"
                            gridColumnGap={2}
                            flexDirection={{ base: 'column', md: 'row' }}
                        >
                            {isMobileView && (
                                <Box
                                    width="full"
                                    display={'flex'}
                                    justifyContent="center"
                                >
                                    <Image
                                        boxSize="100px"
                                        objectFit="cover"
                                        src="/transparency.png"
                                        alt="Dan Abramov"
                                    />
                                </Box>
                            )}

                            {!isMobileView && (
                                <Image
                                    boxSize="100px"
                                    objectFit="cover"
                                    src="/transparency.png"
                                    alt="Dan Abramov"
                                />
                            )}

                            <VStack>
                                <Text
                                    width="full"
                                    textAlign={'start'}
                                    fontWeight="bold"
                                >
                                    Quality
                                </Text>
                                <Text
                                    {...(isMobileView && {
                                        textAlign: 'justify',
                                    })}
                                >
                                    Though it may sound detrimental to any
                                    business, but we believe that client has the
                                    fair right to know how a particular product
                                    is priced with all the costs that have gone
                                    into it. This not only ensures in enabling
                                    the end user to make a more informed
                                    decision with respect to a particular
                                    purchase but also set in realistic
                                    expectation with the product.
                                </Text>
                            </VStack>
                        </Flex>
                        <Flex
                            border="2px solid black"
                            borderRadius={'md'}
                            p="4"
                            gridColumnGap={2}
                            flexDirection={{ base: 'column', md: 'row' }}
                        >
                            {isMobileView && (
                                <Box
                                    width="full"
                                    display={'flex'}
                                    justifyContent="center"
                                >
                                    <Image
                                        boxSize="100px"
                                        objectFit="cover"
                                        src="/valuetoclient.png"
                                        alt="Dan Abramov"
                                    />
                                </Box>
                            )}

                            {!isMobileView && (
                                <Image
                                    boxSize="100px"
                                    objectFit="cover"
                                    src="/valuetoclient.png"
                                    alt="Dan Abramov"
                                />
                            )}

                            <VStack>
                                <Text
                                    width="full"
                                    textAlign={'start'}
                                    fontWeight="bold"
                                >
                                    Value to Clients
                                </Text>
                                <Text
                                    {...(isMobileView && {
                                        textAlign: 'justify',
                                    })}
                                >
                                    The whole idea behind bringing CombatFit to
                                    life is to make sure that we thoroughly
                                    understand the requirements and needs of the
                                    clients and then give our best to deliver
                                    onto that expectation. The aim is to provide
                                    the products at the convenience of doorstep
                                    and at a price which is unbeatable.
                                </Text>
                            </VStack>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
            <Footer1 />
        </Flex>
    );
};

export default ContactUs;
