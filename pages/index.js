import React from 'react';
import LayoutNew from '../components/LayoutNew';
import Seo from '../components/Seo';

import useSWRImmutable from 'swr/immutable';

const Home = () => {
    useSWRImmutable('/api/get-items?id=beer');
    useSWRImmutable('/api/get-items?id=posters');
    useSWRImmutable('/api/get-items?id=notepad');
    useSWRImmutable('/api/get-items?id=coffee-mugs');

    useSWRImmutable('/api/get-items?id=whiskey');
    return (
        <>
            <Seo
                title={'CombatFit - Tactical and Active Clothing'}
                description="Deals in premium tactical, outdoor and active wear clothing and accessories with focus on military, police, outdoor and adventure enthusiasts"
            />
            <LayoutNew></LayoutNew>
        </>
    );
};

export default Home;
