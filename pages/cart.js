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
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import Immutable, { fromJS, Map } from 'immutable';

const Cart = () => {
    const { cartDetails, cartCount, addItem, removeItem, clearCart } =
        useShoppingCart();

    const [initialCart, setInitialCart] = React.useState();

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
                        <Heading mb="20">Your shopping cart is empty.</Heading>
                    </>
                )}

                {initialCart > 0 && (
                    <Flex flexDir={'column'}>
                        {Object.entries(cartDetails).map(([key, product]) => (
                            <Flex key={key} mb="12" justify={'space-between'}>
                                <Flex
                                    flexDirection={'row'}
                                    gridColumnGap={2}
                                    alignItems="center"
                                >
                                    <NextImage
                                        src={product?.name}
                                        height="150px"
                                        width="150px"
                                        objectFit="contain"
                                    />
                                    <Text>{product?.alt}</Text>
                                </Flex>

                                <HStack spacing={4}>
                                    <AddIcon
                                        cursor={'pointer'}
                                        onClick={() => {
                                            addItem(
                                                product,
                                                '1',
                                                product?.selectedSize
                                            );
                                        }}
                                    />
                                    <Text fontWeight={'bold'}>
                                        {product.quantity}
                                    </Text>
                                    <MinusIcon
                                        cursor={'pointer'}
                                        onClick={() => {
                                            removeItem(product);
                                        }}
                                    />
                                </HStack>
                            </Flex>
                        ))}

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
                    </Flex>
                )}
            </Flex>
        </Container>
    );
};

export default Cart;
