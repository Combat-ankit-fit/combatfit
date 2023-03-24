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
import useSWRImmutable from 'swr/immutable';
import getStripe from '../../../getStripe';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';

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
    const [itemQuantity, setItemQuantity] = React.useState(1);

    const { data: clothingData } = useSWRImmutable(
        '/api/get-items?id=clothing'
    );

    React.useEffect(() => {
        const specificItem =
            clothingData?.filter((item) => item?.identifier === itemId)[0] ||
            {};

        setCentralImage(specificItem?.name);
        setSynonymousImages([...(specificItem?.extraImages || [])]);
        setImageInfo({ ...specificItem });
    }, [clothingData, itemCategory, itemId]);

    if (isMobileView) {
        return <MobileViewDetail itemCategory={itemCategory} itemId={itemId} />;
    }

    const redirectToCheckout = async () => {
        const {
            data: { id },
        } = await axios.post('/api/checkout-sessions', {
            items: [
                {
                    price: imageInfo?.stripeId,
                    quantity: itemQuantity,
                },
            ],
        });

        const stripe = await getStripe();
        await stripe.redirectToCheckout({
            sessionId: id,
        });
    };

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
                                        height={200}
                                        width={200}
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
                            height={600}
                            width={600}
                            layout="fixed"
                        />
                    </Box>
                    <Flex flexDir={'column'} gridRowGap={2}>
                        <Text fontWeight={'bold'}>{imageInfo?.alt}</Text>
                        <Text>I guard the nation what is your super power</Text>
                        <Text>MRP:{imageInfo?.price}</Text>
                        <Text>Quantity</Text>

                        <NumberInput
                            defaultValue={1}
                            min={1}
                            max={1000}
                            onChange={(valueString) =>
                                setItemQuantity(valueString)
                            }
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>

                        <Button
                            colorScheme={'primary'}
                            bgColor="orange"
                            onClick={() => {
                                redirectToCheckout();
                            }}
                        >
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
