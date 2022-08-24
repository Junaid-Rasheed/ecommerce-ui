import React from 'react'
import styled from 'styled-components'
import { Send } from '@material-ui/icons'


const Container = styled.div`
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff2f2;
`
const Title = styled.h1`
    font-size: 60px;
    margin: 20px;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`

const InputContainer = styled.div`
width: 30%;
height: 40px;
background-color: white;
display: flex;
border: 1px solid gray;
justify-content: space-between;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;

    &:hover{
   background-color: #21cfcf;
    }
`
function NewsLetter() {
    return (
        <div>
            <Container>
                <Title>Newletter</Title>

                <Desc>Get timely updates from your favorites products.</Desc>
                <InputContainer>
                    <Input placeholder='Your email' />
                    <Button>
                        <Send />
                    </Button>
                </InputContainer>
            </Container>
        </div>
    )
}

export default NewsLetter