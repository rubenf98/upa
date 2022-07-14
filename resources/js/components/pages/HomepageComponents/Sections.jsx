import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { maxWidth, dimensions, borderRadius } from '../../../helper';

const ImageContainer = styled.section`
    position: relative;
    width: 40%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: 100px auto;
    min-height: 380px;

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
        order: 2;
    }

    @media (max-width: ${dimensions.md}) {
        min-height: 600px;
        width: 90%;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 100%;
    }


    .top {
        background-image: url("/image/homepage/movement.svg");
        left: 0px;
        top: 0px;
        right: auto;
        bottom: auto;
    }
    
    .bottom {
        background-image: url("/image/homepage/music.svg");
        left: auto;
        top: auto;
        right: auto;
        bottom: 0%;
        z-index: 2;
    }
    .middle {
        background-image: url("/image/homepage/memory.svg");
        left: auto;
        top: auto;
        right: 0%;
        bottom: auto;
    }
`;


const Section = styled.div`
    position: absolute;
    width: 240px;
    height: 240px;
    padding: 10px;
    box-sizing: border-box;
    background-color: white;
    border-radius: ${borderRadius};
    border-style: solid;
    border-width: 1px;
    border-color: #e6e7e8;
    background-color: #fff;
    background-position: 50% 50%;
    background-size: cover;
    box-shadow: 1px 1px 5px 0 rgba(10, 11, 30, 0.2);
`;

const Container = styled.section`
    background-color: white;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    max-width: ${maxWidth};
    margin: auto;
    background-color: white;

    @media (max-width: ${dimensions.lg}) {
        padding: 20px;
        box-sizing: border-box;
    }
    
`;

const InfoContainer = styled.div`
    width: 40%;

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
        order: 1;
    }

    h3 {
        font-size: 42px;
        font-weight: bold;
        font-family: 'Alegreya Sans', sans-serif;
    }

    p {
        font-size: 20px;
        letter-spacing: 0.034em;
        text-align: justify;
    }
`;




function Sections() {
    const themeContext = useContext(ThemeContext);

    return (
        <Container>
            <Content>
                <ImageContainer >
                    <Section className='top' />
                    <Section className='bottom' />
                    <Section className='middle' />
                </ImageContainer>
                <InfoContainer>
                    <h3>Movimento, memória e música</h3>
                    <p>Atividades com recurso à música, que podem ser desenvolvidas em formato individual ou em grupo, visando a interação, socialização, integração e diversão dos participantes: jogos musicais, dança coreográfica sentada, e muito mais.</p>
                </InfoContainer>
            </Content>
        </Container>
    )
}

export default Sections