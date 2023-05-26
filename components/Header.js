import {
    Box,
    Flex,
    List,
    Text,
    Container,
    useRadio,
    useBreakpointValue,
    InputGroup,
    InputRightElement,
    Input,
    color,
    Button,
} from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';
import { useShoppingCart } from '../context/CartProvider';
import styled from 'styled-components';
import router, { useRouter } from 'next/router';
import NextImage from 'next/image';
import { CalendarIcon } from '@chakra-ui/icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const WhiteLink = styled.a`
    color: white;
`;

const Header = ({ breadCrumbsRequired, breadCrumbsPath }) => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const router = useRouter();
    const { cartCount = 0 } = useShoppingCart();
    return (
        <Container
            maxW={'full'}
            height="56px"
            bgColor={'black'}
            position={'fixed'}
            maxH="60px"
            zIndex={'modal'}
            px="0"
        >
            <Flex
                flexDirection={'row'}
                justifyContent="space-between"
                h="full"
                alignItems={'center'}
                px="4"
            >
                <Box
                    onClick={() => {
                        router.push('/');
                    }}
                    cursor="pointer"
                >
                    <NextImage src="/logo.png" height="30px" width="110px" />
                </Box>

                <Flex
                    justifyContent={'space-around'}
                    w="2xl"
                    gridColumnGap={6}
                    alignItems="center"
                >
                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        Home
                    </Text>
                    <Box width="20%" bgColor={'black'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                backgroundColor="black !important"
                                color="white"
                            >
                                Clothing
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={() => {
                                        router?.push({
                                            pathname: '/clothing-category',
                                            query: {
                                                item: 'active',
                                            },
                                        });
                                    }}
                                >
                                    Active
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        router?.push({
                                            pathname: '/clothing-category',
                                            query: {
                                                item: 'tactical',
                                            },
                                        });
                                    }}
                                >
                                    Tactical
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        router?.push({
                                            pathname: '/clothing-category',
                                            query: {
                                                item: 'inspire',
                                            },
                                        });
                                    }}
                                >
                                    Inspire
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        router?.push({
                                            pathname: '/clothing-category',
                                            query: {
                                                item: 'winter',
                                            },
                                        });
                                    }}
                                >
                                    Winter
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        router?.push({
                                            pathname: '/clothing-category',
                                            query: {
                                                item: 'customized',
                                            },
                                        });
                                    }}
                                >
                                    Customized
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box width="20%" bgColor={'black'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                backgroundColor="black !important"
                                color="white"
                            >
                                Souvenirs
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={() => {
                                        router?.push('/items/coffee-mugs');
                                    }}
                                >
                                    Coffee Mugs
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        router?.push('/items/beer');
                                    }}
                                >
                                    Beer Mugs
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        router?.push('/items/posters');
                                    }}
                                >
                                    Posters
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        router?.push('/items/whiskey');
                                    }}
                                >
                                    Whisky Glasses
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>

                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/vision');
                        }}
                    >
                        Vision
                    </Text>
                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/contact-us');
                        }}
                        whiteSpace="pre"
                    >
                        Contact Us
                    </Text>

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
                </Flex>
            </Flex>
            {breadCrumbsRequired && (
                <Box
                    id="part"
                    height={'40px'}
                    bgColor="orange"
                    w="full"
                    display={'flex'}
                    px="4"
                    alignItems={'center'}
                >
                    <Text
                        color="white"
                        onClick={() => {
                            router.push('/');
                        }}
                        sx={{
                            _hover: {
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        Home
                    </Text>
                    <Text color="white">&gt; {breadCrumbsPath}</Text>
                </Box>
            )}
        </Container>
    );
};

export default Header;
