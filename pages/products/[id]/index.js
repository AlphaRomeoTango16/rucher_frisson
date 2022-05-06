import {useRouter} from 'next/router';
import styled from 'styled-components';
import CardDetails from '../../../components/card/cardDetails';
import products from '../../../products';

export default function Product(){
  const router = useRouter();

  const product = products[router.query.id];
  console.log('product', product)

  return (
      <Page>
          <Container>
            {product &&
              <CardDetails
              product={product}
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
    flex-direction: column;
    align-items: center;
    width: 100%;
`