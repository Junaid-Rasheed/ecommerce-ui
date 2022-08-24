import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
const Container = styled.div`
height:60px;
${mobile({ height: "90px" })}
/* @media only screen and (max-width:380px){
    display: none;
} */
`

const Wrapper = styled.div`
padding : 15px 20px;
align-items: center;
display: flex;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}


`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`

const Language = styled.span`
    cursor: pointer;
    font-size: 14px;
  

`
const SearchContainer = styled.div`
align-items: center;
    border: 0.5px solid lightgray;
    margin-left: 25px;
    padding: 4px;
`
const Input = styled.input`
border:none;

`
const Center = styled.div`
flex:1;
text-align:center;`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`flex:1;
display:flex;
align-items: center;
justify-content:flex-end;`

const MenuIcon = styled.div`
cursor: pointer;
font-size:14px;
margin-left:25px;`

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: "20px" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    {/* <Logo >E-MERCE.</Logo> */}
                    <Logo >
                        <Link style={{ all: "unset", cursor: "pointer" }} to={'/'}>

                            E-COMERCE.
                        </Link>
                    </Logo>

                </Center>
                <Right>
                    <MenuIcon>
                        <Link style={{ all: "unset", cursor: "pointer" }} to={'register'}>

                            REGISTER
                        </Link>
                    </MenuIcon>
                    <MenuIcon>

                        <Link style={{ all: "unset", cursor: "pointer" }} to={'login'}>

                            SIGN IN
                        </Link>
                    </MenuIcon>
                    <MenuIcon>
                        <Badge badgeContent={1} color='primary' >
                            <Link style={{ all: "unset", cursor: "pointer" }} to={'cart'}>

                                <ShoppingCartOutlined />
                            </Link>
                        </Badge>
                    </MenuIcon>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar