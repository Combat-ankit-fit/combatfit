import {
    Text,
    Grid,
    GridItem,
    Box,
    useBreakpointValue,
    Container,
    Flex,
    Button,
    HStack,
    Input,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../../components/Layout';
import MobileViewDetail from '../../../components/MobileViewClothingDetail';
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
import { useShoppingCart } from '../../../context/CartProvider';
import Seo from '../../../components/Seo';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ItemDetail = () => {
    const router = useRouter();
    const isMobileView = useBreakpointValue({
        base: true,
        md: false,
        lg: false,
    });

    const [isZoomed, setIsZoomed] = React.useState(false);

    const handleZoomChange = React.useCallback((shouldZoom) => {
        setIsZoomed(shouldZoom);
    }, []);

    const { addItem, cartDetails } = useShoppingCart();

    const itemCategory = router?.query?.name;

    const itemId = router?.query?.id;
    const [synonumousImages, setSynonymousImages] = React.useState([]);
    const [centralImage, setCentralImage] = React.useState();
    const [imageInfo, setImageInfo] = React.useState({});
    const [itemQuantity, setItemQuantity] = React.useState(1);
    const [selectedSize, setSelectedSize] = React.useState(null);
    const [selectedSizeIndex, setSelectedSizeIndex] = React.useState(null);
    const [sizeAvailable, setSizeAvailable] = React.useState([]);

    const sizeArr = ['M', 'L', 'XL', 'XXL'];

    const { data: clothingData } = useSWRImmutable(
        '/api/get-items?id=clothing'
    );

    React.useEffect(() => {
        const specificItem =
            clothingData?.filter((item) => item?.identifier === itemId)[0] ||
            {};

        setCentralImage(specificItem?.name);
        setSynonymousImages([...(specificItem?.extraImages || [])]);
        setSizeAvailable(specificItem?.sizeVariant);
        setImageInfo({ ...specificItem });
    }, [clothingData, itemCategory, itemId]);

    if (isMobileView) {
        return <MobileViewDetail itemCategory={itemCategory} itemId={itemId} />;
    }

    const redirectToCheckout = async () => {
        const {
            data: { id },
        } = await axios.post('/api/checkout-session-clothing-buy', {
            items: [
                {
                    price: imageInfo?.stripeId,
                    quantity: itemQuantity,
                },
            ],
            metadata: {
                size: selectedSize,
                itemName: itemId,
            },
        });

        const stripe = await getStripe();
        await stripe.redirectToCheckout({
            sessionId: id,
        });
    };

    const handleOnAddToCart = () => {
        addItem(imageInfo, itemQuantity, selectedSize);
    };

    const getMaximumQuantityForSize = (size) => {
        if (size === 'M') return imageInfo?.MediumA || 10;
        if (size === 'L') return imageInfo?.LargeA || 10;
        if (size === 'XL') return imageInfo?.XLA || 10;
        if (size === 'XXL') return imageInfo?.XXLA || 10;
    };

    const isMaxLimitAchieved = (userSelectedSize) => {
        const item = cartDetails[itemId];
        if (
            item?.quantity + Number(itemQuantity) >=
                getMaximumQuantityForSize(userSelectedSize) &&
            userSelectedSize === item?.selectedSize
        )
            return true;
        else return false;
    };

    const getFeatureIcon = (feature) => {
        if (feature === 'Breathability')
            return 'https://storage.googleapis.com/clothing-app-b7613.appspot.com/breathability.png?GoogleAccessId=service-280253514387@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1688717105&Signature=EN5saf%2BhB5D6T2PylYEt2C5J%2BgGXBJFMb5vGTkENPylY/KZwZqHpgsI6sG%2BZqLkapf8Eq6IzZ8UXdgKQmXs8EwAHhzelI9HRtnigIQejOYm/rnUtAVC684T57J5ywD/wLpASddx/7TG3oVLvnBoDjPJj2Oyasu7YySPmqgLxIipf8cKCAKyu%2BKezDcuXC1A0Y8hLuWaLXHTSxdq6nL93mlD52QnHCwsOpsgtHCVylpkNJZUvDMnwiWQdD6uUQL1yZayYnUL0iwzumUMssG39pIztoRhIQT2UdvE71tWSA0bugMtAj4GxJ4oWQntkMyXqTlQCwQ8I8qzeRwakhbUoZw%3D%3D';
        if (feature === 'Durability')
            return 'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/durability.png?alt=media&token=af16a54a-6bc9-4166-87e9-bd72aca8c097';
        if (feature === 'Freedom of movement')
            return 'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/freedom-of-movement.png?alt=media&token=1e1d5730-f281-42b5-b0f2-591502288821';
        if (feature === 'Ergonomic designs')
            return 'https://storage.googleapis.com/clothing-app-b7613.appspot.com/breathability.png?GoogleAccessId=service-280253514387@gcp-sa-firebasestorage.iam.gserviceaccount.com&Expires=1688717105&Signature=EN5saf%2BhB5D6T2PylYEt2C5J%2BgGXBJFMb5vGTkENPylY/KZwZqHpgsI6sG%2BZqLkapf8Eq6IzZ8UXdgKQmXs8EwAHhzelI9HRtnigIQejOYm/rnUtAVC684T57J5ywD/wLpASddx/7TG3oVLvnBoDjPJj2Oyasu7YySPmqgLxIipf8cKCAKyu%2BKezDcuXC1A0Y8hLuWaLXHTSxdq6nL93mlD52QnHCwsOpsgtHCVylpkNJZUvDMnwiWQdD6uUQL1yZayYnUL0iwzumUMssG39pIztoRhIQT2UdvE71tWSA0bugMtAj4GxJ4oWQntkMyXqTlQCwQ8I8qzeRwakhbUoZw%3D%3D';
        return 'https://firebasestorage.googleapis.com/v0/b/clothing-app-b7613.appspot.com/o/ergonomic-designs.png?alt=media&token=68283ef3-9b79-4775-abac-3aaf91e6bb12';
    };

    return (
        <>
            <Seo
                title={'Clothing Items'}
                description="CombatFit polo tshirt, Combat Fit polo tshirt, polo tshirt, us polo t shirt, polo t shirts for men, collared t
        shirts, uspa tshirt, polotshirts, polo tshirt men, women&#39;s collared t shirt, polo neck t shirt, full sleeve polo
        t shirts, black polo t shirt, white polo t shirt, us polo t shirts for men, white collared t shirts, ralph lauren
        t shirts, polo t shirt for women, black collared t shirt, polo ralph, lauren t shirt, classic polo t shirts, polo t
        shirts for women, us polo assn t shirts, polo collar t shirt, lacoste t shirt mens, polo t shirts women, puma
        polo t shirt, Plain Polo T-shirt, Solid Cotton Polo T-shirt, Men’s Polo T-shirt, Polo T-shirts, Polo T-shirts for
        men, Polo T-shirt price, Polo T-shirt design, Polo T-shirt brands, Polo T-shirt half sleeve, Buy Polo T-shirt CombatFit Round neck tshirt, Combat Fit Round neck tshirt, round neck tshirt, round neck t shirt for
        men, white round neck t shirt, round neck t shirt for women, round neck full sleeve t shirt, black round
        neck t shirt, round neck shirts, round collar tshirt, round neck shirt mens, round collar t shirt, round t
        shirt, plain round neck t shirt, us polo round neck t shirt, round neck t shirt for ladies, jockey round neck
        t shirt, printed round neck t shirt, full round neck t shirt, cotton round neck t shirt, big round neck t shirt,
        Plain Round Neck T-shirts, Cotton Round Neck T-shirts, Slim Fit Round Neck T-shirts, Designer round
        neck T-shirts, Crew Neck T-shirts, Best round neck T-shirts, Men&#39;s round, neck T-shirts, Round Neck T-
        shirt, Round Neck T-shirt for Men, Round Neck T-shirt Olive Green round neck full sleeve t shirt for men,
        round neck cotton t shirt for men, puma round neck t shirt, solid round neck t shirt, round neck t shirt
        with blazer, striped round neck t shirt CombatFit Running Tshirt, Combat Fit running tshirt, full sleeve tshirt, full sleeve t shirt for men, full
        sleeve t shirt for women, full tshirt for men, black full sleeve t shirt, full sleeve collar t shirt, full hand
        tshirt, white full sleeve t shirt, full sleeve polo t shirts, tshirt full, full sleeve shirt for men, full neck tshirt,
        sports t shirts full sleeves, full sleeve t shirts with collar combo, couple t shirt full sleeve, full hand tshirt
        for men, oversized full sleeve t shirt, adidas full sleeve t shirt, puma full sleeve t shirt, nike t shirt full
        sleeve, jockey full sleeve t shirt, black full sleeve t shirt for women, round neck full sleeve t shirt, cotton
        full sleeve t shirt , full sleeve t shirt for men with collar CombatFit Tracksuits, Combat Fit Tracksuits, tracksuits, tracksuit for men, tracksuit pants, tracksuit for
        women, tracksuit pants womens, adidas tracksuit, shiv naresh tracksuit, girls tracksuit, adidas track
        pants, puma tracksuit, adidas tracksuit for men, nike tracksuit, boys tracksuits, mens nike tracksuit,
        adidas tracksuit women, ladies tracksuits, winter tracksuit for men, puma tracksuit men, reebok
        tracksuit, black track pants, sports tracksuit, sport sun tracksuit, tracksuit jacket, adidas originals
        tracksuit, puma tracksuit women CombatFit Cargo, Combat Fit Cargo, cargopants, cargos, cargos for men, cargos for women, black cargos,
        cargo lower for men, cargo lowers, mens black cargos, g star raw cargo, orange cargos, baggy cargos,
        best cargos, white cargos, green cargos, h&amp;m cargos, g star cargo, cargo denim, grey cargos, brown
        cargos, olive green cargos, beevee cargo, beige cargo, superdry cargos, t base cargo, mens cargos Combat Fit Camouflage Tshirt, Combatfit Camouflage Tshirt, camouflage tshirt, army print t shirt,
        camouflage shirt men, camouflage t shirt mens, camouflage t shirt womens, army print shirts, camo t
        shirt, camo shirt, women&#39;s camouflage shirts, camo t shirt mens, army print t shirt women&#39;s, army
        camouflage t shirt, camouflage full sleeve t shirt, camouflage polo t shirt, camouflage t shirt full sleeve,
        army print shirt women&#39;s, camouflage t shirt with collar, adidas camouflage t shirt, military camouflage t
        shirt, camo print t shirt, camouflage print t shirt, camouflage t shirt mens full sleeve, army print shirt
        men, blue camouflage t shirt, black camouflage t shirt, Camouflage T-shirts, Camouflage Round Neck T-
        shirts, Camouflage Cotton T-shirt, Camouflage Print T-shirts, Camo t-shirt men, Camouflage T-shirts
        Men, Military Camouflage Mens T-shirts, Army camouflage t-shirt, Green camouflage t-shirt, Men Olive
        Green Camouflage Printed Slim Fit Cotton T-shirt Combat Fit Pullover Fleece, Combatfit Pullover Fleece pullover, pullover for women, pullover sweater,
        pullover for men, zip jackets, sweater hoodie, pullover sweater women, mens pullover sweater, pullover
        t shirt, mens sweater hoodie, half zip sweatshirts, pullover top, pullover hoodie, pullover sweatshirt,
        pullover shirt, jumper jacket, pullover jacket, black pullover, pullover dress, pullover t shirt women&#39;s
        jumper sweater, white pullover, simplicity pullover sweater, womens pullover sweatshirts
        men&#39;s fleece pullover, under armour pullovers, columbia half zip fleece, patagonia pullover, nike,
        sportswear club fleece pullover hoodie, half zip fleece jacket, patagonia synchilla, quarter zip fleece,
        columbia pullover, bella canvas hoodie, mens quarter zip fleece, jordan flight hoodie, fleece half zip
        pullover, fleece pullover hoodie, jordan pullover hoodie , 1/4 zip pullover womens, nike men&#39;s
        sportswear club fleece pullover hoodie black, hooded half sweater for men, patagonia quarter zip,
        patagonia synchilla fleece Combatfit Fleece Jackets, Combat Fit Fleece Jackets, fleece jackets, mens fleece jacket, fleece jacket
        women, lined jacket, mens hooded fleece, mens fleece, uniqlo fleece jacket, polar fleece jacket,
        columbia fleece jacket, wildcraft fleece jacket, womens fleece hoodies, womens fleece, men&#39;s winter
        fleece inner jacket coats thick warm, kids fleece jacket, women fleece sweater, black fleece jacket Combat Fit Reversible Jacket, CombatFit Reversible Jacket, reversible jackets, reversible jacket mens,
        reversible jacket women, reversible bomber jacket, allen solly reversible jacket, reversible double sided
        jacket, peter england reversible jacket, double sided jacket men&#39;s, monte carlo reversible jacket,
        roadster reversible jacket, adidas reversible jacket, puma reversible jacket, wildcraft reversible jacket, us
        polo reversible jacket, octave reversible jacket, h&amp;m reversible jacket, reversible puffer jacket, double,
        sided jacket women&#39;s, allen solly jacket reversible, numero uno reversible jacket, reversible sleeveless
        jacket, reversible hoody, reversible double sided jacket women&#39;s, reversible bomber jacket men, okane
        reversible jacket Combatfit Windcheater, Combat Fit Windcheater, windcheater, windcheater for men, windcheater for
        women, mens windcheater jackets, adidas windcheater, decathlon windcheater, nike windcheater,
        windcheater for rain, wildcraft windcheater, puma windcheater, windcheater for bike, windcheater for
        winter, waterproof windcheater, white windcheater, hrx windcheater, zeel windcheater, quechua
        windcheater, reebok wind cheater, best windcheater for bikers, monte carlo windcheater, ladies
        windcheater, windcheater for summer, woodland windcheater, allen solly windcheater, shiv naresh
        windcheater"
            />
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
                                            height={120}
                                            width={120}
                                            objectFit="contain"
                                            onClick={() => {
                                                setCentralImage(item);
                                            }}
                                        />
                                    </Box>
                                );
                            })}
                        </Flex>
                        <Box
                            id="image__container"
                            height={700}
                            width={700}
                            me="3"
                        >
                            {' '}
                            <ControlledZoom
                                isZoomed={isZoomed}
                                onZoomChange={handleZoomChange}
                            >
                                <NextImage
                                    src={centralImage}
                                    height={500}
                                    width={400}
                                    layout="fixed"
                                />
                            </ControlledZoom>
                        </Box>
                        <Flex flexDir={'column'} gridRowGap={6}>
                            <Text fontWeight={'bold'}>{imageInfo?.alt}</Text>

                            <Text>Price: Rs. {imageInfo?.price}</Text>
                            {imageInfo?.original && (
                                <Text textDecoration={'line-through'}>
                                    MRP: Rs. {imageInfo?.original}
                                </Text>
                            )}
                            <Flex alignItems={'baseline'} gridColumnGap={2}>
                                <Text>Size:</Text>
                                {sizeAvailable?.map((size, index) => {
                                    return (
                                        <Box
                                            me={2}
                                            key={index}
                                            p={2}
                                            width="60px"
                                            border="1px solid black"
                                            cursor={'pointer'}
                                            onClick={() => {
                                                setSelectedSize(size);
                                                setSelectedSizeIndex(index);
                                                setItemQuantity(1);
                                            }}
                                            {...(index ===
                                                selectedSizeIndex && {
                                                bgColor: 'orange',
                                            })}
                                        >
                                            {size}
                                        </Box>
                                    );
                                })}
                            </Flex>
                            <Text>Quantity</Text>

                            <NumberInput
                                defaultValue={1}
                                min={1}
                                max={20}
                                value={itemQuantity}
                                onChange={(valueString) => {
                                    setItemQuantity(valueString);
                                }}
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
                                onClick={handleOnAddToCart}
                                disabled={
                                    selectedSize === null ||
                                    itemQuantity === 0 ||
                                    imageInfo?.availability === 'no'
                                }
                            >
                                Add to cart
                            </Button>

                            <Button
                                colorScheme={'primary'}
                                bgColor="orange"
                                onClick={() => {
                                    redirectToCheckout();
                                }}
                                disabled={
                                    selectedSize === null ||
                                    itemQuantity === 0 ||
                                    imageInfo?.availability === 'no'
                                }
                            >
                                Buy Now
                            </Button>
                            {imageInfo?.availability === 'no' && (
                                <Text color="red" textAlign={'center'}>
                                    This Item is Out of Stock
                                </Text>
                            )}
                        </Flex>
                    </Flex>
                    <Text fontWeight={'bold'}>Made For</Text>
                    {imageInfo?.description && (
                        <Text mb={20}>{imageInfo?.description}</Text>
                    )}

                    <Grid templateColumns="repeat(2, 1fr)" gap={2} mb="2">
                        <Flex flexDirection={'column'}>
                            <Text fontWeight="bold" fontSize={'xl'} mb={10}>
                                Product Features
                            </Text>
                            {imageInfo?.features?.map((feature, index) => {
                                return (
                                    <HStack key={index}>
                                        <NextImage
                                            src={getFeatureIcon(feature)}
                                            objectFit="contain"
                                            width={'20px'}
                                            height="20px"
                                        />
                                        <Text fontSize={'lg'}>{feature}</Text>
                                    </HStack>
                                );
                            })}
                        </Flex>
                        <Flex flexDirection={'column'} alignItems="baseline">
                            <Text
                                textAlign="center"
                                fontWeight="bold"
                                fontSize={'xl'}
                                mb={10}
                            >
                                Product Specifications:
                            </Text>
                            {imageInfo?.specification?.map(
                                (specification, index) => {
                                    return (
                                        <HStack key={index}>
                                            <NextImage
                                                src="/specification.jpg"
                                                objectFit="contain"
                                                width={'20px'}
                                                height="20px"
                                            />
                                            <Text fontSize={'lg'}>
                                                {specification}
                                            </Text>
                                        </HStack>
                                    );
                                }
                            )}
                        </Flex>
                    </Grid>
                </Container>
            </Layout>
        </>
    );
};

export default ItemDetail;
