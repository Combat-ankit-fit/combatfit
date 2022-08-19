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

const Header = () => {
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

                <Flex
                    justifyContent={'space-around'}
                    w="md"
                    gridColumnGap={6}
                    alignItems="baseline"
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

                    <Text color={'white'} flexShrink={0}>
                        Find Outlet
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
                                borderRadius: '0px',
                            }}
                        />
                        <InputRightElement
                            children={<SearchIcon color="black" />}
                        />
                    </InputGroup>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Header;
