import styled from 'styled-components'
import Card from '../../components/card/card'
import products from '../../products'

export default function Products() {
    return (
        <Page>
            {products.map((product, index) => {
                return (
                    <Card
                        key={index}
                        product={product}
                    />
                )
            })}
        </Page>
    )
}

const Page = styled.div`
    width: 100%;
    height: auto;
`