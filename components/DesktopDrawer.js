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

    return (
        <Box
            bgColor={'black'}
            id="desktop_drawer"
            w="256px"
            height="100vh"
            pt="10"
            as="nav"
            position={'fixed'}
        >
            <Flex flexDirection={'column'} w="256px" px="3">
                <Divider orientation="horizontal" mb="8" />
                <Text color={'white'}>Filter your search</Text>
                <SliderControl />
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
            </Flex>
        </Box>
    );
};

export default DesktopDrawer;
