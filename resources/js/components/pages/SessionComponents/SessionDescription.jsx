import React, { useState } from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, dimensions, maxWidth } from '../../../helper';
import { BlackButton } from '../../../styles';



const Container = styled.section`
    display: flex;
    justify-content: space-around;
    max-width: ${maxWidth};
    width: 100%;
    margin: 50px auto 100px auto;

    .column {
        width: 40%;
        height: 100%;
    }

    .info-column {
        padding: 50px;
        width: 50%;
        box-sizing: border-box;
        order: ${props => props.reversed ? 2 : 1}
    }

    .image-column {
        order: ${props => props.reversed ? 1 : 2}
    }

    h2 {
        font-size: 2.7vw;
        font-weight: 700;
        line-height: 69px;
        letter-spacing: 0.098em;
        font-family: 'Alegreya Sans', sans-serif;
    }

    .spacer {
        border: 1px solid black;
        opacity: .2;
        height: 1px;
        width: 100%;
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
        border-radius : 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: inline-block;

        .button-background {
            width: 16px;
            height: 16px;
            background-color: black;
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
    width: 90%;
    margin: auto auto;
    display: block;
    height: 100%;
    position: relative;
    flex: 1;

    .background {
        width: 100%;
        height: 80%;
        background-color: white;
        position: absolute;
        z-index: -1;
        border-radius: ${borderRadius};
        top: ${props => props.reversed ? 1 : 0};
        bottom: ${props => props.reversed ? 0 : 1};
    }

    .container {
        width: 100%;
        height: 100%;
        margin: auto;
        display: block;
        padding: 40px;
        box-sizing: border-box;


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: ${borderRadius};
        }
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

                <RadioContainer active={active == 0} onClick={() => { setActive(0) }}>
                    <div className="button"> <div className="button-background" /> </div>
                    <span> compra única - 32 €</span>
                </RadioContainer>

                <RadioContainer active={active == 1} onClick={() => { setActive(1) }}>
                    <div className="button"> <div className="button-background" /> </div>
                    <span> compra diversa & poupa 10% - 28.80 € p/ sessão</span>
                </RadioContainer>
                <br />
                <div className='submit-container'>
                    <BlackButton shadow={theme.blue}>
                        Adicionar ao Carrinho
                    </BlackButton>
                </div>
                <br />

            </div>
            <ImageContainer reversed={reversed} className="image-column column">
                <div className="background" />
                <div className="container">
                    <img src={"/image/session/" + content.image + ".jpg"} />
                </div>
            </ImageContainer>

        </Container >

    )
}

export default withTheme(SessionDescription);
