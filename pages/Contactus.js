import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
    Text,
    Grid,
    GridItem,
    Box,
    Flex,
    Textarea,
    Spacer,
    Divider,
    Button,
    FormLabel,
    Container,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import ItemCard from '../components/ItemCard';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { InputControl, FormControl, TextAreaControl } from '../exporter';
import NextImage from 'next/image';
import React from 'react';
import { app, database } from '../firebase';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
    const [isRequestSubmitted, setRequestSubmitted] = React.useState(false);

    const submitHandler = async (values) => {
        setRequestSubmitted(true);

        await axios.post(
            'https://clothing-app-b7613-default-rtdb.firebaseio.com/queries.json',
            values
        );
    };

    const validate = Yup.object({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        phonenumber: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        description: Yup.string().required('Email is required'),
    });

    return (
        <Flex flexDirection={'column'}>
            <Header />
            <Container maxW="4xl">
                <Flex
                    id="first"
                    justifyContent={'center'}
                    alignItems="center"
                    height={'100vh'}
                >
                    <Flex
                        flexDirection={'row'}
                        w="40%"
                        {...(isRequestSubmitted && {
                            alignItems: 'center',
                        })}
                    >
                        <Formik
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                phonenumber: '',
                                email: '',
                                description: '',
                            }}
                            validationSchema={Yup.object().shape({
                                firstname: Yup.string().required(
                                    'This field is required'
                                ),
                                lastname: Yup.string().required(
                                    'This field is required'
                                ),
                                phonenumber: Yup.string().required(
                                    'This field is required'
                                ),
                                email: Yup.string()
                                    .email('Invalid email')
                                    .required('Required'),
                                description: Yup.string().required(
                                    'This field is required'
                                ),
                            })}
                            onSubmit={submitHandler}
                            enableReinitialize
                        >
                            {(formikProps) => {
                                return !isRequestSubmitted ? (
                                    <Form>
                                        <Flex
                                            flexDirection={'column'}
                                            gridRowGap="8"
                                        >
                                            <Flex gridColumnGap={'4'}>
                                                <InputControl
                                                    name="firstname"
                                                    label="First Name"
                                                />

                                                <InputControl
                                                    name="lastname"
                                                    label="Last Name"
                                                />
                                            </Flex>
                                            <Flex gridColumnGap={'4'}>
                                                <InputControl
                                                    name="phonenumber"
                                                    label="Phone Number"
                                                />
                                                <InputControl
                                                    name="email"
                                                    label="Email"
                                                />
                                            </Flex>

                                            <TextAreaControl
                                                name="description"
                                                label="Tell us about your requirement"
                                            />

                                            <Button
                                                type="submit"
                                                width="40%"
                                                colorScheme="primary"
                                            >
                                                Submit
                                            </Button>
                                        </Flex>
                                    </Form>
                                ) : (
                                    <Text textAlign={'center'}>
                                        Your request has submitted
                                    </Text>
                                );
                            }}
                        </Formik>
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
                            <Text
                                color="white"
                                textDecoration={'underline'}
                                cursor="pointer"
                            >
                                combatfitwears@gmail.com
                            </Text>
                            <Text color="white">+91 9719493210</Text>
                        </Flex>
                        <Flex flexDirection={'column'} gridRowGap={'4'}>
                            <Text color="white">Address</Text>
                            <Divider />
                            <Text color="white">Faridabad</Text>
                            <Text
                                color="white"
                                textDecoration={'underline'}
                                cursor="pointer"
                            >
                                combatfitwears@gmail.com
                            </Text>
                            <Text color="white">combatfitwears.com</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
            <Footer />
        </Flex>
    );
};

export default ContactUs;
