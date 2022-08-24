import React from 'react'
import styled from 'styled-components'
import { Facebook, Twitter, Instagram, Pinterest, Room, Phone, MailOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex:1;
    display: flex;
    padding: 20px;
    flex-direction: column;

`
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;

`
const SocialContainer = styled.div`
display: flex;
margin: 10px 0px;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50px;
background-color: #ffe2e2;
display: flex   ;
justify-content: center;
align-items: center;
cursor: pointer;
margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;

`
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`



const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
cursor: pointer;

`
const Right = styled.div`
    flex: 1;
    padding: 20px;

`

const ContactItems = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 50%;
    cursor: pointer;
`
function Footer() {
    return (
        <Container>
            <Left>
                <Logo>
                    E-COMERCE.
                </Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fuga incidunt fugiat, ad explicabo corporis laborum officiis ab voluptatem vero, dolore sunt id. Laboriosam saepe facere aperiam blanditiis? Quibusdam, ullam.</Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>
                        <Link style={{ all: "unset", cursor: "pointer" }} to={'cart'}>

                            Cart</Link>
                    </ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItems>
                    <Room style={{ marginRight: "10px" }} />  G-3,Wapda Town,Lahore
                </ContactItems>
                <ContactItems>
                    <Phone style={{ marginRight: "10px" }} />    +92 300 1234567
                </ContactItems>
                <ContactItems>
                    <MailOutline style={{ marginRight: "10px" }} />    junaidrasheed300@gmail.com
                </ContactItems>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer