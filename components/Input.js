import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Input as ChakraInput } from '@chakra-ui/react';
import { FormControl } from '../exporter';

export function InputControl({ name, label, ...rest }) {
    const [field] = useField(name);

    return (
        <FormControl name={name} label={label} {...rest}>
            <ChakraInput {...field} id={name} autoComplete="off" />
        </FormControl>
    );
}

export const Input = ChakraInput;
export default Input;
