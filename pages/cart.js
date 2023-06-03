import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useShoppingCart } from '../context/CartProvider';
import axios from 'axios';
import NextImage from 'next/image';
import getStripe from './../getStripe';
import {
    Button,
    chakra,
    Heading,
    VStack,
    Text,
    Box,
    Flex,
    HStack,
    Container,
    useBreakpointValue,
    Divider,
    Grid,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import Immutable, { fromJS, Map } from 'immutable';
import Header from '../components/Header';
import router, { useRouter } from 'next/router';
import MobileDrawer from '../components/MobileDrawer';

const Cart = () => {
    const { cartDetails, cartCount, addItem, removeItem, clearCart } =
        useShoppingCart();
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const router = useRouter();
    let date = new Date();

    const [initialCart, setInitialCart] = React.useState();
    const totalPrice = Object?.keys(cartDetails)?.reduce((acc, item) => {
        return (
            acc + Number(cartDetails[item]?.price) * cartDetails[item]?.quantity
        );
    }, 0);

    React.useEffect(() => {
        setInitialCart(cartCount);
    }, [cartCount]);

    const redirectToCheckout = async () => {
        let vaibh = Map(cartDetails)?.map((val) => {
            return {
                price: val?.stripeId,
                quantity: val?.quantity,
            };
        });

        const metadataClothingVariants = Map(cartDetails)?.filter(
            (val) => val?.type === 'clothing'
        );

        const finalMetaData = metadataClothingVariants?.map((val) => {
            return {
                [val?.identifier]: val?.selectedSize,
            };
        });

        const valueMetadata = Object?.values(finalMetaData?.toJS())?.map(
            (val) => val
        );

        var finalObject = {};

        valueMetadata?.map((val) => {
            finalObject = { ...finalObject, ...val };
        });

        const items = Object.keys(vaibh?.toJS())?.map((val) => {
            return {
                price: vaibh?.toJS()[val]?.price,
                quantity: vaibh?.toJS()[val]?.quantity,
            };
        });

        const {
            data: { id },
        } = await axios.post('/api/checkout-sessions', {
            items: items,
            metadata: {
                ...finalObject,
            },
        });
        const stripe = await getStripe();
        await stripe.redirectToCheckout({
            sessionId: id,
        });
    };

    return (
        <>
            {!isMobileView && <Header />}
            {isMobileView && <MobileDrawer isBreadCrumRequired={false} />}
            <Container maxW={'7xl'}>
                <Head>
                    <title>My Shopping Cart</title>
                </Head>
                <Flex flexDirection={'column'}>
                    {initialCart > 0 ? (
                        <>
                            <Heading mb="20">Your shopping cart</Heading>
                            <Text fontWeight={'bold'} fontSize="lg" mb="10">
                                {initialCart} items{' '}
                            </Text>
                        </>
                    ) : (
                        <>
                            <Heading mb="20" mt={'120px'}>
                                Your shopping cart is empty.
                            </Heading>
                        </>
                    )}

                    {initialCart > 0 && (
                        <Flex flexDir={'column'}>
                            {Object.entries(cartDetails).map(
                                ([key, product]) => (
                                    <Grid
                                        templateColumns={
                                            !isMobileView
                                                ? 'repeat(3, 1fr)'
                                                : 'repeat(1, 1fr)'
                                        }
                                        gap={2}
                                        mb="2"
                                        key={key}
                                    >
                                        <Flex
                                            flexDirection={'row'}
                                            gridColumnGap={2}
                                            alignItems="center"
                                            mb={16}
                                        >
                                            <NextImage
                                                src={product?.name}
                                                height={'150px'}
                                                width="150px"
                                                objectFit="contain"
                                            />
                                            <Flex
                                                flexDirection={'column'}
                                                gridRowGap={{ base: 1, md: 4 }}
                                            >
                                                <Text fontWeight={'bold'}>
                                                    {product?.alt}
                                                </Text>
                                                <Text fontWeight={600}>
                                                    Offer Price: Rs.{' '}
                                                    {product?.price}
                                                </Text>
                                                {product?.original && (
                                                    <Text>
                                                        MRP: Rs.{' '}
                                                        <chakra.span
                                                            textDecoration={
                                                                'line-through'
                                                            }
                                                        >
                                                            {product?.original}
                                                        </chakra.span>
                                                    </Text>
                                                )}
                                                {isMobileView && (
                                                    <HStack spacing={4}>
                                                        <Flex
                                                            bgColor={'gray'}
                                                            alignItems={
                                                                'center'
                                                            }
                                                            gridColumnGap={2}
                                                        >
                                                            <Text
                                                                fontWeight={
                                                                    'bold'
                                                                }
                                                                px={6}
                                                            >
                                                                {
                                                                    product.quantity
                                                                }
                                                            </Text>
                                                        </Flex>
                                                    </HStack>
                                                )}
                                            </Flex>
                                        </Flex>

                                        {!isMobileView && (
                                            <Flex
                                                justifyContent={'center'}
                                                mb={16}
                                            >
                                                {' '}
                                                <Divider
                                                    orientation="vertical"
                                                    borderColor="gray"
                                                    height={'100px'}
                                                />
                                            </Flex>
                                        )}

                                        {!isMobileView && (
                                            <Flex
                                                flexDirection={'column'}
                                                alignItems={'center'}
                                                mb={16}
                                            >
                                                {product?.selectedSize && (
                                                    <Text mb={2}>Size:</Text>
                                                )}
                                                {product?.selectedSize && (
                                                    <Text mb={2}>
                                                        {product?.selectedSize}
                                                    </Text>
                                                )}

                                                <Text mb={4}>QTY:</Text>

                                                <HStack spacing={4}>
                                                    <Flex
                                                        bgColor={'gray'}
                                                        alignItems={'center'}
                                                        gridColumnGap={2}
                                                    >
                                                        <Text
                                                            fontWeight={'bold'}
                                                            px={6}
                                                        >
                                                            {product.quantity}
                                                        </Text>
                                                    </Flex>
                                                </HStack>
                                            </Flex>
                                        )}
                                    </Grid>
                                )
                            )}

                            <Flex
                                flexDirection={'column'}
                                gridRowGap={4}
                                bgColor={'lightgray'}
                                p={4}
                                mb={10}
                            >
                                <Text
                                    textAlign={'center'}
                                    fontWeight={'bold'}
                                    fontSize={'2xl'}
                                >
                                    ORDER SUMMARY
                                </Text>
                                <Flex justifyContent={'space-between'}>
                                    <Text fontWeight={'bold'}>
                                        Total Products (Inc GST)
                                    </Text>
                                    <Text>Rs. {totalPrice}</Text>
                                </Flex>
                                <Flex justifyContent={'space-between'}>
                                    <Text fontWeight={'bold'}>
                                        Delivery Charges
                                    </Text>
                                    <Text>Rs. 0</Text>
                                </Flex>

                                <Divider
                                    orientation="horizontal"
                                    borderColor="black"
                                    my={8}
                                />
                                <Flex justifyContent={'space-between'}>
                                    <Text fontWeight={'bold'}>TOTAL</Text>
                                    <Text>Rs. {totalPrice}</Text>
                                </Flex>
                                <Text fontWeight={'bold'}>
                                    Estimated Delivery On or Before:{' '}
                                    {new Date(date.setDate(date.getDate() + 6))
                                        .toUTCString()
                                        ?.split(' ')
                                        .slice(0, 4)
                                        .join(' ')}
                                </Text>
                                <Divider
                                    orientation="horizontal"
                                    borderColor="black"
                                    my={8}
                                />
                                <Text fontSize={'sm'}>
                                    All standard WHO guidelines and relevant
                                    precautionary measures are in place, to
                                    ensure a safe and secure shopping experience
                                    for you.
                                </Text>
                                <Flex justifyContent={'end'}>
                                    <Button
                                        colorScheme="primary"
                                        onClick={() => {
                                            redirectToCheckout();
                                        }}
                                    >
                                        Go to Checkout
                                    </Button>
                                </Flex>
                                <Flex justifyContent={'end'}>
                                    <Button
                                        colorScheme="primary"
                                        onClick={() => {
                                            router?.push('/');
                                        }}
                                    >
                                        Shop More
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Container>
        </>
    );
};

export default Cart;
