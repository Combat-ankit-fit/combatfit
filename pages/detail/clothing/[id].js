import {
    Text,
    Grid,
    GridItem,
    Box,
    useBreakpointValue,
    Container,
    Flex,
    Button,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../../components/Layout';
import MobileViewDetail from '../../../components/MobileViewDetail';
import axios from 'axios';
import NextImage from 'next/image';

const ItemDetail = () => {
    const router = useRouter();
    const isMobileView = useBreakpointValue({
        base: true,
        md: false,
        lg: false,
    });

    const itemCategory = router?.query?.name;

    const itemId = router?.query?.id;
    const [synonumousImages, setSynonymousImages] = React.useState([]);
    const [centralImage, setCentralImage] = React.useState();
    const [imageInfo, setImageInfo] = React.useState({});

    const getSpecificClothingItem = async () => {
        const clothingItems = await axios.get('/api/get-items?id=clothing');
        const specificItem =
            clothingItems?.data?.filter(
                (item) => item?.identifier === itemId
            )[0] || [];
        setCentralImage(specificItem?.name);

        setSynonymousImages([...(specificItem?.extraImages || [])]);
        setImageInfo({ ...specificItem });
    };

    React.useEffect(() => {
        getSpecificClothingItem();
    }, [itemCategory, itemId]);

    if (isMobileView) {
        return <MobileViewDetail itemCategory={itemCategory} itemId={itemId} />;
    }

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
                        {synonumousImages?.map((item, index) => {
                            return (
                                <Box mb="4" cursor={'pointer'} key={index}>
                                    <NextImage
                                        src={item}
                                        height={250}
                                        width={250}
                                        objectFit="contain"
                                        onClick={() => {
                                            setCentralImage(item);
                                        }}
                                    />
                                </Box>
                            );
                        })}
                    </Flex>
                    <Box id="image__container" height={700} width={700} me="3">
                        <NextImage
                            src={centralImage}
                            height={700}
                            width={700}
                            layout="fixed"
                        />
                    </Box>
                    <Flex flexDir={'column'} gridRowGap={8}>
                        <Text fontWeight={'bold'}>{imageInfo?.alt}</Text>
                        <Text>I guard the nation what is your super power</Text>
                        <Text>MRP:{imageInfo?.price}</Text>
                        <Button colorScheme={'primary'} bgColor="orange">
                            Add to Cart
                        </Button>
                        <Button colorScheme={'primary'} bgColor="orange">
                            Buy Online
                        </Button>
                    </Flex>
                </Flex>
                <Text fontWeight={'bold'}>Product Description</Text>
                <Text>
                    Our team has designed this basic, aka The centrepiee of any
                    outfit, for you to wear bith forexercise and for everyday
                    life. A must-have fitness basic for dressing up or down.
                </Text>
            </Container>
        </Layout>
    );
};

export default ItemDetail;
