import {
    Box,
    Flex,
    useBreakpoint,
    useDisclosure,
    Text,
    Container,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

import React from 'react';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Box>
                <Header />
                <Flex minH="100vh">
                    <Sidebar />
                    <Container
                        pos={'relative'}
                        maxW="4xl"
                        p="6"
                        top="150px"
                        px="0"
                    >
                        {children}
                        <Footer />
                    </Container>
                </Flex>
            </Box>
        </React.Fragment>
    );
};

export default Layout;
