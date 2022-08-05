import { Flex, HStack, Text, Button, Portal } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();
    return (
        <Flex
            as="footer"
            bgColor={'black'}
            bottom={0}
            w="100%"
            p="4"
            marginTop="50px"
            position={'relative'}
        >
            <Flex
                justifyContent={'space-between'}
                w="full"
                alignItems={'baseline'}
            >
                <Text color="white">Need Support?</Text>
                <Button
                    colorScheme="primary"
                    color="black"
                    onClick={() => {
                        router.push('/Contactus');
                    }}
                >
                    Contact us
                </Button>
            </Flex>
        </Flex>
    );
};

export default Footer;
