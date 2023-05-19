import React from 'react';
import {
    Text,
    useBreakpointValue,
    Heading,
    Container,
    Flex,
} from '@chakra-ui/react';
import { useShoppingCart } from '../../context/CartProvider';
import Header from '../../components/Header';
import MobileDrawer from '../../components/MobileDrawer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

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
        <>
            {!isMobileView && <Header />}
            {isMobileView && <MobileDrawer isBreadCrumRequired={false} />}
            <Container maxW={'7xl'}>
                <Head>
                    <title>Order Success</title>
                </Head>
                <Flex flexDirection={'column'}>
                    {!error && !isLoading ? (
                        <>
                            <Heading mb="2" mt={'120px'}>
                                Your order was successful
                            </Heading>
                            <Text fontSize={'lg'}>
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
        </>
    );
};

export default Success;
