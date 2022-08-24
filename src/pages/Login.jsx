import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;align-items:center;
    justify-content: center;
    display: flex;
    background-size: cover;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80") center;
`
const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    `
const Form = styled.form`
        display: flex;
flex-direction:column;
    `
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 10px 5px;
`

const Button = styled.button`
width: 50%;
background-color: teal;
padding: 15px;
cursor: pointer;
border: none;
color: white;
    
`
const Link = styled.a`
    margin: 5px 0px;
    cursor: pointer;
    font-size: 13px;
    &:hover{
        text-decoration: underline;

    }
`
function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>

                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login