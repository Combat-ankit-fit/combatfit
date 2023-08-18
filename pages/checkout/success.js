import React from 'react';
import {
    Text,
    useBreakpointValue,
    Heading,
    Container,
    Flex,
    Divider,
    Box,
    chakra,
} from '@chakra-ui/react';
import { useShoppingCart } from '../../context/CartProvider';
import Header from '../../components/Header';
import MobileDrawer from '../../components/MobileDrawer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import NextImage from 'next/image';

const Success = () => {
    const { clearCart } = useShoppingCart();
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const router = useRouter();
    const purchaseId = router?.query?.sessionId;
    const [error, setError] = React.useState();

    const { data: checkoutSessionData, error: apiError } = useSWR(
        purchaseId ? `/api/session/info?purchaseId=${purchaseId}` : null
    );

    const isLoading = !checkoutSessionData && !apiError;

    React.useEffect(() => {
        clearCart();
    }, []);

    React.useEffect(() => {
        if (checkoutSessionData?.message === 'invalid session Id') {
            setError(true);
        } else setError(false);
    }, [checkoutSessionData]);

    return (
        <Flex height="100vh">
            {!isMobileView && <Header />}
            {isMobileView && <MobileDrawer isBreadCrumRequired={false} />}
            <Container maxW={'7xl'} mt="120px">
                <Head>
                    <title>Order Success</title>
                </Head>
                <Flex flexDirection={'column'}>
                    {!error && !isLoading ? (
                        <>
                            <Heading mb="2" textAlign={'center'}>
                                PAYMENT SUCCESSFUL
                            </Heading>
                            <Divider
                                orientation="horizontal"
                                borderColor={'black'}
                            />
                            <Box mt="10">
                                <Flex justifyContent={'space-between'} px="10">
                                    <Text fontWeight={'bold'}>
                                        Payment Type
                                    </Text>
                                    <Text fontWeight={'bold'}>Card</Text>
                                </Flex>
                                <Flex
                                    justifyContent={'space-between'}
                                    px="10"
                                    mt="6"
                                >
                                    <Text fontWeight={'bold'}>Mobile</Text>
                                    <Text fontWeight={'bold'}>
                                        {
                                            checkoutSessionData
                                                ?.customer_details?.phone
                                        }
                                    </Text>
                                </Flex>
                                <Flex
                                    justifyContent={'space-between'}
                                    px="10"
                                    mt="6"
                                >
                                    <Text fontWeight={'bold'}>Email</Text>
                                    <Text fontWeight={'bold'}>
                                        {
                                            checkoutSessionData
                                                ?.customer_details?.email
                                        }
                                    </Text>
                                </Flex>
                                {checkoutSessionData?.amount_total && (
                                    <Flex
                                        justifyContent={'space-between'}
                                        px="10"
                                        mt="6"
                                    >
                                        <Text fontWeight={'bold'}>
                                            Amount Paid
                                        </Text>
                                        <Text fontWeight={'bold'}>
                                            INR{' '}
                                            {checkoutSessionData?.amount_total /
                                                100}
                                        </Text>
                                    </Flex>
                                )}
                                <Flex
                                    justifyContent={'space-between'}
                                    px="10"
                                    mt="6"
                                >
                                    <Text fontWeight={'bold'}>
                                        Transaction Id
                                    </Text>
                                    <Text fontWeight={'bold'}>
                                        {checkoutSessionData?.created}
                                    </Text>
                                </Flex>
                            </Box>
                            <Divider
                                orientation="horizontal"
                                borderColor={'black'}
                                my="10"
                            />
                            <NextImage
                                src={
                                    'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/success_order.JPG?alt=media&token=1d763ecb-4668-4c9a-a860-a96bec5aeafa'
                                }
                                objectFit="contain"
                                width="100px"
                                height="100px"
                            />
                            <Heading mb="2" textAlign={'center'} color="orange">
                                Thank you for your purchase!
                            </Heading>
                            <Text textAlign={'center'} fontWeight={'bold'}>
                                Your order is{' '}
                                <chakra.span color="orange">
                                    confirmed
                                </chakra.span>
                                . You will receive an{' '}
                                <chakra.span color="orange">
                                    order confirmation email/SMS
                                </chakra.span>{' '}
                                shortly with the expected delivery date for your
                                items.
                            </Text>
                            <Text fontSize={'lg'} textAlign={'center'} mt="4">
                                Please contact us for any issues at: +91
                                8826552468
                            </Text>
                        </>
                    ) : (
                        <Heading mb="2" mt={'120px'}>
                            Please try again
                        </Heading>
                    )}
                </Flex>
            </Container>
        </Flex>
    );
};

export default Success;
