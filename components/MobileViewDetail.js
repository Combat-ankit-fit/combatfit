import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';
import {
    Box,
    Text,
    Button,
    VStack,
    HStack,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../components/Layout';

import NextImage from 'next/image';
import useSWRImmutable from 'swr/immutable';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import axios from 'axios';
import getStripe from '../getStripe';
import { useShoppingCart } from '../context/CartProvider';

const MobileViewDetail = ({ itemCategory = '', itemId = '' }) => {
    const [synonumousImages, setSynonymousImages] = React.useState([]);
    const [centralImage, setCentralImage] = React.useState(itemId);
    const [imageInfo, setImageInfo] = React.useState({});
    const [allImages, setAllImages] = React.useState([]);
    const router = useRouter();
    const { addItem } = useShoppingCart();

    const { data: beerData } = useSWRImmutable('/api/get-items?id=beer');
    const { data: postersData } = useSWRImmutable('/api/get-items?id=posters');
    const { data: notespadData } = useSWRImmutable('/api/get-items?id=notepad');
    const { data: clothingData } = useSWRImmutable(
        '/api/get-items?id=clothing'
    );

    const { data: coffeeVaibhav } = useSWRImmutable(
        '/api/get-items?id=coffee-mugs'
    );

    const { data: whiskeyItems } = useSWRImmutable('/api/get-items?id=whiskey');

    const [itemQuantity, setItemQuantity] = React.useState(1);

    const handleOnAddToCart = () => {
        addItem(imageInfo, itemQuantity);
    };

    React.useEffect(() => {
        if (
            itemCategory !== 'posters' &&
            itemCategory !== 'beer' &&
            itemCategory !== 'notepads' &&
            itemCategory !== 'all-items' &&
            itemCategory !== 'coffee-mugs'
        ) {
            setCentralImage(itemId);
        }
        if (itemCategory === 'coffee-mugs' && coffeeVaibhav) {
            const specificItem =
                coffeeVaibhav?.filter(
                    (item) => item?.identifier === itemId
                )[0] || {};

            console.log('Specific item now on mobile is:-', specificItem);

            // setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            const arr = [...specificItem?.extraImages];
            setAllImages([...arr]);
        }

        if (itemCategory === 'beer' && beerData) {
            const specificItem =
                beerData?.filter((item) => item?.identifier === itemId)[0] ||
                {};

            // setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            const arr = [...specificItem?.extraImages];

            setAllImages([...arr]);
        }

        if (itemCategory === 'notepads' && notespadData) {
            const specificItem =
                notespadData?.filter(
                    (item) => item?.identifier === itemId
                )[0] || {};

            // setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            const arr = [...specificItem?.extraImages];

            setAllImages([...arr]);
        }

        if (itemCategory === 'posters' && postersData) {
            const specificItem =
                postersData?.filter((item) => item?.identifier === itemId)[0] ||
                {};

            console.log('Specific item in mobile is:-', specificItem);

            // setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            const arr = [...specificItem?.extraImages];

            setAllImages([...arr]);
        }

        if (itemCategory === 'all-items' && clothingData) {
            const specificItem = clothingData?.filter(
                (item) => item?.identifier === itemId
            )[0];

            // setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            const arr = [...specificItem?.extraImages];
            setAllImages([...arr]);
        }
        if (itemCategory === 'whiskey' && whiskeyItems) {
            const specificItem =
                whiskeyItems?.filter(
                    (item) => item?.identifier === itemId
                )[0] || {};

            console.log('Specific item in mobile is:-', specificItem);

            // setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            const arr = [...specificItem?.extraImages];

            setAllImages([...arr]);
        }
    }, [
        itemCategory,
        itemId,
        clothingData,
        postersData,
        notespadData,
        beerData,
        coffeeVaibhav,
        whiskeyItems,
    ]);

    const getHeaderInfo = () => {
        if (itemCategory === 'trousers') {
            return 'Military Trousers';
        }
    };

    const redirectToCheckout = async () => {
        const {
            data: { id },
        } = await axios.post('/api/checkout-sessions', {
            items: [
                {
                    price: imageInfo?.stripeId,
                    quantity: itemQuantity,
                },
            ],
        });

        const stripe = await getStripe();
        await stripe.redirectToCheckout({
            sessionId: id,
        });
    };

    const getFeatures = () => {
        return [
            {
                title: 'Stretch',
                description:
                    'The elastane in the fabric gives you total freedom of movement.',
            },
            {
                title: 'Softness',
                description:
                    'Cotton fibre offers natural comfort and softness.',
            },
            {
                title: 'Moisture Management',
                description:
                    'Cotton promotes ventilation to help keep you dry.',
            },
        ];
    };

    const mugsFeatures = () => {
        return [
            'Dishwasher safe',
            'Regrigerator safe',
            'Made from high quality leadless frosted glass',
            'Shiny lead free durable',
        ];
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
                border="1px solid lightgray"
                sx={{
                    '.carousel-status': {
                        display: 'none',
                    },
                    '.control-dots': {
                        marginTop: '24px',
                    },
                }}
            >
                {itemCategory !== 'beer' &&
                    itemCategory !== 'coffee-mugs' &&
                    itemCategory !== 'notepads' && (
                        <Carousel showThumbs={false}>
                            {allImages?.map((image, index) => {
                                return (
                                    <NextImage
                                        id={index}
                                        key={index}
                                        src={
                                            itemCategory !== 'posters' &&
                                            itemCategory !== 'all-items' &&
                                            itemCategory !== 'whiskey'
                                                ? `/${image}.jpg`
                                                : image
                                        }
                                        height={400}
                                        width={400}
                                        objectFit="contain"
                                    />
                                );
                            })}
                        </Carousel>
                    )}
                {(itemCategory === 'beer' ||
                    itemCategory === 'notepads' ||
                    itemCategory === 'coffee-mugs') && (
                    <NextImage
                        src={imageInfo?.name}
                        height={350}
                        width={350}
                        objectFit="cover"
                    />
                )}
            </Box>
            <Text mt="4">{imageInfo?.alt}</Text>
            <Text mb="2">Rs. {imageInfo?.price}/-(inclusive of all taxes)</Text>
            <Text>Quantity</Text>
            <NumberInput
                defaultValue={1}
                min={1}
                max={20}
                onChange={(valueString) => setItemQuantity(valueString)}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <Button
                colorScheme={'primary'}
                bgColor="orange"
                width={'full'}
                onClick={handleOnAddToCart}
                mb="4"
                mt="4"
            >
                Add to cart
            </Button>

            <Button
                colorScheme={'primary'}
                bgColor="orange"
                width={'full'}
                mb="4"
                mt="4"
                onClick={() => {
                    if (
                        router?.query?.name === 'notepads' ||
                        router?.query?.name === 'posters' ||
                        router?.query?.name === 'beer' ||
                        router?.query?.name === 'all-items' ||
                        router?.query?.name === 'coffee-mugs' ||
                        router?.query?.name === 'whiskey'
                    )
                        redirectToCheckout();
                }}
            >
                Buy now
            </Button>

            {(itemCategory === 'trousers' ||
                itemCategory === 'casual-tshirts' ||
                itemCategory === 'sweatshirts') &&
                getFeatures()?.map((feature, index) => {
                    return (
                        <Box border="1px solid black" p="4" mb="2" key={index}>
                            <Text fontWeight={'bold'}>{feature?.title}</Text>
                            <Text>{feature?.description}</Text>
                        </Box>
                    );
                })}

            {itemCategory === 'coffee-mugs' &&
                mugsFeatures()?.map((feature, index) => {
                    return (
                        <Box border="1px solid black" p="4" mb="2" key={index}>
                            <Text fontWeight={'bold'}>{feature}</Text>
                        </Box>
                    );
                })}

            {itemCategory !== 'coffee-mugs' && (
                <Text fontWeight={'bold'}>Made For</Text>
            )}
            <Text>{imageInfo?.description}</Text>

            {imageInfo?.features?.length > 0 && (
                <VStack>
                    <Text
                        fontWeight="bold"
                        fontSize={'xl'}
                        width="full"
                        textAlign="start"
                    >
                        {' '}
                        Product Features
                    </Text>
                    <VStack width="full" alignItems={'baseline'}>
                        {' '}
                        {imageInfo?.features?.map((feature, index) => {
                            return (
                                <UnorderedList key={index}>
                                    <ListItem>{feature}</ListItem>
                                </UnorderedList>
                            );
                        })}
                    </VStack>
                </VStack>
            )}

            {imageInfo?.specification?.length > 0 && (
                <VStack mt="8">
                    <Text
                        fontWeight="bold"
                        fontSize={'xl'}
                        width="full"
                        textAlign="start"
                    >
                        {' '}
                        Product Specifications
                    </Text>
                    <VStack width="full" alignItems={'baseline'}>
                        {' '}
                        {imageInfo?.specification?.map((feature, index) => {
                            return (
                                <UnorderedList key={index}>
                                    <ListItem>{feature}</ListItem>
                                </UnorderedList>
                            );
                        })}
                    </VStack>
                </VStack>
            )}
        </Layout>
    );
};

export default MobileViewDetail;
