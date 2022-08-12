import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
    Text,
    Grid,
    GridItem,
    Box,
    useBreakpointValue,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import ItemCard from '../components/ItemCard';
import { data } from '../utils/data';

export default function Home() {
    const items = [...Array(40)];
    const isMobileView = useBreakpointValue({ base: true, md: false });

    return (
        <Layout sidebarRequired={true}>
            <Grid
                templateColumns={
                    isMobileView ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'
                }
                gap={3}
                mb="16"
                w="full"
            >
                {data.map((item, i) => {
                    return (
                        <ItemCard
                            height="200px"
                            name={item.name}
                            extension="jpg"
                        />
                    );
                })}
            </Grid>
        </Layout>
    );
}
