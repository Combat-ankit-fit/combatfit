import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import GenericItemCard from '../../components/GenericItemCard';
import {
    Text,
    Grid,
    GridItem,
    Box,
    useBreakpointValue,
} from '@chakra-ui/react';
import { beerMugs } from '../../utils/beer';
import { coffeeMugs } from '../../utils/mugs';
import { trousers } from '../../utils/trousers';

const Item = () => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const router = useRouter();

    const queryParam = router?.query?.item;

    let data;

    if (queryParam === 'beer') {
        data = [...beerMugs];
    }

    if (queryParam === 'coffee-mugs') {
        data = [...coffeeMugs];
    }

    if (queryParam === 'trousers') {
        data = [...trousers];
    }

    const itemName =
        router?.query?.item?.charAt(0).toUpperCase() +
        router?.query?.item?.slice(1);

    return (
        <Layout
            sidebarRequired={false}
            maxW="9xl"
            breadCrumbsRequired={true}
            breadCrumbsPath={itemName}
        >
            <Grid
                templateColumns={
                    isMobileView ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'
                }
                gap={3}
                mb="16"
                w="full"
            >
                {data?.map((item, i) => {
                    return (
                        <GenericItemCard
                            key={i}
                            height={isMobileView ? '125px' : '320px'}
                            info={item}
                            extension="jpg"
                        />
                    );
                })}
            </Grid>
        </Layout>
    );
};

export default Item;
