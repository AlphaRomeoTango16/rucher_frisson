import Head from 'next/head';
import styled from 'styled-components';
import Form from '../../components/form/Form';
import propTypes from 'prop-types';

Contact.propTypes = {
    desktopDevice: propTypes.bool.isRequired,
    mobileDevice: propTypes.bool.isRequired
}

export default function Contact({mobileDevice}) {
    return (
        <Page>
            <Head>
                <title>| Contact</title>
            </Head>
            <Container mobileDevice={mobileDevice}>
                <Form />
            </Container>
        </Page>
    )
}

const Page = styled.div`
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${({mobileDevice}) => mobileDevice ? '120px' : '0px'};
    width: 100%;
`