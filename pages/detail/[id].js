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
import MobileViewDetail from '../../components/MobileViewDetail';
import { coffeeMugs } from '../../utils/mugs';
import { posters } from '../../utils/posters';
import { trousers } from '../../utils/trousers';
import { sweatShirts } from '../../utils/sweatshirts';
import { casualTshirts } from '../../utils/casual-tshirts';
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
    const [centralImage, setCentralImage] = React.useState(itemId);
    const [imageInfo, setImageInfo] = React.useState({});

    React.useEffect(() => {
        if (itemCategory === 'coffee-mugs') {
            const specificItem = coffeeMugs?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
        }

        if (itemCategory === 'posters') {
            const specificItem = posters?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
        }
        if (itemCategory === 'trousers') {
            const specificItem = trousers?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
        }
        if (itemCategory === 'sweatshirts') {
            const specificItem = sweatShirts?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
        }
        if (itemCategory === 'casual-tshirts') {
            const specificItem = casualTshirts?.filter(
                (item) => item?.name === itemId
            )[0];

            setSynonymousImages([...specificItem?.extraImages]);
            setImageInfo({ ...specificItem });
        }
    }, []);

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
                                        src={`/${item}.jpg`}
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
                            src={`/${centralImage}.jpg`}
                            height={700}
                            width={700}
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
