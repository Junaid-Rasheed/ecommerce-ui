import React from 'react'
import styled from 'styled-components'
import Products from '../components/Products'

import NewsLetter from '../components/NewsLetter'
const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;

`
const FilterContainer = styled.div`
    justify-content: space-between;
    display: flex;

`
const Filter = styled.div`
    margin: 20px;

`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 15px;
`

const Select = styled.select`
padding: 10px;
font-size: 20px;
   font-weight: 600;
   margin-right: 10px;
    
`
const Option = styled.option`
  
`
function ProductList() {
    return (
        <Container>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Product :
                    </FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                        <Option>Teal</Option>
                        <Option>Purple</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>X</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Product :
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (Asc)</Option>
                        <Option>Price (Desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
        </Container>
    )
}

export default ProductList