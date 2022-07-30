import { Box, Flex, List, Text, Container } from '@chakra-ui/react';

const Header = () => {
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
                    <Text color={'white'}>Home</Text>
                    <Text color={'white'}>Find Outlet</Text>
                    <Text color={'white'}>Download Catalogue</Text>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Header;
