import {useRouter} from 'next/router';
import styled from 'styled-components';
import CardDetails from '../../../components/card/cardDetails';
import products from '../../../products';
import propTypes from 'prop-types'

Product.propTypes = {
  desktopDevice: propTypes.bool.isRequired,
  mobileDevice: propTypes.bool.isRequired
}

export default function Product({mobileDevice}){
  const router = useRouter();

  const id = router.query.id;

  const product = products.find(product => product.id === id);

  return (
      <Page>
          <Container
            mobileDevice={mobileDevice}
          >
            {product &&
              <CardDetails
              product={product}
              mobileDevice={mobileDevice}
            />
            }
          </Container>
      </Page>
  )
}

const Page = styled.div`
`

const Container = styled.div`
    display: flex;
    flex-direction: ${({mobileDevice}) => mobileDevice ? 'column' : 'row'};
    align-items: center;
    margin-bottom: ${({mobileDevice}) => mobileDevice ? '130px' : '10px'};
    width: 100%;
`