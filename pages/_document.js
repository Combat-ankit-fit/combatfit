import { Double } from 'bson';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-B7EX051B1E"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: ` window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-B7EX051B1E', {
                        page_path: window.location.pathname
                    });`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
