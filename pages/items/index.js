import React from 'react';
import { useRouter } from 'next/router';

const Items = () => {
    const router = useRouter();
    React.useEffect(() => {
        router.push('/');
    }, []);

    return null;
};

export default Items;
