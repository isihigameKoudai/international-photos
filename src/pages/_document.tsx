import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GOOGLE_ANALYTICS_ID } from '../service/gtags'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="This is website for photographers which are post and challenge international photo competitions." />
          <link rel="canonical" href="https://international-photos.vercel.app/" />
          <meta property="og:title" content="international photos" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:url" content="https://international-photos.vercel.app/" />
          <meta property="og:image" content='https://international-photos.vercel.app/card.png' />
          <meta name="twitter:title" content="international photos" />
          <meta name="twitter:card" content='https://international-photos.vercel.app/card.png' />
          <meta name="twitter:description" content="This is website for photographers which are post and challenge international photo competitions." />
          <meta name="twitter:image" content='https://international-photos.vercel.app/card.png' />
          <link rel="dns-prefetch" href="https://international-photos.vercel.app/" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="144x144" />

          <script async src={`https://platform.twitter.com/widgets.js`} charSet="utf-8" />
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v9.0&appId=1704623379800034&autoLogAppEvents=1" nonce="qaEXiKQU" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });

            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "bvp5nosk2s");
          `,
            }}
          />
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
