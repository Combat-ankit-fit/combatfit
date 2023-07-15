import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
    Box,
    Flex,
    Text,
    Container,
    Grid,
    useBreakpointValue,
} from '@chakra-ui/react';

import Header from './Header';

import React from 'react';
import Footer1 from './Footer1';
import router from 'next/router';
import MobileDrawer from './MobileDrawer';
import GenericClothingCategoryItemCard from './GenericClothingCategoryItemCard';

const CategoryItems = (props) => {
    const isMobileView = useBreakpointValue({ base: true, md: false });

    return (
        <Box id="layout" display={'flex'} minH="100vh" flexDirection="column">
            {!isMobileView && <Header breadCrumbsRequired={false} />}
            {isMobileView && <MobileDrawer breadCrumbsPath="Category" />}
            <Container
                pos={'relative'}
                maxW="9xl"
                px="0"
                flex="1"
                id="main__container"
                mt={24}
                p={6}
            >
                {props?.item?.length > 0 ? (
                    <Grid
                        templateColumns={
                            isMobileView ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'
                        }
                        gap={3}
                        mb="16"
                        w="full"
                    >
                        {props?.item?.map((item, index) => {
                            return (
                                <GenericClothingCategoryItemCard
                                    key={index}
                                    height={isMobileView ? '250px' : '320px'}
                                    info={item}
                                    extension="jpg"
                                />
                            );
                        })}
                    </Grid>
                ) : (
                    <Flex justifyContent={'center'} alignItems="center">
                        <Text fontWeight="bold">
                            Please wait for sometime, Thanks!
                        </Text>
                    </Flex>
                )}
            </Container>
            <Footer1 homepage={false} />
        </Box>
    );
};

export default CategoryItems;
