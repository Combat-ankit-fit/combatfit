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
        // { item: 'Tshirts', path: '/all-items' },
        // { item: 'Sweatshirts', path: '/all-items' },
        // { item: 'Trousers', path: '/all-items' },
        // { item: 'Shorts', path: '/all-items' },
        // { item: 'Customized Clothing', path: '/customized-clothing' },
        { item: 'All Items', path: '/all-items' },
    ];
    const souvenirs = [
        { item: 'Coffee Mugs', path: '/coffee-mugs' },
        { item: 'Beer Mugs', path: '/beer' },
        { item: 'Whisky Glasses', path: '/' },
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
                            >
                                <NextImage
                                    src="/logo.png"
                                    width={'80px'}
                                    height="30px"
                                />
                            </Box>
                        )}
                        <Box
                            position={'relative'}
                            display="flex"
                            cursor={'pointer'}
                        >
                            <Text
                                position={'absolute'}
                                color="white"
                                marginLeft={4}
                                fontSize="sm"
                            >
                                {cartCount}
                            </Text>
                            <AiOutlineShoppingCart
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
                                            {souvenir?.item}
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
                            Vision
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
