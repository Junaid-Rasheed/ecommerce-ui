import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;align-items:center;
    justify-content: center;
    display: flex;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1621161879097-4bb3f5849bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGlrdG9rJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80") center;
`
const Wrapper = styled.div`
padding: 20px;
width: 30%;
background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    `
const Form = styled.form`
        display: flex;
        flex-wrap: wrap;
    `
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 15px 5px;
`
const Aggrement = styled.span`
    font-size: 14px;
    font-weight: 500;
    margin: 15px 0px;
`
const Button = styled.button`
width: 45%;
background-color: teal;
padding: 15px;
cursor: pointer;
border: none;
color: white;
    
`

function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Aggrement>By creating an account, I consent to processing of my personal data in accordance with <b>PRIVACY POLICY</b></Aggrement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register