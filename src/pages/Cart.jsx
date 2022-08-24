import React from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'

import { Link } from 'react-router-dom'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 300;
    cursor: pointer;
    border: none;
    background-color: black;
    color: white;
    `

const TopTexts = styled.div`
    
    `
const TopText = styled.span`
    cursor: pointer;
    margin: 0px 10px;
    `
const Bottom = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 10px;
    `
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
display: flex;
flex: 2;
`
const Image = styled.img`
width: 120px;
`
const Details = styled.div`
display: flex;
padding: 15px;
justify-content: space-around;
flex-direction: column;
`
const ProductName = styled.span`

`
const ProductID = styled.span`

`
const ProductColor = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`
const ProductSize = styled.span`

`
const PriceDetails = styled.div`
flex: 1;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
    margin: 5px;
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid teal;
    justify-content: center;
    display: flex;
    align-items: center;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 3;
`

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`
const Summary = styled.div`
flex: 1;
height: 50vh;
padding: 15px;
border: 0.5px solid lightgray;
border-radius: 10px;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItems = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-size: ${props => props.type === "total" && "24px"};
    font-weight: ${props => props.type === "total" && "500"};

`
const SummaryItemText = styled.div`

    

`
const SummaryItemPrice = styled.div`
    
    
`
const Button = styled.button`
      padding: 10px;
    font-weight: 300;
    cursor: pointer;
    border: none;
    background-color: black;
    color: white;
    width: 100%;
    
`

function Cart() {
    return (
        <Container>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>
                        <Link style={{ all: "unset", cursor: "pointer" }} to={'/'}>

                            CONTINUE SHOPPING
                        </Link>
                    </TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Whislist(1)</TopText>

                    </TopTexts>
                    <TopButton>CHECKOUT NOW</TopButton>

                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER</ProductName>
                                    <ProductID><b>ID:</b> 667752343</ProductID>
                                    <ProductColor color='black' />
                                    <ProductSize><b>Size:</b> 37.5 </ProductSize>

                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add style={{ cursor: "pointer" }} />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove style={{ cursor: "pointer" }} />
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetails>

                        </Product>

                        {/* second product  */}
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://images.unsplash.com/photo-1621161879097-4bb3f5849bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGlrdG9rJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                                <Details>
                                    <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                    <ProductID><b>ID:</b> 999786543</ProductID>
                                    <ProductColor color='green' />
                                    <ProductSize><b>Size:</b> 27.5 </ProductSize>

                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add style={{ cursor: "pointer" }} />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove style={{ cursor: "pointer" }} />
                                </ProductAmountContainer>
                                <ProductPrice>$ 25</ProductPrice>
                            </PriceDetails>

                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItems>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>

                        </SummaryItems>
                        <SummaryItems>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 6</SummaryItemPrice>

                        </SummaryItems>
                        <SummaryItems>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ 4 </SummaryItemPrice>

                        </SummaryItems>
                        <SummaryItems type='total'>
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 82 </SummaryItemPrice>

                        </SummaryItems>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart