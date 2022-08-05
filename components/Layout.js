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
import NextImage from 'next/image';

const Layout = ({ children, sidebarRequired = true, heroImage = false }) => {
    return (
        <Box id="layout" minH="100vh">
            <Box>
                <Header />
            </Box>
            {sidebarRequired && <Sidebar />}
            <Box minH="100vh" ms="256px" id="box__container">
                <Container
                    pos={'relative'}
                    maxW="4xl"
                    p="6"
                    top="150px"
                    px="0"
                    flex="1"
                    id="main__container"
                >
                    {children}
                    <Footer />
                </Container>
            </Box>
        </Box>
    );
};

export default Layout;
