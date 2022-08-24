import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { sliderItems } from '../data'
import { Link } from 'react-router-dom'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: #faba31; */
    display: flex;
    position: relative;
    overflow: hidden;

`

const Arrow = styled.div`
border-radius: 50%;
background-color: #f5eeee;
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
    bottom: 0;
    margin: auto;
    left :${props => props.direction === "left" && "10px"} ;
    right :${props => props.direction === "right" && "10px"} ;
    cursor: pointer;
    opacity: 0.7;
z-index: 2;

`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
    background-color: #fff2f2;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const Image = styled.img`
height: 80%;
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    padding: 50px;
`

const Title = styled.h1`
font-size: 70px;
`
const Description = styled.p`
font-size:20px;
letter-spacing: 3px;
margin: 40px 0px;
font-weight: 500;
`

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent;`

const InfoContainer = styled.div`
    flex: 1;
`
function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)

        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={(() => handleClick("left"))}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((prop) =>
                    <Slide>
                        <ImageContainer>
                            <Image src={prop.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{prop.title}</Title>
                            <Description>{prop.desc}</Description>
                            <Button>
                                <Link style={{ all: "unset", cursor: "pointer" }} to={'/product'}>

                                    SHOP NOW
                                </Link>
                            </Button>
                        </InfoContainer>
                    </Slide>
                )}

            </Wrapper>
            <Arrow direction="right" onClick={(() => handleClick("right"))}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider