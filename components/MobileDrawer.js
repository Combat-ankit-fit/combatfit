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

const MobileDrawer = ({
    breadCrumbsPath,
    position = 'fixed',
    bgColor = 'black',
    isBreadCrumRequired = true,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const clothingItems = [
        { item: 'Tshirts', path: '/tshirts' },
        { item: 'Shirts', path: '/' },
        { item: 'Sweatshirts', path: '/' },
        { item: 'Trousers', path: '/trousers' },
        { item: 'Shorts', path: '/' },
        { item: 'Customized clothings', path: '/customized-clothing' },
        { item: 'Casual Tshirts', path: '/casual-tshirts' },
    ];
    const souvenirs = [
        { item: 'Coffee Mugs', path: '/coffee-mugs' },
        { item: 'Beer Mugs', path: '/beer' },
        { item: 'Whisky Glasses', path: '/' },
        { item: 'Posters', path: '/posters' },
        { item: 'Keyrings', path: '/' },
        { item: 'Notepad', path: '/' },
    ];
    const router = useRouter();

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
                    <HamburgerIcon
                        color={'white'}
                        boxSize={6}
                        onClick={() => {
                            isOpen ? onClose() : onOpen();
                        }}
                    />
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
                    bgColor="#343434"
                    h={isOpen ? 'full' : '0px'}
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
                        <Text color="white">Services</Text>
                    </Box>
                    <Box pb="4" display={'flex'}>
                        <Text color="white">Military Stories</Text>
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
                            ContactUs
                        </Text>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default MobileDrawer;
