import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';
import {
    Box,
    Flex,
    useBreakpoint,
    useDisclosure,
    Text,
    Container,
    Grid,
    SimpleGrid,
    Button,
    useBreakpointValue,
    Divider,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../components/Layout';
import { coffeeMugs } from '../utils/mugs';
import { posters } from '../utils/posters';
import { trousers } from '../utils/trousers';
import { sweatShirts } from '../utils/sweatshirts';
import { casualTshirts } from '../utils/casual-tshirts';
import NextImage from 'next/image';

const MobileViewDetail = ({ itemCategory = '', itemId = '' }) => {
    const [synonumousImages, setSynonymousImages] = React.useState([]);
    const [centralImage, setCentralImage] = React.useState(itemId);
    const [imageInfo, setImageInfo] = React.useState({});
    const [allImages, setAllImages] = React.useState([]);
    React.useEffect(() => {
        if (itemCategory === 'coffee-mugs') {
            const specificItem = coffeeMugs?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });

            const arr = [...specificItem?.extraImages, centralImage];

            setAllImages([...arr]);
            // setAllImages([centralImage, ...specificItem?.extraImages]);
        }

        if (itemCategory === 'posters') {
            const specificItem = posters?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });

            const arr = [...specificItem?.extraImages, centralImage];

            setAllImages([...arr]);

            // setAllImages([centralImage, ...specificItem?.extraImages]);
        }
        if (itemCategory === 'trousers') {
            const specificItem = trousers?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });

            const arr = [...specificItem?.extraImages, centralImage];

            setAllImages([...arr]);
        }
        if (itemCategory === 'sweatshirts') {
            const specificItem = sweatShirts?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });

            const arr = [...specificItem?.extraImages, centralImage];

            setAllImages([...arr]);
            // setAllImages([centralImage, ...specificItem?.extraImages]);
        }
        if (itemCategory === 'casual-tshirts') {
            const specificItem = casualTshirts?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });

            const arr = [...specificItem?.extraImages, centralImage];

            setAllImages([...arr]);
            // setAllImages([centralImage, ...specificItem?.extraImages]);
        }
    }, []);

    const getHeaderInfo = () => {
        if (itemCategory === 'trousers') {
            return 'Military Trousers';
        }
    };

    return (
        <Layout
            sidebarRequired={false}
            maxW="9xl"
            breadCrumbsRequired={true}
            breadCrumbsPath={itemCategory}
            recurringItems={false}
        >
            <Text fontWeight={'bold'} mb="2">
                {getHeaderInfo()}
            </Text>
            <Box
                w="full"
                id="main__box"
                border="1px solid black"
                sx={{
                    '.carousel-status': {
                        display: 'none',
                    },
                    '.control-dots': {
                        marginTop: '24px',
                    },
                }}
            >
                <Carousel showThumbs={false}>
                    {allImages?.map((image, index) => {
                        return (
                            <NextImage
                                id={index}
                                key={index}
                                src={`/${image}.jpg`}
                                height={350}
                                width={250}
                                objectFit="contain"
                            />
                        );
                    })}
                </Carousel>
            </Box>
            <Text mt="4">{imageInfo?.alt}</Text>
            <Text>Rs. {imageInfo?.price}/-(inclusive of all taxes)</Text>
            <Button
                colorScheme={'primary'}
                bgColor="orange"
                width={'full'}
                mb="4"
            >
                Add to Cart
            </Button>
            <Button colorScheme={'primary'} bgColor="orange" width={'full'}>
                Buy now
            </Button>
        </Layout>
    );
};

export default MobileViewDetail;
