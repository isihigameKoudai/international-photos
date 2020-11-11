import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import card from '@/assets/img/card.png'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>international photos</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="This is website for photographers which are post and challenge international photo competitions." />
          <link rel="canonical" href="https://international-photos-git-main.koudaiishigame.vercel.app/" />
          <meta property="og:title" content="international photos" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:url" content="https://international-photos-git-main.koudaiishigame.vercel.app/" />
          <meta property="og:image" content={card} />
          <meta name="twitter:title" content="international photos" />
          <meta name="twitter:card" content={card} />
          <meta name="twitter:description" content="This is website for photographers which are post and challenge international photo competitions." />
          <meta name="twitter:image" content={card} />
          <link rel="dns-prefetch" href="https://international-photos-git-main.koudaiishigame.vercel.app/" />
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
