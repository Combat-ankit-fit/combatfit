import React from 'react';
import {
    Box,
    Text,
    Button,
    VStack,
    HStack,
    Flex,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import { coffeeMugs } from '../utils/mugs';
import { trousers } from '../utils/trousers';
import { sweatShirts } from '../utils/sweatshirts';
import { casualTshirts } from '../utils/casual-tshirts';
import { allClothings } from '../utils/all-items';
import { notepad } from '../utils/notepad';
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
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MobileViewDetail = ({ itemCategory = '', itemId = '' }) => {
    const [synonumousImages, setSynonymousImages] = React.useState([]);
    const [centralImage, setCentralImage] = React.useState(itemId);
    const [imageInfo, setImageInfo] = React.useState({});
    const [allImages, setAllImages] = React.useState([]);
    const router = useRouter();
    const { addItem, cartDetails } = useShoppingCart();
    const sizeArr = ['M', 'L', 'XL', 'XXL'];
    const [selectedSize, setSelectedSize] = React.useState(null);
    const [selectedSizeIndex, setSelectedSizeIndex] = React.useState(null);
    const [sizeAvailable, setSizeAvailable] = React.useState([]);

    const { data: beerData } = useSWRImmutable('/api/get-items?id=beer');
    const { data: postersData } = useSWRImmutable('/api/get-items?id=posters');
    const { data: notespadData } = useSWRImmutable('/api/get-items?id=notepad');
    const { data: clothingData } = useSWRImmutable(
        '/api/get-items?id=clothing'
    );
    const [itemQuantity, setItemQuantity] = React.useState(1);

    const handleOnAddToCart = () => {
        addItem(imageInfo, itemQuantity, selectedSize);
    };

    const getMaximumQuantityForSize = (size) => {
        if (size === 'M') return imageInfo?.MediumA || 10;
        if (size === 'L') return imageInfo?.LargeA || 10;
        if (size === 'XL') return imageInfo?.XLA || 10;
        if (size === 'XXL') return imageInfo?.XXLA || 10;
    };

    const isMaxLimitAchieved = (userSelectedSize) => {
        const item = cartDetails[itemId];
        if (
            item?.quantity + Number(itemQuantity) >=
                getMaximumQuantityForSize(userSelectedSize) &&
            userSelectedSize === item?.selectedSize
        )
            return true;
        else return false;
    };

    React.useEffect(() => {
        if (
            itemCategory !== 'posters' &&
            itemCategory !== 'beer' &&
            itemCategory !== 'notepads' &&
            itemCategory !== 'all-items'
        ) {
            setCentralImage(itemId);
        }
        if (itemCategory === 'coffee-mugs') {
            const specificItem = coffeeMugs?.filter(
                (item) => item?.name === itemId
            )[0];

            // setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            const arr = [...specificItem?.extraImages, centralImage];
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
            setCentralImage(specificItem?.name);
            setSizeAvailable(specificItem?.sizeVariant);

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
        coffeeMugs,
    ]);

    const getHeaderInfo = () => {
        if (itemCategory === 'trousers') {
            return 'Military Trousers';
        }
    };

    const redirectToCheckout = async () => {
        const {
            data: { id },
        } = await axios.post('/api/checkout-session-clothing-buy', {
            items: [
                {
                    price: imageInfo?.stripeId,
                    quantity: itemQuantity,
                },
            ],
            metadata: {
                size: selectedSize,
                itemName: itemId,
            },
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

    console.log('imageInfo is:-', centralImage);

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

            {centralImage && centralImage?.includes('firebase') && (
                <NextImage
                    src={centralImage}
                    height={400}
                    width={400}
                    objectFit="contain"
                />
            )}

            <Box w="full" id="main__box">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                    responsive={{
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0,
                            },
                            items: 1,
                            partialVisibilityGutter: 30,
                        },
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                >
                    <Box display={'flex'} flexDirection={'row'}>
                        {allImages?.map((image, index) => {
                            return (
                                <Box
                                    key={index}
                                    border="1px"
                                    borderStyle={'dotted'}
                                    me={1}
                                    onClick={() => {
                                        setCentralImage(image);
                                    }}
                                >
                                    <NextImage
                                        id={index}
                                        key={index}
                                        src={image}
                                        height={400}
                                        width={400}
                                        objectFit="contain"
                                    />
                                </Box>
                            );
                        })}
                    </Box>
                </Carousel>

                {(itemCategory === 'beer' || itemCategory === 'notepads') && (
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
            <Flex alignItems={'baseline'} gridColumnGap={2}>
                <Text>Size:</Text>
                {sizeAvailable?.map((size, index) => {
                    return (
                        <Box
                            me={2}
                            key={index}
                            p={2}
                            width="60px"
                            border="1px solid black"
                            cursor={'pointer'}
                            onClick={() => {
                                setSelectedSize(size);
                                setSelectedSizeIndex(index);
                                setItemQuantity(1);
                            }}
                            {...(index === selectedSizeIndex && {
                                bgColor: 'orange',
                            })}
                        >
                            {size}
                        </Box>
                    );
                })}
            </Flex>
            <Text>Quantity</Text>
            <NumberInput
                defaultValue={1}
                min={1}
                max={20}
                value={itemQuantity}
                onChange={(valueString) => setItemQuantity(valueString)}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            {itemCategory !== 'coffee-mugs' && (
                <Button
                    colorScheme={'primary'}
                    bgColor="orange"
                    width={'full'}
                    onClick={handleOnAddToCart}
                    mb="4"
                    mt="4"
                    disabled={
                        selectedSize === null ||
                        itemQuantity === 0 ||
                        imageInfo?.availability === 'no'
                    }
                >
                    Add to cart
                </Button>
            )}

            <Button
                colorScheme={'primary'}
                bgColor="orange"
                width={'full'}
                mb="4"
                mt="4"
                disabled={
                    selectedSize === null ||
                    itemQuantity === 0 ||
                    imageInfo?.availability === 'no'
                }
                onClick={() => {
                    if (
                        router?.query?.name === 'notepads' ||
                        router?.query?.name === 'posters' ||
                        router?.query?.name === 'beer' ||
                        router?.query?.name === 'all-items'
                    )
                        redirectToCheckout();
                }}
            >
                Buy now
            </Button>

            {imageInfo?.availability === 'no' && (
                <Text color="red" textAlign={'center'} mb={8}>
                    This Item is Out of Stock
                </Text>
            )}

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

            <Text fontWeight={'bold'}>Made For</Text>
            <Text>{imageInfo?.description}</Text>

            {imageInfo?.features?.length > 0 && (
                <VStack>
                    <Text
                        fontWeight="bold"
                        fontSize={'xl'}
                        width="full"
                        textAlign="start"
                        mt={8}
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
