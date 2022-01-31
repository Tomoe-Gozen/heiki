import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="robots" content="noindex, follow" />
          <meta name="description" content="" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/images/favicon.png"
          />
        </Head>
        <body className="template-color-1 active-dark-mode">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
