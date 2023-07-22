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
import ItemProviderNonClothing from '../../context/ItemProviderNonClothing';
import Seo from '../../components/Seo';

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
        if (queryParam === 'whiskey') return false;
    };

    return (
        <React.Fragment>
            <Seo
                title={'Souvenirs Items'}
                description="CombatFit Coffee Mugs, Combat Fit Coffee Mugs, coffee mugs, coffee cup, starbucks cup, printed mugs,
            designer mugs, starbucks mugs, ceramic mug, coffee mug with lid, starbucks coffee mug, printed cup,
            custom mugs, coffee tumbler, travel coffee mug, photo on coffee mug, travel mug, ceramic cup, coffee
            glass, custom coffee mugs, self stirring mug, glass mugs, ceramic coffee mugs coffee mugs online
            paper coffee cup, gift mug, steel mug, Personalized coffee mugs, Unique coffee mugs, Travel coffee
            mugs, Ceramic coffee mugs, Insulated coffee mugs, Funny coffee mugs designs, Custom coffee mugs,
            Design your own coffee mug, Coffee Mug for office, Coffee Mug Price, Military Inspired Coffee Mug
            Designs CombatFit Beer Mugs, Combat Fit Beer Mugs, Frosted Beer Mug, beer glasses, beer mugs, beer mug
            glass, beer cup, wooden beer mug, beer stein, beer glasses online, drinking mug, beer glass types,
            custom beer mugs, beer goblet glass, plastic beer glasses, beer glass price, beer mugs online, kingfisher
            beer glass, carlsberg beer glass, mug beer, personalized beer mugs, pilsner beer glasses, big beer glass,
            bira beer glass, frosted beer mugs, beer glass filled from bottom, large beer mug, beer glass gift, Military
            inspired Beer Mug, Customized Beer Mugs, Beer Mugs Online, Personalized Beer Mugs, Frost Coated
            Beer Mug, Custom Beer Mugs, Novelty Beer Mugs, Custom Printed Beer Mugs, Beer Mug Design Ideas
            To Gift Combat Fit Whiskey glasses, CombatFit Whiskey Glasses, whiskey glasses, whiskey glass set, whiskey
            glass set of 6, whiskey decanter, crystal whiskey glasses, scotch glasses, decanter set, glencairn whisky
            glass, best whiskey glasses, shot of whiskey, types of whiskey glasses, whiskey glasses online, whiskey
            glass set of 2, glen cairn glasses, jack daniels glass, premium whiskey glasses, whiskey decanter set,
            personalised whiskey glass, unique whiskey glasses, old fashioned whiskey glasses, versace whiskey
            glasses, whiskey in glass, blenders pride glass, ocean whiskey glasses, whiskey highball Combatfit Motivational Poster, Combat Fit Motivational Poster, Inspirational posters, Motivational
            posters, Encouragement posters, Positive affirmations posters, Success posters, Goal setting posters, Growth mindset posters, Leadership posters, Teamwork posters, Entrepreneur posters, Motivational
            Poster for wall, Motivational Poster for students/office"
            />
            {queryParam === 'all-items' && (
                <ItemProvider>
                    <Layout
                        sidebarRequired={false}
                        maxW="9xl"
                        breadCrumbsRequired={true}
                        breadCrumbsPath={
                            itemName !== 'All-items' ? itemName : 'Clothing'
                        }
                        presentItem={queryParam}
                        recurringItems={true}
                    ></Layout>
                </ItemProvider>
            )}
            {queryParam !== 'all-items' && (
                <ItemProviderNonClothing>
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
                </ItemProviderNonClothing>
            )}
        </React.Fragment>
    );
};

export default Item;
