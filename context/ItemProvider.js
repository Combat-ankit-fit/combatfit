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
import axios from 'axios';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

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

    const fetchPost = async () => {
        await getDocs(collection(db, 'items')).then((querySnapshot) => {
            const newData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setSelectedItems([...newData]);
            setRefinedItems([...newData]);
        });
    };

    React.useEffect(() => {
        fetchPost();
    }, []);

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
