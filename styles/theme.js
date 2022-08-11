import { extendTheme } from '@chakra-ui/react';
import Text from './Text.theme';
import Button from './Button.theme';

const breakpoints = {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
};

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
    breakpoints,
});
