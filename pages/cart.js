import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useShoppingCart } from '../context/CartProvider';
import axios from 'axios';
import NextImage from 'next/image';
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

const Cart = () => {
    const { cartDetails, cartCount, addItem, removeItem, clearCart } =
        useShoppingCart();
    const [redirecting, setRedirecting] = useState(false);

    return (
        <Container maxW={'7xl'}>
            <Head>
                <title>My Shopping Cart</title>
            </Head>
            <Flex flexDirection={'column'}>
                {cartCount > 0 ? (
                    <>
                        <Heading mb="20">Your shopping cart</Heading>
                        <Text fontWeight={'bold'} fontSize="lg" mb="10">
                            {cartCount} items{' '}
                        </Text>
                    </>
                ) : (
                    <>
                        <Heading mb="20">Your shopping cart is empty.</Heading>
                    </>
                )}

                {cartCount > 0 && (
                    <Flex flexDir={'column'}>
                        {Object.entries(cartDetails).map(([key, product]) => (
                            <Flex key={key} mb="12" justify={'space-between'}>
                                <NextImage
                                    src={product?.name}
                                    height="150px"
                                    width="150px"
                                    objectFit="contain"
                                />

                                <HStack spacing={4}>
                                    <AddIcon
                                        cursor={'pointer'}
                                        onClick={() => {
                                            addItem(product, '1');
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
                                disabled={redirecting}
                                colorScheme="primary"
                            >
                                {redirecting
                                    ? 'Redirecting...'
                                    : 'Go to Checkout'}
                            </Button>
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Container>
    );
};

export default Cart;
