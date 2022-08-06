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

const Layout = ({ children, sidebarRequired = true, heroImage = false }) => {
    return (
        <Box id="layout" display={'flex'}>
            <Header />

            {sidebarRequired && <Sidebar />}
            <Box
                id="box__container"
                display={'flex'}
                justifyContent="center"
                width="full"
            >
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
