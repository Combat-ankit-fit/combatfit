import {
    Box,
    Flex,
    List,
    Text,
    Container,
    useRadio,
    useBreakpointValue,
    InputGroup,
    InputRightElement,
    Input,
    color,
} from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';
import router, { useRouter } from 'next/router';
import NextImage from 'next/image';
import { InputControl, FormControl, TextAreaControl } from '../exporter';
import { SearchIcon } from '@chakra-ui/icons';

const WhiteLink = styled.a`
    color: white;
`;

const Header = ({ breadCrumbsRequired, breadCrumbsPath }) => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const router = useRouter();
    return (
        <Container
            maxW={'full'}
            height="56px"
            bgColor={'black'}
            position={'fixed'}
            maxH="60px"
            zIndex={'modal'}
            px="0"
        >
            <Flex
                flexDirection={'row'}
                justifyContent="space-between"
                h="full"
                alignItems={'center'}
                px="4"
            >
                <Box
                    onClick={() => {
                        router.push('/');
                    }}
                    cursor="pointer"
                >
                    <NextImage src="/logo.png" height="30px" width="110px" />
                </Box>

                <Flex
                    justifyContent={'space-around'}
                    w="2xl"
                    gridColumnGap={6}
                    alignItems="center"
                >
                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        Home
                    </Text>
                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/clothing');
                        }}
                    >
                        Clothing
                    </Text>

                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/items/coffee-mugs');
                        }}
                    >
                        Souvenirs
                    </Text>
                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/items/customized-clothing');
                        }}
                    >
                        Customized
                    </Text>

                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/vision');
                        }}
                    >
                        Vision
                    </Text>
                    <Text
                        color="white"
                        cursor={'pointer'}
                        onClick={() => {
                            router.push('/contact-us');
                        }}
                        whiteSpace="pre"
                    >
                        Contact Us
                    </Text>

                    <InputGroup>
                        <Input
                            placeholder="Search Product"
                            name="search"
                            bgColor={'orange'}
                            _placeholder={{
                                color: 'black',
                            }}
                            sx={{
                                borderRadius: '4px',
                            }}
                        />
                    </InputGroup>
                </Flex>
            </Flex>
            {breadCrumbsRequired && (
                <Box
                    id="part"
                    height={'40px'}
                    bgColor="orange"
                    w="full"
                    display={'flex'}
                    px="4"
                    alignItems={'center'}
                >
                    <Text
                        color="white"
                        onClick={() => {
                            router.push('/');
                        }}
                        sx={{
                            _hover: {
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            },
                        }}
                    >
                        Home
                    </Text>
                    <Text color="white">&gt; {breadCrumbsPath}</Text>
                </Box>
            )}
        </Container>
    );
};

export default Header;
