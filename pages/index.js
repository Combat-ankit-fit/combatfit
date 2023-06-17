import React from 'react';
import LayoutNew from '../components/LayoutNew';

import useSWRImmutable from 'swr/immutable';

const Home = () => {
    useSWRImmutable('/api/get-items?id=beer');
    useSWRImmutable('/api/get-items?id=posters');
    useSWRImmutable('/api/get-items?id=notepad');
    useSWRImmutable('/api/get-items?id=coffee-mugs');

    useSWRImmutable('/api/get-items?id=whiskey');
    return <LayoutNew></LayoutNew>;
};

export default Home;
