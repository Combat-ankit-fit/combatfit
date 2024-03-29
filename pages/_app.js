import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SWRConfig } from 'swr';
import ErrorBoundary from '../components/ErrorBoundary';
import { CartProvider } from '../context/CartProvider';

function MyApp({ Component, pageProps }) {
    const fetcher = async (url, queryParams) => {
        let urlWithParams = url;
        if (queryParams) {
            urlWithParams = url + queryParams;
        }
        const res = await fetch(urlWithParams);

        const newResponse = await res.json();

        return newResponse;
    };

    return (
        <SWRConfig value={{ fetcher }}>
            <ChakraProvider theme={theme}>
                <ErrorBoundary>
                    <CartProvider>
                        <Component {...pageProps} />
                    </CartProvider>
                </ErrorBoundary>
            </ChakraProvider>
        </SWRConfig>
    );
}

export default MyApp;
