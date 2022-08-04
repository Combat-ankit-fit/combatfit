import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
    Text,
    Grid,
    GridItem,
    Box,
    Flex,
    Input,
    Textarea,
    Spacer,
    Divider,
    Button,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import ItemCard from '../components/ItemCard';

const ContactUs = () => {
    return (
        <Layout sidebarRequired={false}>
            <Flex>
                <Flex flexDirection={'row'} w="40%">
                    <Flex flexDirection={'column'} gridRowGap="8">
                        <Flex gridColumnGap={'4'}>
                            <FormControl>
                                <FormLabel fontSize={'xs'}>
                                    First Name*
                                </FormLabel>
                                <Input borderColor={'black'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={'xs'}>
                                    Last Name*
                                </FormLabel>
                                <Input borderColor={'black'} />
                            </FormControl>
                        </Flex>
                        <Flex gridColumnGap={'4'}>
                            <FormControl>
                                <FormLabel fontSize={'xs'}>
                                    Phone number*
                                </FormLabel>
                                <Input borderColor={'black'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={'xs'}>Email*</FormLabel>
                                <Input borderColor={'black'} />
                            </FormControl>
                        </Flex>
                        <FormControl>
                            <FormLabel fontSize={'xs'}>
                                Tell us about your requirement*
                            </FormLabel>
                            <Textarea
                                borderColor={'black'}
                                placeholder="Here is a sample placeholder"
                                size="sm"
                            />
                        </FormControl>
                        <Button width="40%" colorScheme="primary">
                            Submit
                        </Button>
                    </Flex>
                </Flex>
                <Spacer />
                <Flex
                    w="40%"
                    flexDirection={'column'}
                    bgColor="#696969"
                    p="4"
                    borderRadius={12}
                >
                    <Flex flexDirection={'column'} gridRowGap={'4'}>
                        <Text color="white">For customer Support</Text>
                        <Divider />
                        <Text color="white">combatfitwears@gmail.com</Text>
                        <Text color="white">+91 9719493210</Text>
                    </Flex>
                    <Flex flexDirection={'column'} gridRowGap={'4'}>
                        <Text color="white">Address</Text>
                        <Divider />
                        <Text color="white">Faridabad</Text>
                        <Text color="white">combatfitwears@gmail.com</Text>
                        <Text color="white">combatfitwears.com</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Layout>
    );
};

export default ContactUs;
