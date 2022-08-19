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
    Stack,
} from '@chakra-ui/react';
import SliderControl from './SliderControl';
import React from 'react';
import { ArrowDownIcon } from '@chakra-ui/icon';

const DesktopDrawer = () => {
    const sizeItems = ['small', 'Medium', 'Large', 'XL', 'XXL'];
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectSize, setSelectedSize] = React.useState('');
    const fit = ['Regular', 'Extra Slim', 'Boxy', 'Super slim', 'slim'];
    const color = ['Black', 'White', 'Green', 'Olive Green', 'Grey'];
    const sleeves = [
        'Half Sleeves',
        'Full Sleeves',
        '3/4 Sleeves',
        'Roll up Sleeves',
        'Short Sleeves',
    ];
    const neck = ['Round neck', 'Regular', 'Chinese collor', 'V neck', 'Hood'];
    const availablity = ['Available', 'Include out of stock'];
    const [selectedFit, setSelectedFit] = React.useState(false);
    const [selectColor, setSelectedColor] = React.useState(false);
    const [selectSleeves, setSelectSleeves] = React.useState(false);
    const [selectNeck, setselectNeck] = React.useState(false);
    const [selectAvailability, setSelectAvailability] = React.useState(false);
    const items = [...Array(40)];

    return (
        <Box
            bgColor={'black'}
            id="desktop_drawer"
            w="256px"
            pt="10"
            height="auto"
            position={'relative'}
        >
            <Flex
                flexDirection={'column'}
                w="256px"
                px="3"
                height={'inherit'}
                gridRowGap={8}
            >
                <Divider orientation="horizontal" mb="8" />
                <Text color={'white'}>Filter your search</Text>
                <SliderControl label="Price" />
                <Flex flexDirection={'column'}>
                    <Text color="white" mb="4">
                        Size
                    </Text>
                    <RadioGroup
                        onChange={(size) => {
                            setSelectedSize(size);
                        }}
                        value={selectSize}
                    >
                        <Stack
                            sx={{
                                'label span': {
                                    color: 'white',
                                },
                            }}
                        >
                            {sizeItems.map((item) => {
                                return (
                                    <Radio key={item} value={item}>
                                        {item}
                                    </Radio>
                                );
                            })}
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Flex flexDirection={'column'}>
                    <Text color="white" mb="4">
                        Fit
                    </Text>
                    <RadioGroup
                        onChange={(size) => {
                            setSelectedFit(size);
                        }}
                        value={selectedFit}
                    >
                        <Stack
                            sx={{
                                'label span': {
                                    color: 'white',
                                },
                            }}
                        >
                            {fit.map((item) => {
                                return (
                                    <Radio key={item} value={item}>
                                        {item}
                                    </Radio>
                                );
                            })}
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Flex flexDirection={'column'}>
                    <Text color="white" mb="4">
                        Color
                    </Text>
                    <RadioGroup
                        onChange={(size) => {
                            setSelectedColor(size);
                        }}
                        value={selectColor}
                    >
                        <Stack
                            sx={{
                                'label span': {
                                    color: 'white',
                                },
                            }}
                        >
                            {color.map((item) => {
                                return (
                                    <Radio key={item} value={item}>
                                        {item}
                                    </Radio>
                                );
                            })}
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Flex flexDirection={'column'}>
                    <Text color="white" mb="4">
                        Sleeves
                    </Text>
                    <RadioGroup
                        onChange={(size) => {
                            setSelectSleeves(size);
                        }}
                        value={selectSleeves}
                    >
                        <Stack
                            sx={{
                                'label span': {
                                    color: 'white',
                                },
                            }}
                        >
                            {sleeves.map((item) => {
                                return (
                                    <Radio key={item} value={item}>
                                        {item}
                                    </Radio>
                                );
                            })}
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Flex flexDirection={'column'}>
                    <Text color="white" mb="4">
                        Neck
                    </Text>
                    <RadioGroup
                        onChange={(size) => {
                            setselectNeck(size);
                        }}
                        value={selectNeck}
                    >
                        <Stack
                            sx={{
                                'label span': {
                                    color: 'white',
                                },
                            }}
                        >
                            {neck.map((item) => {
                                return (
                                    <Radio key={item} value={item}>
                                        {item}
                                    </Radio>
                                );
                            })}
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Flex flexDirection={'column'}>
                    <Text color="white" mb="4">
                        Availability
                    </Text>
                    <RadioGroup
                        onChange={(size) => {
                            setSelectAvailability(size);
                        }}
                        value={selectAvailability}
                    >
                        <Stack
                            sx={{
                                'label span': {
                                    color: 'white',
                                },
                            }}
                        >
                            {availablity.map((item) => {
                                return (
                                    <Radio key={item} value={item}>
                                        {item}
                                    </Radio>
                                );
                            })}
                        </Stack>
                    </RadioGroup>
                </Flex>
            </Flex>
        </Box>
    );
};

export default DesktopDrawer;
