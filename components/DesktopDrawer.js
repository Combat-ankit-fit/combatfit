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
    const [selectedFit, setSelectedFit] = React.useState(false);
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
                gridRowGap={4}
            >
                <Divider orientation="horizontal" mb="8" />
                <Text color={'white'}>Filter your search</Text>
                <SliderControl />
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
                                return <Radio value={item}>{item}</Radio>;
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
                                return <Radio value={item}>{item}</Radio>;
                            })}
                        </Stack>
                    </RadioGroup>
                </Flex>
            </Flex>
        </Box>
    );
};

export default DesktopDrawer;
