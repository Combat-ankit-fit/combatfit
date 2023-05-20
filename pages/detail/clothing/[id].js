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
    Input,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../../components/Layout';
import MobileViewDetail from '../../../components/MobileViewClothingDetail';
import axios from 'axios';
import NextImage from 'next/image';
import useSWRImmutable from 'swr/immutable';
import getStripe from '../../../getStripe';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';
import { useShoppingCart } from '../../../context/CartProvider';

const ItemDetail = () => {
    const router = useRouter();
    const isMobileView = useBreakpointValue({
        base: true,
        md: false,
        lg: false,
    });

    const { addItem } = useShoppingCart();
    const itemCategory = router?.query?.name;

    const itemId = router?.query?.id;
    const [synonumousImages, setSynonymousImages] = React.useState([]);
    const [centralImage, setCentralImage] = React.useState();
    const [imageInfo, setImageInfo] = React.useState({});
    const [itemQuantity, setItemQuantity] = React.useState(1);
    const [selectedSize, setSelectedSize] = React.useState(null);
    const [selectedSizeIndex, setSelectedSizeIndex] = React.useState(null);
    const [sizeAvailable, setSizeAvailable] = React.useState([]);

    const sizeArr = ['M', 'L', 'XL', 'XXL'];

    const { data: clothingData } = useSWRImmutable(
        '/api/get-items?id=clothing'
    );

    React.useEffect(() => {
        const specificItem =
            clothingData?.filter((item) => item?.identifier === itemId)[0] ||
            {};

        setCentralImage(specificItem?.name);
        setSynonymousImages([...(specificItem?.extraImages || [])]);
        setSizeAvailable(specificItem?.sizeVariant);
        setImageInfo({ ...specificItem });
    }, [clothingData, itemCategory, itemId]);

    if (isMobileView) {
        return <MobileViewDetail itemCategory={itemCategory} itemId={itemId} />;
    }

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

    const handleOnAddToCart = () => {
        addItem(imageInfo, itemQuantity, selectedSize);
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
                        {synonumousImages?.map((item, index) => {
                            return (
                                <Box mb="4" cursor={'pointer'} key={index}>
                                    <NextImage
                                        src={item}
                                        height={150}
                                        width={150}
                                        objectFit="contain"
                                        onClick={() => {
                                            setCentralImage(item);
                                        }}
                                    />
                                </Box>
                            );
                        })}
                    </Flex>
                    <Box id="image__container" height={700} width={700} me="3">
                        <NextImage
                            src={centralImage}
                            height={500}
                            width={400}
                            layout="fixed"
                        />
                    </Box>
                    <Flex flexDir={'column'} gridRowGap={6}>
                        <Text fontWeight={'bold'}>{imageInfo?.alt}</Text>

                        <Text>MRP: Rs. {imageInfo?.price}</Text>
                        {imageInfo?.original && (
                            <Text textDecoration={'line-through'}>
                                Price: Rs. {imageInfo?.original}
                            </Text>
                        )}
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
                            max={1000}
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
                        <Button
                            colorScheme={'primary'}
                            bgColor="orange"
                            onClick={handleOnAddToCart}
                            disabled={selectedSize === null}
                        >
                            Add to cart
                        </Button>

                        <Button
                            colorScheme={'primary'}
                            bgColor="orange"
                            onClick={() => {
                                redirectToCheckout();
                            }}
                            disabled={selectedSize === null}
                        >
                            Buy Online
                        </Button>
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
                        {imageInfo?.features?.map((feature, index) => {
                            return (
                                <HStack key={index}>
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
                    <Flex flexDirection={'column'} alignItems="baseline">
                        <Text
                            textAlign="center"
                            fontWeight="bold"
                            fontSize={'xl'}
                            mb={10}
                        >
                            Product Specifications:
                        </Text>
                        {imageInfo?.specification?.map(
                            (specification, index) => {
                                return (
                                    <HStack key={index}>
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
                            }
                        )}
                    </Flex>
                </Grid>
            </Container>
        </Layout>
    );
};

export default ItemDetail;
