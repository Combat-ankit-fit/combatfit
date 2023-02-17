import React from 'react';
import Layout from '../components/Layout';
import { Text, Grid, GridItem, Box } from '@chakra-ui/react';
import NextImage from 'next/image';

import useSWRImmutable from 'swr/immutable';

const Home = () => {
    useSWRImmutable('/api/get-items?id=beer');
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
