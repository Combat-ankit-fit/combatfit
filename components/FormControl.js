import {
    FormControl as ChakraFormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react';
import { useField } from 'formik';

export const FormControl = ({ children, name, validate, label, ...rest }) => {
    const [, { error, touched }] = useField({ name, validate });
    console.log('Error here is:-', error);

    return (
        <ChakraFormControl isInvalid={!!error && touched} {...rest}>
            {label && <FormLabel fontSize={'xs'}>{label}</FormLabel>}

            {children}
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
        </ChakraFormControl>
    );
};

export default FormControl;
