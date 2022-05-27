import React, { Suspense } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import MainVideo from '../components/video/MainVideo';
import propTypes from 'prop-types';

Home.propTypes = {
  desktopDevice: propTypes.bool.isRequired,
  mobileDevice: propTypes.bool.isRequired
}

export default function Home({desktopDevice, mobileDevice}) {

  return (
    <Container>
      <Head>
        <title>| Accueil</title>
      </Head>
      <MainVideo
        desktopDevice={desktopDevice}
        mobileDevice={mobileDevice}
      />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    background-color: grey;
    padding: 0;
    flex-direction: column;
    align-items: center;
`