import {
    Box,
    Flex,
    List,
    Text,
    Container,
    useRadio,
    useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';
import router, { useRouter } from 'next/router';
import NextImage from 'next/image';

const WhiteLink = styled.a`
    color: white;
`;

const Header = () => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const router = useRouter();
    return (
        <Container
            maxW={'full'}
            height="56px"
            bgColor={'black'}
            borderBottom="2px solid white"
            position={'fixed'}
            maxH="60px"
            zIndex={'modal'}
        >
            <Flex
                flexDirection={'row'}
                justifyContent="space-between"
                h="full"
                alignItems={'center'}
            >
                <Box
                    onClick={() => {
                        router.push('/');
                    }}
                    cursor="pointer"
                >
                    <NextImage src="/logo.png" height="40px" width="90px" />
                </Box>

                <Flex justifyContent={'space-around'} w="xs">
                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        Home
                    </Text>

                    <Text color={'white'}>Find Outlet</Text>
                    <Text color={'white'}>Download Catalogue</Text>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Header;
