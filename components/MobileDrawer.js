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
} from '@chakra-ui/react';
import React from 'react';
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import router, { useRouter } from 'next/router';
import NextImage from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useShoppingCart } from '../context/CartProvider';

const MobileDrawer = ({
    breadCrumbsPath,
    position = 'fixed',
    bgColor = 'black',
    isBreadCrumRequired = true,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const clothingItems = [
        { item: 'Active', path: '/all-items' },
        { item: 'Tactical', path: '/all-items' },
        { item: 'Inspire', path: '/all-items' },
        { item: 'Winter', path: '/all-items' },
        { item: 'Customized', path: '/all-items' },
    ];
    const souvenirs = [
        { item: 'Coffee Mugs', path: '/coffee-mugs' },
        { item: 'Beer Mugs', path: '/beer' },
        { item: 'Whisky Glasses', path: '/whiskey' },
        { item: 'Posters', path: '/posters' },
    ];
    const router = useRouter();
    const displayLogo =
        router?.pathname !== '/vision' && router?.pathname !== '/contact-us';

    const { cartCount = 0 } = useShoppingCart();

    return (
        <Box>
            <Box
                p="4"
                position={position}
                id="icon"
                zIndex={'modal'}
                w="full"
                bgColor={bgColor}
            >
                {!isOpen && (
                    <Box display={'flex'}>
                        <HamburgerIcon
                            color={'white'}
                            boxSize={6}
                            onClick={() => {
                                isOpen ? onClose() : onOpen();
                            }}
                        />
                        {displayLogo && (
                            <Box
                                display={'flex'}
                                flex="1"
                                justifyContent={'center'}
                                onClick={() => {
                                    router.push('/');
                                }}
                            >
                                <NextImage
                                    src="https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/combatfit%20logo.png?alt=media&token=9a9149de-66fd-4b48-b70c-d9cbce87ddbb"
                                    height="24px"
                                    width="100px"
                                    objectFit="contain"
                                />
                            </Box>
                        )}
                        <Box
                            position={'relative'}
                            display="flex"
                            cursor={'pointer'}
                            sx={{
                                svg: {
                                    mt: 1,
                                },
                            }}
                            maxWidth="sm"
                        >
                            <Text
                                position={'absolute'}
                                color="white"
                                marginLeft={'20px'}
                                fontSize="sm"
                            >
                                {cartCount}
                            </Text>
                            <AiOutlineShoppingCart
                                size="20px"
                                color="white"
                                onClick={() => {
                                    router.push('/cart');
                                }}
                            />
                        </Box>
                    </Box>
                )}
            </Box>

            {isBreadCrumRequired && (
                <Box
                    w="full"
                    bgColor="orange"
                    height={'30px'}
                    position="fixed"
                    top="58px"
                    display={!isOpen ? 'flex' : 'none'}
                    px="4"
                    alignItems={'center'}
                    zIndex="modal"
                >
                    <Text
                        color="white"
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        Home
                    </Text>
                    <Text color="white">&gt; {breadCrumbsPath}</Text>
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

                    <Box py="4" display={'flex'} flexDirection="column">
                        <Text
                            color="white"
                            onClick={() => {
                                router.push('/');
                            }}
                            mb="4"
                        >
                            Home
                        </Text>
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

                                                if (
                                                    clothingItem?.item ===
                                                    'All Items'
                                                ) {
                                                    router.push(
                                                        `/items/${clothingItem?.path}`
                                                    );
                                                }

                                                if (
                                                    clothingItem?.item ===
                                                    'Active'
                                                ) {
                                                    router?.push({
                                                        pathname:
                                                            '/clothing-category',
                                                        query: {
                                                            item: 'active',
                                                        },
                                                    });
                                                }
                                                if (
                                                    clothingItem?.item ===
                                                    'Tactical'
                                                ) {
                                                    console.log('Clicked this');
                                                    router?.push({
                                                        pathname:
                                                            '/clothing-category',
                                                        query: {
                                                            item: 'tactical',
                                                        },
                                                    });
                                                }
                                                if (
                                                    clothingItem?.item ===
                                                    'Inspire'
                                                ) {
                                                    router?.push({
                                                        pathname:
                                                            '/clothing-category',
                                                        query: {
                                                            item: 'inspire',
                                                        },
                                                    });
                                                }
                                                if (
                                                    clothingItem?.item ===
                                                    'Winter'
                                                ) {
                                                    router?.push({
                                                        pathname:
                                                            '/clothing-category',
                                                        query: {
                                                            item: 'winter',
                                                        },
                                                    });
                                                }
                                                if (
                                                    clothingItem?.item ===
                                                    'Customized'
                                                ) {
                                                    router?.push({
                                                        pathname:
                                                            '/clothing-category',
                                                        query: {
                                                            item: 'customized',
                                                        },
                                                    });
                                                }
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
                   

                    <Box pb="4" display={'flex'}>
                        <Text
                            color="white"
                            onClick={() => {
                                router.push('/vision');
                            }}
                        >
                            About Us
                        </Text>
                    </Box>
                    <Box pb="4" display={'flex'}>
                        <Text
                            color="white"
                            onClick={() => {
                                router.push('/contact-us');
                            }}
                        >
                            Contact Us
                        </Text>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default MobileDrawer;
