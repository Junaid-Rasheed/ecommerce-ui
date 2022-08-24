import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
font-size: 18px;
height: 40px;
font-weight: 500;
color: white;
background-color: teal;
justify-content: center;
display: flex;
align-items: center;
text-align: center;
`
function Announcement() {
    return (
        <Container>Super Deal! Free Shipping on Order Over $50</Container>
    )
}

export default Announcement