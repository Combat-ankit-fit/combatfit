import {
    Box,
    Flex,
    List,
    Text,
    Slider,
    Divider,
    MenuList,
    MenuItem,
    Menu,
    MenuButton,
    Radio,
    RadioGroup,
} from '@chakra-ui/react';
import SliderControl from './SliderControl';
import React from 'react';
import { ArrowDownIcon } from '@chakra-ui/icon';

const DesktopDrawer = () => {
    const sizeItems = ['small', 'Medium', 'Large', 'XL', 'XXL'];
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectSize, setSelectedSize] = React.useState('');
    const fit = ['Regular', 'Extra Slim', 'Boxy', 'Super slim', 'slim'];
    const [selectedFit, setSelectedFit] = React.useState(false);

    return (
        <Box
            bgColor={'black'}
            id="desktop_drawer"
            w="256px"
            height="150vh"
            pt="10"
            as="nav"
            position={'fixed'}
        >
            <Flex flexDirection={'column'} w="256px" px="3">
                <Divider orientation="horizontal" mb="8" />
                <Text color={'white'}>Filter your search</Text>
                <SliderControl />
                <Box id="menu_1" mb="300px">
                    <Menu
                        isOpen={true}
                        isLazy
                        closeOnSelect={false}
                        sx={{
                            border: 'none',
                            _hover: {
                                bgColor: 'none',
                            },
                        }}
                    >
                        <MenuButton
                            alignSelf="flex-start"
                            color={'white'}
                            rightIcon={<ArrowDownIcon />}
                        >
                            Sizes
                        </MenuButton>
                        <MenuList
                            id="list1"
                            w="10"
                            bgColor={'black'}
                            sx={{
                                border: 'none',
                            }}
                        >
                            {sizeItems.map((item) => {
                                return (
                                    <React.Fragment>
                                        <RadioGroup
                                            onChange={(size) => {
                                                setSelectedSize(size);
                                            }}
                                            value={selectSize}
                                        >
                                            <Radio value={item}>
                                                <MenuItem
                                                    color={'white'}
                                                    sx={{
                                                        _hover: {
                                                            bgColor: 'black',
                                                        },
                                                        _focus: {
                                                            bgColor: 'black',
                                                        },
                                                    }}
                                                >
                                                    {item}
                                                </MenuItem>
                                            </Radio>
                                        </RadioGroup>
                                    </React.Fragment>
                                );
                            })}
                        </MenuList>
                    </Menu>
                </Box>
                <Box id="menu_1" mb="300px">
                    <Menu
                        isOpen={true}
                        isLazy
                        closeOnSelect={false}
                        sx={{
                            border: 'none',
                            _hover: {
                                bgColor: 'none',
                            },
                        }}
                    >
                        <MenuButton
                            alignSelf="flex-start"
                            color={'white'}
                            rightIcon={<ArrowDownIcon />}
                        >
                            Sizes
                        </MenuButton>
                        <MenuList
                            id="list1"
                            w="10"
                            bgColor={'black'}
                            sx={{
                                border: 'none',
                            }}
                        >
                            {sizeItems.map((item) => {
                                return (
                                    <React.Fragment>
                                        <RadioGroup
                                            onChange={(size) => {
                                                setSelectedSize(size);
                                            }}
                                            value={selectSize}
                                        >
                                            <Radio value={item}>
                                                <MenuItem
                                                    color={'white'}
                                                    sx={{
                                                        _hover: {
                                                            bgColor: 'black',
                                                        },
                                                        _focus: {
                                                            bgColor: 'black',
                                                        },
                                                    }}
                                                >
                                                    {item}
                                                </MenuItem>
                                            </Radio>
                                        </RadioGroup>
                                    </React.Fragment>
                                );
                            })}
                        </MenuList>
                    </Menu>
                </Box>
                <Box id="menu_1" mb="300px">
                    <Menu
                        isOpen={true}
                        isLazy
                        closeOnSelect={false}
                        sx={{
                            border: 'none',
                            _hover: {
                                bgColor: 'none',
                            },
                        }}
                    >
                        <MenuButton
                            alignSelf="flex-start"
                            color={'white'}
                            rightIcon={<ArrowDownIcon />}
                        >
                            Sizes
                        </MenuButton>
                        <MenuList
                            id="list1"
                            w="10"
                            bgColor={'black'}
                            sx={{
                                border: 'none',
                            }}
                        >
                            {sizeItems.map((item) => {
                                return (
                                    <React.Fragment>
                                        <RadioGroup
                                            onChange={(size) => {
                                                setSelectedSize(size);
                                            }}
                                            value={selectSize}
                                        >
                                            <Radio value={item}>
                                                <MenuItem
                                                    color={'white'}
                                                    sx={{
                                                        _hover: {
                                                            bgColor: 'black',
                                                        },
                                                        _focus: {
                                                            bgColor: 'black',
                                                        },
                                                    }}
                                                >
                                                    {item}
                                                </MenuItem>
                                            </Radio>
                                        </RadioGroup>
                                    </React.Fragment>
                                );
                            })}
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Box>
    );
};

export default DesktopDrawer;
