import React from 'react';
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
import Header from '../components/Header';
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import NextImage from 'next/image';
import Footer1 from '../components/Footer1';

const Clothing = () => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const { isOpen, onOpen, onClose } = useDisclosure();

    const customizedOrders = [
        {
            day: 'Day 1',
            imageIcon:
                'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/bulb.png?alt=media&token=5c6297fd-052b-4a6d-997f-594709409fa0',
            description: 'Share your Requirement',
        },
        {
            day: 'Day 2-4',
            imageIcon:
                'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/bulk.png?alt=media&token=0d6070b4-629f-42dc-a4b3-ffb437d263f7',
            description: 'Feasibility Survey for Raw Material Availability',
        },
        {
            day: 'Day 5',
            imageIcon:
                'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/design.png?alt=media&token=9455ac4b-4318-4868-8483-82840f1139b8',
            description: 'Price and Timeline Confirmation',
        },
        {
            day: 'Day 6-7',
            imageIcon:
                'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/feasibility.png?alt=media&token=5aeb033c-9751-420d-bf51-aa226e094680',
            description: 'Making of Sample and Approval',
        },
        {
            day: 'Day 8-20',
            imageIcon:
                'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/production.png?alt=media&token=80031c81-5447-42a2-b701-6f072dee542d',
            description: 'Bulk Production and Dispatch',
        },
    ];

    const soveinierOrder = [
        {
            day: 'Day 1',
            imageIcon:
                'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/bulb.png?alt=media&token=5c6297fd-052b-4a6d-997f-594709409fa0',
            description: 'Share your Requirement',
        },
        {
            day: 'Day 2-4',
            imageIcon:
                'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/feasibility.png?alt=media&token=5aeb033c-9751-420d-bf51-aa226e094680',
            description: 'We Create the Digital Design and Share',
        },
        {
            day: 'Day 4-6',
            imageIcon:
                'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/design.png?alt=media&token=9455ac4b-4318-4868-8483-82840f1139b8',
            description: 'Making of Sample and Approval',
        },
        {
            day: 'Day 1',
            imageIcon:
                'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/bulk.png?alt=media&token=0d6070b4-629f-42dc-a4b3-ffb437d263f7',
            description: 'Bulk Production and Dispatch',
        },
    ];

    return (
        <Flex flexDirection={'column'}>
            {!isMobileView && <Header />}
            <Box
                position={'relative'}
                {...(isMobileView && {
                    mb: '16',
                })}
            >
                <Box
                    id="hello"
                    position={'relative'}
                    {...(!isMobileView && {
                        top: '56px',
                    })}
                    bgImage={
                        'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/banners.png?alt=media&token=0fcb3ad3-ad34-4c26-a325-9f54ada9f8a4'
                    }
                    height={isMobileView ? '150px' : '500px'}
                    width={'full'}
                    bgRepeat={'no-repeat'}
                    bgSize="100%"
                ></Box>
            </Box>
            <Container
                maxW="5xl"
                position={'relative'}
                {...(!isMobileView && {
                    mt: '60px',
                })}
            >
                <Text textAlign={'center'} my="16px" fontWeight={'bold'}>
                    CUSTOMIZED CLOTHING ORDERS
                </Text>
                {customizedOrders?.map((dayDescription, index) => {
                    return (
                        <Flex
                            flexDirection={'row'}
                            mb="40px"
                            justifyContent={'space-around'}
                            alignItems="center"
                            key={index}
                        >
                            <Text
                                width={'100px'}
                                textAlign="center"
                                bgColor={'orange'}
                                color="white"
                            >
                                {dayDescription?.day}
                            </Text>
                            <NextImage
                                src={dayDescription?.imageIcon}
                                width={'80px'}
                                height="50px"
                                objectFit="contain"
                            />
                            <Text width={'150px'}>
                                {dayDescription?.description}
                            </Text>
                        </Flex>
                    );
                })}

                <Text textAlign={'center'} my="80px" fontWeight={'bold'}>
                    CUSTOMIZED SOUVENIRS ORDERS
                </Text>

                {soveinierOrder?.map((dayDescription, index) => {
                    return (
                        <Flex
                            flexDirection={'row'}
                            mb="40px"
                            justifyContent={'space-around'}
                            alignItems="center"
                            key={index}
                        >
                            <Text
                                width={'100px'}
                                textAlign="center"
                                bgColor={'orange'}
                            >
                                {dayDescription?.day}
                            </Text>
                            <NextImage
                                src={dayDescription?.imageIcon}
                                width={'80px'}
                                height="50px"
                                objectFit="contain"
                            />
                            <Text width={'150px'}>
                                {dayDescription?.description}
                            </Text>
                        </Flex>
                    );
                })}
            </Container>
            <Footer1 />
        </Flex>
    );
};

export default Clothing;
