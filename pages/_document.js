import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="template-color-1 active-dark-mode">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
