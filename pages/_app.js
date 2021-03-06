import React, {useEffect, useState, Suspense, startTransition} from 'react'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.css'
import '../styles/style.css'
import dynamic from 'next/dynamic';

const Loader = dynamic(
  () => import('../components/loader/loader'),
  { suspense: true }
);

function MyApp({ Component, pageProps }) {
  const [mobileDevice, setMobileDevice] = useState(false);
  const [desktopDevice, setDesktopDevice] = useState(false);

  useEffect(() => {
      const mobile = window.matchMedia('(max-width: 768px)')
      if (mobile.matches) {
        mobile.addEventListener('change', () =>{})
        startTransition(()=> {setMobileDevice(true);});
      } else {
        startTransition(()=> {setDesktopDevice(true)});
      }
  }, [mobileDevice, desktopDevice])

  return (
    <>
      <Head>
        <title>Rucher Frisson</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Suspense fallback={`loading`}>
        <Loader
          mobileDevice={mobileDevice}
          desktopDevice={desktopDevice}
        />
      </Suspense>
      <Layout
        desktopDevice={desktopDevice}
        mobileDevice={mobileDevice}
      >
        <Component
          desktopDevice={desktopDevice}
          mobileDevice={mobileDevice}
          {...pageProps}
        />
      </Layout>
    </>
  )
}

export default MyApp
