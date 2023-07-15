import React from 'react';
import { useRouter } from 'next/router';
import ItemProvider from '../../context/ItemProvider';
import Layout from '../../components/Layout';
import CategoryItem from '../../components/CategoryItems';
import useSWR from 'swr';
import { Text } from '@chakra-ui/react';

const ClothingCategory = () => {
    const [refinedClothingData, setRefinedClothingData] = React.useState([]);

    const router = useRouter();

    const { data: AllClothingData, error } = useSWR(
        '/api/get-items?id=clothing'
    );

    React.useEffect(() => {
        const queryParam = router?.query?.item;
        const relevantData =
            AllClothingData?.filter((val) => val?.category === queryParam) ||
            [];

        setRefinedClothingData([...relevantData]);
    }, [router?.query?.item, AllClothingData]);

    return <CategoryItem item={refinedClothingData} error={error} />;
};

export default ClothingCategory;
