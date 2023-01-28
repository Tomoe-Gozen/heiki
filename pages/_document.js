import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from '../config.json'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {config.googleAnalyticsId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.googleAnalyticsId}', {
                  page_path: window.location.pathname,
                });
              `
                }}
              />
            </>
          )}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Comforter&amp;display=swap"
            rel="stylesheet"
          ></link>
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
