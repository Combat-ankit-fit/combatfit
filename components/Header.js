import { Box, Flex, List, Text, Container, useRadio } from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';
import router, { useRouter } from 'next/router';

const WhiteLink = styled.a`
    color: white;
`;

const Header = () => {
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
                <Text color={'white'}>Icon</Text>
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
