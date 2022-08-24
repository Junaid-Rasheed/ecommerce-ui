import React from 'react'
import styled from 'styled-components'

import { popularProduct } from '../data'
import ProductItem from './ProductItem'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
function Products() {
    return (
        <Container>
            {popularProduct.map((items) =>
                <ProductItem items={items} key={items.id} />
            )}
        </Container>
    )
}

export default Products