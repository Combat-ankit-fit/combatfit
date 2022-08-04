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

const Layout = ({ children, sidebarRequired = true }) => {
    return (
        <React.Fragment>
            <Box>
                <Header />

                <Box minH="100vh">
                    {sidebarRequired && <Sidebar />}
                    <Container
                        pos={'relative'}
                        maxW="4xl"
                        p="6"
                        top="150px"
                        px="0"
                    >
                        {children}
                    </Container>
                </Box>
            </Box>
            <Container
                position="relative"
                maxW={sidebarRequired ? '4xl' : 'full'}
                p="6"
                px="0"
            >
                {' '}
                <Footer />
            </Container>
        </React.Fragment>
    );
};

export default Layout;
