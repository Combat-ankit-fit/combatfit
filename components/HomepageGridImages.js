import { Box, Button, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

const ItemCard = (props) => {
    const itemName = props.name;
    const extension = props.extension;
    const router = useRouter();

    return (
        <Box border="2px solid black">
            <Box
                display={'flex'}
                justifyContent="center"
                position="relative"
                overflow={'hidden'}
                cursor="pointer"
                {...(itemName === 3 && {
                    onClick: () => {
                        router.push('/items/coffee-mugs');
                    },
                })}
                {...(itemName === 2 && {
                    onClick: () => {
                        router.push('/items/all-items');
                    },
                })}
                {...(itemName === 1 && {
                    onClick: () => {
                        router.push('/items/all-items');
                    },
                })}
                {...(itemName === 4 && {
                    onClick: () => {
                        router.push('/items/posters');
                    },
                })}
                {...(itemName === 5 && {
                    onClick: () => {
                        router.push('/items/all-items');
                    },
                })}
                {...props}
            >
                <NextImage
                    src={`/${itemName}.${extension}`}
                    objectFit="contain"
                    height={'150px'}
                    width="150px"
                />
            </Box>
            <Flex
                flexDirection={'column'}
                gridRowGap={4}
                alignItems="center"
            ></Flex>
        </Box>
    );
};

export default ItemCard;
