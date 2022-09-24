import {
    Text,
    Grid,
    GridItem,
    Box,
    useBreakpointValue,
    Container,
    Flex,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import { coffeeMugs } from '../../utils/mugs';
import NextImage from 'next/image';

const ItemDetail = () => {
    const router = useRouter();

    const itemCategory = router?.query?.name;
    const itemId = router?.query?.id;
    console.log('Info coming is:-', itemCategory, itemId);
    const [allItems, setAllItems] = React.useState([]);
    const [synonumousImages, setSynonymousImages] = React.useState([]);
    const [centralImage, setCentralImage] = React.useState(itemId);
    const [imageInfo, setImageInfo] = React.useState({});
    console.log('Central image is:-', centralImage);

    React.useEffect(() => {
        if (itemCategory === 'coffee-mugs') {
            const specificItem = coffeeMugs?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
        } else {
            router.push('/');
        }
    }, []);

    return (
        <Layout
            sidebarRequired={false}
            maxW="9xl"
            breadCrumbsRequired={true}
            breadCrumbsPath={itemCategory}
            recurringItems={false}
        >
            <Container maxW="7xl">
                <Flex w="full">
                    <Flex flexDir={'column'} me="4">
                        {synonumousImages?.map((item) => {
                            return (
                                <NextImage
                                    src={`/${item}.jpg`}
                                    height={250}
                                    width={250}
                                    objectFit="cover"
                                    onClick={() => {
                                        console.log('fired');
                                        setCentralImage(item);
                                    }}
                                />
                            );
                        })}
                    </Flex>
                    <Box
                        id="image__container"
                        border={'1px solid black'}
                        height={801}
                        width={750}
                        me="3"
                    >
                        <NextImage
                            src={`/${centralImage}.jpg`}
                            height={795}
                            width={750}
                            objectFit="contain"
                            layout="fixed"
                        />
                    </Box>
                    <Flex flexDir={'column'} gridRowGap={3}>
                        <Text fontWeight={'bold'}>{imageInfo?.alt}</Text>
                        <Text>I guard the nation what is your super power</Text>
                        <Text>MRP:{imageInfo?.price}</Text>
                    </Flex>
                </Flex>
            </Container>
        </Layout>
    );
};

export default ItemDetail;
