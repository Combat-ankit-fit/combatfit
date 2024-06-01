import React from 'react';
import LayoutNew from '../components/LayoutNew';
import Seo from '../components/Seo';
import Head from 'next/head';

import useSWRImmutable from 'swr/immutable';

const Home = () => {
    useSWRImmutable('/api/get-items?id=beer');
    useSWRImmutable('/api/get-items?id=posters');
    useSWRImmutable('/api/get-items?id=notepad');
    useSWRImmutable('/api/get-items?id=coffee-mugs');

    useSWRImmutable('/api/get-items?id=clothing');

    useSWRImmutable('/api/get-items?id=whiskey');
    return (
        <>
            <Seo
                title={'CombatFit - Tactical and Active Clothing'}
                description="Deals in premium tactical, outdoor and active wear clothing and accessories with focus on military, police, outdoor and adventure enthusiasts"
            />
            <Head>
                <meta name="google-site-verification" content="jTDIB1RkEUtE-xfMvqU5flltZB4x3b7zPkSjoYVd7lc" />
            </Head>
            <LayoutNew></LayoutNew>
        </>
    );
};

export default Home;
