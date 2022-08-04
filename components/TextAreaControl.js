import { Textarea as ChakraTextArea } from '@chakra-ui/react';
import { useField } from 'formik';
import { FormControl } from '../exporter';

function Textarea(props) {
    const { name, label, ...rest } = props;
    const [field] = useField(name);

    return (
        <FormControl name={name} label={label} {...rest}>
            <ChakraTextArea {...field} name={name} />
        </FormControl>
    );
}

export default Textarea;
