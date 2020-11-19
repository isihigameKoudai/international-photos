import * as React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { useRouter } from 'next/router'
import * as gtag from '../service/gtags';

const isPrd: boolean = process.env.NODE_ENV === 'production'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  React.useEffect(() => {

    const handleRouteChange = (url) => {
      if (isPrd) {
        gtag.pageview(url)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <title>international photos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon.icon"
          rel="icon"
          type="image/icon"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/favicon.icon"></link>
        <meta name="theme-color" content="#fefefe" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
