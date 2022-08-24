import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
flex: 1;
margin: 6px;
height: 70vh;
position: relative;

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
position: absolute;
top: 0;
left:0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title = styled.h1`
margin: 20px;
color: white;
`
const Button = styled.button`
background: white;
padding: 15px;
font-size: 15px;
cursor: pointer;
color: gray;
border: none;
font-weight: 600;
`

function CategoryItem({ item }) {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>
                    <Link style={{ all: "unset", cursor: "pointer" }} to={'productlist'}>

                        SHOP NOW</Link>
                </Button>
            </Info>
        </Container>
    )
}

export default CategoryItem