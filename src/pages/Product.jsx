import React from 'react'
import NewsLetter from '../components/NewsLetter'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'


const Container = styled.div`
    

`

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size : 40px;
`

const FilterContainer = styled.div`
    justify-content: space-between;
    display: flex;
    width: 50%;
    margin: 30px 0px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin:0px 10px;
    cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding:5px;
    
`
const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`

const AmountContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
`

const Amount = styled.span`
width: 40px;
height: 40px;
border-radius: 10px;
border: 1px solid teal;
justify-content: center;
display: flex;
align-items: center;
margin: 0px 5px;
    
`

const Button = styled.button`
    cursor: pointer;
    background-color: white;
    padding: 10px;
    border: 2px solid teal;
    font-weight: 500;

    &:hover{
        border: 3px solid teal;

    }
`
function Product() {
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        Denim Jumpsuit
                    </Title>
                    <Desc>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium expedita, veniam iusto dolorum iste eveniet ullam perferendis eaque voluptas dignissimos facere eius et odit, fugiat quae vel, mollitia natus.
                    </Desc>
                    <Price>
                        $ 20
                    </Price>

                    {/* ------------------   */}

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="blue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>

                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    {/* ---------------  */}

                    <AddContainer>
                        <AmountContainer>

                            <Remove style={{ cursor: "pointer" }} />
                            <Amount> 2 </Amount>
                            <Add style={{ cursor: "pointer" }} />
                        </AmountContainer>
                        <Button>ADD TO CART </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <NewsLetter />
        </Container>
    )
}

export default Product