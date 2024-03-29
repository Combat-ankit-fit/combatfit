import {
    Box,
    Flex,
    Text,
    Divider,
    Radio,
    RadioGroup,
    Stack,
} from '@chakra-ui/react';

import React from 'react';
import { ItemContext } from '../context/ItemProvider';

const DesktopDrawer = ({ presentItem }) => {
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
    const [sliderAmout, setSliderAmount] = React.useState(50);
    const items = [...Array(40)];

    const ItemsFuncContext = React.useContext(ItemContext);
    const {
        name = '',
        selectedItems = [],
        getItemsOnFitBasis,
        getItemsOnSizeBasis,
        getItemsOnColorBasis,
    } = ItemsFuncContext;

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
                <Flex flexDirection={'column'}>
                    <Text color="white" mb="4">
                        Size
                    </Text>
                    <RadioGroup
                        onChange={(size) => {
                            setSelectedSize(size);
                            setSelectedFit('');
                            setSelectedColor('');
                            getItemsOnSizeBasis(size);
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
                        onChange={(fit) => {
                            setSelectedFit(fit);
                            setSelectedColor('');
                            setSelectedSize('');
                            getItemsOnFitBasis(fit);
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
            </Flex>
        </Box>
    );
};

export default DesktopDrawer;
