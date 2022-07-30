import { Flex, HStack, Text, Button } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex
            as="footer"
            bgColor={'black'}
            position="absolute"
            bottom={0}
            w="full"
            p="4"
        >
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
