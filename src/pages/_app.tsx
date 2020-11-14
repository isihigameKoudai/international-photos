import * as React from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { useRouter } from 'next/router'
import * as gtag from '../service/gtags.ts';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  React.useEffect(() => {
    console.log("useEffect");

    const handleRouteChange = (url) => {
      gtag.pageview(url)
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
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
