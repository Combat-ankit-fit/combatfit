import React from 'react';
import { useRouter } from 'next/router';
import ItemProvider from '../../context/ItemProvider';
import Layout from '../../components/Layout';
import CategoryItem from '../../components/CategoryItems';
import useSWR from 'swr';
import { Text } from '@chakra-ui/react';
import Seo from '../../components/Seo';

const ClothingCategory = () => {
    const [refinedClothingData, setRefinedClothingData] = React.useState([]);

    const router = useRouter();

    const { data: AllClothingData, error } = useSWR(
        '/api/get-items?id=clothing'
    );

    React.useEffect(() => {
        const queryParam = router?.query?.item;
        const relevantData =
            AllClothingData?.filter((val) => val?.category === queryParam) ||
            [];

        setRefinedClothingData([...relevantData]);
    }, [router?.query?.item, AllClothingData]);

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
            <CategoryItem item={refinedClothingData} error={error} />
        </>
    );
};

export default ClothingCategory;
