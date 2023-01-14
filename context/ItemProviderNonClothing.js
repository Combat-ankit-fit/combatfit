import React from 'react';
import { useRouter } from 'next/router';
import { trousers } from '../utils/trousers';
import { beerMugs } from '../utils/beer';
import { coffeeMugs } from '../utils/mugs';
import { tshirts } from '../utils/tshirts';
import { casualTshirts } from '../utils/casual-tshirts';
import { posters } from '../utils/posters';
import { customizedClothing } from '../utils/customized-clothing';
import { millitaryClothing } from '../utils/millitary-clothing';
import { shorts } from '../utils/shorts';
import { sweatShirts } from '../utils/sweatshirts';
import { notepad } from '../utils/notepad';
import { keyrings } from '../utils/keyrings';
import { allClothings } from '../utils/all-items';

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
    const router = useRouter();
    const queryParam = router?.query?.item;

    const itemName =
        router?.query?.item?.charAt(0).toUpperCase() +
        router?.query?.item?.slice(1);

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
        if (queryParam === 'tshirts') {
            setSelectedItems([...tshirts]);
        }
        if (queryParam === 'casual-tshirts') {
            setSelectedItems([...casualTshirts]);
        }
        if (queryParam === 'posters') {
            setSelectedItems([...posters]);
        }
        if (queryParam === 'customized-clothing') {
            setSelectedItems([...customizedClothing]);
        }
        if (queryParam === 'millitary-clothing') {
            setSelectedItems([...millitaryClothing]);
        }
        if (queryParam === 'shorts') {
            setSelectedItems([...shorts]);
        }
        if (queryParam === 'sweatshirts') {
            setSelectedItems([...sweatShirts]);
        }
        if (queryParam === 'notepads') {
            setSelectedItems([...notepad]);
        }
        if (queryParam === 'keyrings') {
            setSelectedItems([...keyrings]);
        }
        if (queryParam === 'all-items') {
            setSelectedItems([...allClothings]);
        }
    }, [queryParam]);

    const getItemsOnFitBasis = (fitType) => {
        if (queryParam === 'trousers') {
            const allItems = [...trousers];
            const particularFitItems = allItems?.filter(
                (val) => val?.fit === fitType.toLowerCase()
            );
            setSelectedItems([...particularFitItems]);
            return;
        }
        if (queryParam === 'tshirts') {
            const allItems = [...tshirts];
            const particularFitItems = allItems?.filter(
                (val) => val?.fit === fitType.toLowerCase()
            );
            setSelectedItems([...particularFitItems]);
            return;
        }
        if (queryParam === 'casual-tshirts') {
            const allItems = [...casualTshirts];
            const particularFitItems = allItems?.filter(
                (val) => val?.fit === fitType.toLowerCase()
            );
            setSelectedItems([...particularFitItems]);
            return;
        }
        if (queryParam === 'shorts') {
            const allItems = [...shorts];
            const particularFitItems = allItems?.filter(
                (val) => val?.fit === fitType.toLowerCase()
            );
            setSelectedItems([...particularFitItems]);
            return;
        }
        if (queryParam === 'sweatshirts') {
            const allItems = [...sweatShirts];
            const particularFitItems = allItems?.filter(
                (val) => val?.fit === fitType.toLowerCase()
            );
            setSelectedItems([...particularFitItems]);
            return;
        }
        if (queryParam === 'all-items') {
            const allItems = [...allClothings];
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
        if (queryParam === 'tshirts') {
            const allItems = [...tshirts];
            const particularSizeItems = allItems?.filter(
                (val) => val?.size === size
            );

            setSelectedItems([...particularSizeItems]);
        }
        if (queryParam === 'casual-tshirts') {
            const allItems = [...casualTshirts];
            const particularSizeItems = allItems?.filter(
                (val) => val?.size === size
            );

            setSelectedItems([...particularSizeItems]);
        }
        if (queryParam === 'shorts') {
            const allItems = [...shorts];
            const particularSizeItems = allItems?.filter(
                (val) => val?.size === size
            );

            setSelectedItems([...particularSizeItems]);
        }
        if (queryParam === 'sweatshirts') {
            const allItems = [...sweatShirts];
            const particularSizeItems = allItems?.filter(
                (val) => val?.size === size
            );

            setSelectedItems([...particularSizeItems]);
        }
        if (queryParam === 'all-items') {
            const allItems = [...allClothings];
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
        if (queryParam === 'tshirts') {
            const allItems = [...tshirts];
            const particularColorItems = allItems?.filter(
                (val) => val?.color === color
            );

            setSelectedItems([...particularColorItems]);
        }
        if (queryParam === 'casual-tshirts') {
            const allItems = [...casualTshirts];
            const particularColorItems = allItems?.filter(
                (val) => val?.color === color
            );

            setSelectedItems([...particularColorItems]);
        }
        if (queryParam === 'shorts') {
            const allItems = [...shorts];
            const particularColorItems = allItems?.filter(
                (val) => val?.color === color
            );

            setSelectedItems([...particularColorItems]);
        }
        if (queryParam === 'sweatshirts') {
            const allItems = [...sweatShirts];
            const particularColorItems = allItems?.filter(
                (val) => val?.color === color
            );

            setSelectedItems([...particularColorItems]);
        }
        if (queryParam === 'all-items') {
            const allItems = [...allClothings];
            const particularColorItems = allItems?.filter(
                (val) => val?.color === color
            );

            setSelectedItems([...particularColorItems]);
        }
    };

    console.log('selectedItems are:-', selectedItems);

    return (
        <ItemContext.Provider
            value={{
                getItemsOnFitBasis: getItemsOnFitBasis,
                getItemsOnSizeBasis: getItemsOnSizeBasis,
                getItemsOnColorBasis: getItemsOnColorBasis,
                selectedItems: selectedItems,
                itemName: itemName,
                name: 'Vaibhav',
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;
