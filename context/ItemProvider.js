import React from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import useSWRImmutable from 'swr/immutable';

export const ItemContext = React.createContext({
    getItemsOnFitBasis: () => {},
    getItemsOnSizeBasis: () => {},
    getItemsOnColorBasis: () => {},
    selectedItems: [],
    itemName: '',
    name: '',
});

const ItemProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [refinedItems, setRefinedItems] = React.useState([]);
    const [size, setSize] = React.useState('Medium');
    const [fit, setFit] = React.useState();

    const router = useRouter();

    const { data: clothingData } = useSWRImmutable(
        '/api/get-items?id=clothing'
    );

    React.useEffect(() => {
        setSelectedItems(clothingData);
        setRefinedItems(clothingData);
    }, [clothingData]);

    const itemName =
        router?.query?.item?.charAt(0).toUpperCase() +
        router?.query?.item?.slice(1);

    const getItemsOnFitBasis = (fitType) => {
        const allItems = [...selectedItems];
        setFit(fitType.toLowerCase());
        setSize(null);

        const particularFitItems = allItems?.filter(
            (val) => val?.fit === fitType.toLowerCase()
        );

        setRefinedItems([...particularFitItems]);
        return;
    };

    const getItemsOnSizeBasis = (size) => {
        const allItems = [...selectedItems];
        setSize(size);
        setFit(null);
        const particularSizeItems = allItems?.filter(
            (val) => val?.size === size
        );

        setRefinedItems([...particularSizeItems]);
    };

    const getItemsOnColorBasis = (color) => {
        const allItems = [...selectedItems];
        const particularColorItems = allItems?.filter(
            (val) => val?.color === color
        );

        setSelectedItems([...particularColorItems]);
        setRefinedItems([...particularColorItems]);
    };

    return (
        <ItemContext.Provider
            value={{
                getItemsOnFitBasis: getItemsOnFitBasis,
                getItemsOnSizeBasis: getItemsOnSizeBasis,
                getItemsOnColorBasis: getItemsOnColorBasis,
                selectedItems: refinedItems,
                itemName: itemName,
                name: 'Vaibhav',
                size,
                fit,
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;
