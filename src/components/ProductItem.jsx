import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'


const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`
const Circle = styled.div`
    
`
const Image = styled.img`
height: 75%;
z-index: 2;

`
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: #b9b8b833;
`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 6px;
cursor: pointer;

&:hover{
    background-color: #eee8e8;
    transform: scale(1.1);
}
`

function ProductItem({ items }) {
    return (
        <Container>
            <Circle />
            <Image src={items.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link style={{ all: "unset", cursor: "pointer" }} to={'product'}>

                        <SearchOutlined /></Link>

                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container >
    )
}

export default ProductItem