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
    const [selectedItems, setSelectedItems] = React.useState([]);

    const queryParam = router?.query?.item;

    React.useEffect(() => {
        if (queryParam === 'beer') {
            setSelectedItems([...beerMugs]);
        }

        if (queryParam === 'coffee-mugs') {
            setSelectedItems([...coffeeMugs]);
        }
        if (queryParam === 'trousers') {
            setSelectedItems([...trousers]);
        }
    }, [queryParam]);

    const itemName =
        router?.query?.item?.charAt(0).toUpperCase() +
        router?.query?.item?.slice(1);

    const getItemsOnFitBasis = (fitType) => {
        if (queryParam === 'trousers') {
            const allItems = [...trousers];
            const particularFitItems = allItems?.filter(
                (val) => val?.fit === fitType.toLowerCase()
            );
            setSelectedItems([...particularFitItems]);
            return;
        }
    };

    const getItemsOnSizeBasis = (size) => {
        if (queryParam === 'trousers') {
            const allItems = [...trousers];
            const particularSizeItems = allItems?.filter(
                (val) => val?.size === size
            );

            setSelectedItems([...particularSizeItems]);
        }
    };

    const getItemsOnColorBasis = (color) => {
        if (queryParam === 'trousers') {
            const allItems = [...trousers];
            const particularColorItems = allItems?.filter(
                (val) => val?.color === color
            );

            setSelectedItems([...particularColorItems]);
        }
    };

    const isSideBarRequired = () => {
        if (queryParam === 'trousers') return true;
        if (queryParam === 'beer') return false;
        if (queryParam === 'coffee-mugs') return false;
    };

    return (
        <Layout
            sidebarRequired={isSideBarRequired()}
            maxW="9xl"
            breadCrumbsRequired={true}
            breadCrumbsPath={itemName}
            presentItem={queryParam}
            getItemsOnFitBasis={getItemsOnFitBasis}
            getItemsOnSizeBasis={getItemsOnSizeBasis}
            getItemsOnColorBasis={getItemsOnColorBasis}
        >
            <Grid
                templateColumns={
                    isMobileView ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'
                }
                gap={3}
                mb="16"
                w="full"
            >
                {selectedItems?.map((item, i) => {
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
