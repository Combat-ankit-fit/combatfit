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

import ItemProvider from '../../context/ItemProvider';

const Item = () => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const router = useRouter();

    const queryParam = router?.query?.item;
    const itemName =
        router?.query?.item?.charAt(0).toUpperCase() +
        router?.query?.item?.slice(1);

    const isSideBarRequired = () => {
        if (queryParam === 'trousers') return true;
        if (queryParam === 'tshirts') return true;
        if (queryParam === 'casual-tshirts') return true;
        if (queryParam === 'beer') return false;
        if (queryParam === 'coffee-mugs') return false;
        if (queryParam === 'posters') return false;
        if (queryParam === 'customized-clothing') return false;
        if (queryParam === 'millitary-clothing') return false;
        if (queryParam === 'notepads') return false;
        if (queryParam === 'keyrings') return false;
        if (queryParam === 'all-items') return true;
    };

    return (
        <ItemProvider>
            <Layout
                sidebarRequired={isSideBarRequired()}
                maxW="9xl"
                breadCrumbsRequired={true}
                breadCrumbsPath={
                    itemName !== 'All-items' ? itemName : 'Clothing'
                }
                presentItem={queryParam}
                recurringItems={true}
            ></Layout>
        </ItemProvider>
    );
};

export default Item;
