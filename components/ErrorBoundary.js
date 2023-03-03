import { Button, chakra, Heading, VStack } from '@chakra-ui/react';
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log({ error });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <chakra.div as="main">
                    <VStack
                        justify={'center'}
                        spacing={4}
                        as="section"
                        textAlign={'center'}
                    >
                        <Heading>Something went wrong!</Heading>
                        <Button
                            colorScheme={'primary'}
                            onClick={() => {
                                window.location.replace('/');
                            }}
                        >
                            Retry
                        </Button>
                    </VStack>
                </chakra.div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
