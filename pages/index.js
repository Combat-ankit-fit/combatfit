import React from 'react';
import Layout from '../components/Layout';

import useSWRImmutable from 'swr/immutable';

const Home = () => {
    useSWRImmutable('/api/get-items?id=beer');
    useSWRImmutable('/api/get-items?id=posters');
    return (
        <Layout
            sidebarRequired={false}
            firstImage={true}
            streamImages={true}
            secondImage={true}
            bottomGridImages={true}
            souvenirs={true}
            mugs={true}
            homepage={true}
        ></Layout>
    );
};

export default Home;
