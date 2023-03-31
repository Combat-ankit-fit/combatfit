import {
    Text,
    Grid,
    GridItem,
    Box,
    useBreakpointValue,
    Container,
    Flex,
    Button,
    HStack,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import MobileViewDetail from '../../components/MobileViewDetail';
import { coffeeMugs } from '../../utils/mugs';
import { posters } from '../../utils/posters';
import { trousers } from '../../utils/trousers';
import { sweatShirts } from '../../utils/sweatshirts';
import { casualTshirts } from '../../utils/casual-tshirts';
import { allClothings } from '../../utils/all-items';
import NextImage from 'next/image';
import axios from 'axios';
import useSWRImmutable from 'swr/immutable';
import getStripe from '../../getStripe';
import { useShoppingCart } from '../../context/CartProvider';

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

const ItemDetail = () => {
    const router = useRouter();
    const isMobileView = useBreakpointValue({
        base: true,
        md: false,
        lg: false,
    });

    const itemCategory = router?.query?.name;
    const { addItem } = useShoppingCart();

    const itemId = router?.query?.id;
    const [synonumousImages, setSynonymousImages] = React.useState([]);
    const [itemQuantity, setItemQuantity] = React.useState(1);
    const [centralImage, setCentralImage] = React.useState();
    const [imageInfo, setImageInfo] = React.useState({});

    const { data: beerData } = useSWRImmutable('/api/get-items?id=beer');
    const { data: postersData } = useSWRImmutable('/api/get-items?id=posters');
    const { data: notespadData } = useSWRImmutable('/api/get-items?id=notepad');

    React.useEffect(() => {
        if (itemCategory !== 'posters' && itemCategory !== 'beer') {
            setCentralImage(itemId);
        }
        if (itemCategory === 'coffee-mugs') {
            const specificItem = coffeeMugs?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            return;
        }

        if (itemCategory === 'posters' && postersData) {
            const specificItem =
                postersData?.filter((item) => item?.identifier === itemId)[0] ||
                {};

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            setCentralImage(specificItem?.name);
            return;
        }

        if (itemCategory === 'beer' && beerData) {
            const specificItem =
                beerData?.filter((item) => item?.identifier === itemId)[0] ||
                {};

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            setCentralImage(specificItem?.name);
            return;
        }

        if (itemCategory === 'notepads' && notespadData) {
            const specificItem =
                notespadData?.filter(
                    (item) => item?.identifier === itemId
                )[0] || {};

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
            setCentralImage(specificItem?.name);
            return;
        }
    }, [itemCategory, itemId, beerData, postersData, notespadData]);

    if (isMobileView) {
        return <MobileViewDetail itemCategory={itemCategory} itemId={itemId} />;
    }

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

    const handleOnAddToCart = () => {
        addItem(imageInfo, itemQuantity);
    };

    return (
        <Layout
            sidebarRequired={false}
            maxW="9xl"
            breadCrumbsRequired={true}
            breadCrumbsPath={itemCategory}
            recurringItems={false}
        >
            <Container maxW="7xl">
                <Flex w="full">
                    <Flex flexDir={'column'} me="4">
                        {synonumousImages?.length > 0 &&
                            synonumousImages?.map((item, index) => {
                                return (
                                    <Box mb="4" cursor={'pointer'} key={index}>
                                        <NextImage
                                            src={
                                                router?.query?.name !==
                                                'posters'
                                                    ? `/${item}.jpg`
                                                    : item
                                            }
                                            height={200}
                                            width={200}
                                            objectFit="contain"
                                            {...(synonumousImages?.length >
                                                0 && {
                                                onClick: () => {
                                                    setCentralImage(item);
                                                },
                                            })}
                                        />
                                    </Box>
                                );
                            })}
                    </Flex>
                    <Box id="image__container" height={700} width={700} me="3">
                        <NextImage
                            src={
                                router?.query?.name !== 'posters' &&
                                router?.query?.name !== 'beer' &&
                                router?.query?.name !== 'notepads'
                                    ? `/${centralImage}.jpg`
                                    : centralImage
                            }
                            height={600}
                            width={600}
                            layout="fixed"
                        />
                    </Box>
                    <Flex flexDir={'column'} gridRowGap={2}>
                        <Text fontWeight={'bold'}>{imageInfo?.alt}</Text>
                        <Text>MRP:{imageInfo?.price}</Text>
                        <Text>Quantity</Text>
                        <NumberInput
                            defaultValue={1}
                            min={1}
                            max={20}
                            onChange={(valueString) =>
                                setItemQuantity(valueString)
                            }
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
                                onClick={handleOnAddToCart}
                            >
                                Add to cart
                            </Button>
                        )}
                        {itemCategory !== 'coffee-mugs' && (
                            <Button
                                colorScheme={'primary'}
                                bgColor="orange"
                                onClick={() => {
                                    if (
                                        router?.query?.name === 'notepads' ||
                                        router?.query?.name === 'posters' ||
                                        router?.query?.name === 'beer'
                                    )
                                        redirectToCheckout();
                                }}
                            >
                                Buy Online
                            </Button>
                        )}
                    </Flex>
                </Flex>

                <Text fontWeight={'bold'}>Made For</Text>
                {imageInfo?.description && (
                    <Text mb={20}>{imageInfo?.description}</Text>
                )}

                <Grid templateColumns="repeat(2, 1fr)" gap={2} mb="2">
                    <Flex flexDirection={'column'}>
                        <Text fontWeight="bold" fontSize={'xl'} mb={10}>
                            Product Features
                        </Text>
                        {imageInfo?.features?.map((feature) => {
                            return (
                                <HStack>
                                    <NextImage
                                        src="/breathability.jpg"
                                        objectFit="contain"
                                        width={'20px'}
                                        height="20px"
                                    />
                                    <Text fontSize={'lg'}>{feature}</Text>
                                </HStack>
                            );
                        })}
                    </Flex>
                    {imageInfo?.specification?.length > 0 && (
                        <Flex flexDirection={'column'} alignItems="baseline">
                            <Text
                                textAlign="center"
                                fontWeight="bold"
                                fontSize={'xl'}
                                mb={10}
                            >
                                Product Specifications:
                            </Text>
                            {imageInfo?.specification?.map((specification) => {
                                return (
                                    <HStack>
                                        <NextImage
                                            src="/specification.jpg"
                                            objectFit="contain"
                                            width={'20px'}
                                            height="20px"
                                        />
                                        <Text fontSize={'lg'}>
                                            {specification}
                                        </Text>
                                    </HStack>
                                );
                            })}
                        </Flex>
                    )}
                </Grid>
            </Container>
        </Layout>
    );
};

export default ItemDetail;
