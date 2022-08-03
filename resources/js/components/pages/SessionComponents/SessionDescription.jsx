import React, { useState } from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, dimensions, maxWidth, navbarHeight } from '../../../helper';
import { StyledButton } from '../../../styles';
import Video from '../HomepageComponents/Video';



const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-height: calc(100vh - ${navbarHeight});
    margin: 0px auto;

    .column {
        width: 50%;
        height: 100%;

        @media (max-width: ${dimensions.lg}) {
            width: 100%;
        }
    }

    .info-column {
        padding: 0px 100px;
        box-sizing: border-box;
        order: ${props => props.reversed ? 2 : 1};

        @media (max-width: ${dimensions.xl}) {
            padding: 0px 20px;
        }

        @media (max-width: ${dimensions.lg}) {
            order: 2;
        }
    }

    .image-column {
        order: ${props => props.reversed ? 1 : 2};

        @media (max-width: ${dimensions.lg}) {
            order: 1;
        }
    }

    h2 {
        font-size: 2.7vw;
        font-weight: 700;
        line-height: 69px;
        letter-spacing: 0.098em;
        font-family: 'Alegreya Sans', sans-serif;

        @media (max-width: ${dimensions.lg}) {
            font-size: 36px;
            line-height: 40px;
            margin-top: 30px;
        }
    }

    p {
        color: black;
        font-size: 18px;
        letter-spacing: -0.024em;
        line-height: 30px;
        margin: 10px 0px;
        text-align: justify;
    }

    .submit-container {
        width: 300px;
        margin: 20px 0px;
        display: block;
        text-align: center;

        @media (max-width: ${dimensions.sm}) {
            width: 100%;
        }

        img {
            width: 25px;
            height: 25px;
            margin-left: 5px;
        }
    }
    
`;

const RadioContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    .button {
        width: 22px;
        height: 22px;
        border: 1px solid black;
        border-color: ${props => props.active ? props.background : "black"};
        border-radius : 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: inline-block;

        .button-background {
            width: 16px;
            height: 16px;
            background-color: ${props => props.background};
            border-radius : 16px;
            margin: auto;
            opacity: ${props => props.active ? 1 : 0};
            transition: .3s ease;
        }
    }

    span {
        text-transform: capitalize;
        font-size: 18px;
        font-weight: bold;
        margin-left: 10px;
        opacity: ${props => props.active ? 1 : .7};
        transition: .3s ease;
    }
`;

const ImageContainer = styled.div`
    margin: auto auto;
    display: block;
    min-height: calc(100vh - ${navbarHeight});

    @media (max-width: ${dimensions.lg}) {
        height: auto;
        min-height: 0px;
        padding: 20px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 0px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

function SessionDescription({ theme, content, reversed }) {
    const [active, setActive] = useState(0)
    return (

        <Container reversed={reversed}>
            <div className="info-column column">
                <h2>{content.title}</h2>

                {content.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}

                <br />

                <RadioContainer background={theme.blue} active={active == 0} onClick={() => { setActive(0) }}>
                    <div className="button"> <div className="button-background" /> </div>
                    <span> compra única - 32 €</span>
                </RadioContainer>

                <RadioContainer background={theme.blue} active={active == 1} onClick={() => { setActive(1) }}>
                    <div className="button"> <div className="button-background" /> </div>
                    <span> compra diversa & poupa 10% - 28.80 € p/ sessão</span>
                </RadioContainer>
                <br />
                <div className='submit-container'>
                    <StyledButton shadow={theme.blue}>
                        Adicionar ao Carrinho <img src="/icon/shopping-cart.svg" alt="cesto de compras" />
                    </StyledButton>
                </div>
                <br />

            </div>
            <ImageContainer reversed={reversed} className="image-column column">

                <div className="container">
                    <Video video={"/video/" + content.video + ".mp4"} thumbnail={"/image/session/" + content.thumbnail + ".jpg"} />
                </div>
            </ImageContainer>

        </Container >

    )
}

export default withTheme(SessionDescription);
