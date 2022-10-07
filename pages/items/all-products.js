import React from 'react';
import { shorts } from '../../utils/shorts';
import { sweatShirts } from '../../utils/sweatshirts';
import { trousers } from '../../utils/trousers';
import { tshirts } from '../../utils/tshirts';
import Layout from '../../components/Layout';
import NewGenericItemCard from '../../components/NewGenericCardItem';
import { useBreakpointValue, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const AllProducts = () => {
    const [allItems, setAllItems] = React.useState([]);
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const router = useRouter();

    React.useState(() => {
        setAllItems([...shorts, ...sweatShirts, ...trousers, ...tshirts]);
    }, []);

    return (
        <Layout
            sidebarRequired={false}
            maxW="9xl"
            breadCrumbsRequired={true}
            breadCrumbsPath={'All-products'}
        >
            <Grid
                templateColumns={
                    isMobileView ? 'repeat(1, 1fr)' : 'repeat(4, 1fr)'
                }
                gap={3}
                mb="16"
                w="full"
            >
                {allItems?.map((item, index) => {
                    return (
                        <NewGenericItemCard
                            key={index}
                            height={isMobileView ? '250px' : '320px'}
                            info={item}
                            extension="jpg"
                        />
                    );
                })}
            </Grid>
        </Layout>
    );
};

export default AllProducts;
