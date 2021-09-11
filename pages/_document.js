import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


    render() {
        return (
            <Html>
                <Head>
                    <title>Wells fargo</title>
                    <link rel="icon" href="/wellslogo.svg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument