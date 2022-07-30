import { extendTheme } from '@chakra-ui/react';
import Text from './Text.theme';
import Button from './Button.theme';

export const theme = extendTheme({
    colors: {
        brand: {
            100: '#f7fafc',
            900: '#FFA500',
        },
    },
    components: {
        Text,
        Button,
    },
});
