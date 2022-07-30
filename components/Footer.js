import { Flex, HStack, Text, Button } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex as="footer" bgColor={'black'} bottom={0} w="100%" p="4">
            <Flex
                justifyContent={'space-between'}
                w="full"
                alignItems={'baseline'}
            >
                <Text color="white">Need Support?</Text>
                <Button colorScheme="primary" color="black">
                    Contact us
                </Button>
            </Flex>
        </Flex>
    );
};

export default Footer;
