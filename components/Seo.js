import { NextSeo } from 'next-seo';

const Seo = ({ title, description }) => {
    return <NextSeo title={title} description={description} />;
};

export default Seo;
