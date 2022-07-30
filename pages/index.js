import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Text, Grid, GridItem, Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ItemCard from '../components/ItemCard';

export default function Home() {
    const items = [...Array(16)];

    return (
        <Layout>
            <Grid templateColumns="repeat(4, 1fr)" gap={3} mb="16" w="full">
                {items.map((_, i) => {
                    return <ItemCard height="250px" bgColor="orange" />;
                })}
            </Grid>
        </Layout>
    );
}
