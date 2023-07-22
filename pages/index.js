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
                title={'Conbatfit Homepage'}
                description="Combat Fit T shirt, Combatfit tshirt, army t shirt, olive green t shirt, army t shirt for men, military t shirts,
            men army tshirt, army tshirt, olive green tshirt for women, t shirt special forces, army green t shirt, army
            print t shirt, para sf t shirt, army color t shirt, olive t shirts, army t shirt full, army t shirt commando, olive
            green t shirt mens, womens olive green t shirt, army colored shirt, army t shirt flipkart, bts army t shirt,
            para commando t shirt, army full sleeve t shirt, olive color t shirt, us army t shirt, army running t shirt"
            />
            <LayoutNew></LayoutNew>
        </>
    );
};

export default Home;
