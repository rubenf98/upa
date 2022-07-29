import React from 'react'
import styled from "styled-components";
import Free from './HomepageComponents/Free';
import Header from './HomepageComponents/Header';
import Information from './HomepageComponents/Information';
import About from './HomepageComponents/About';
import Faq from './Faq';
import Benefits from './HomepageComponents/Benefits';
import Resources from './HomepageComponents/Resources';
import Typewriter from 'typewriter-effect';
import { dimensions, maxWidth } from '../../helper';
import Soon from './HomepageComponents/Soon';

const Container = styled.div`
    position: relative;

    .Typewriter {
        max-width: ${maxWidth};
        margin: auto;
        min-height: 350px;
        padding: 0px 10px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            min-height: 120px;
            padding: 0px;
            margin: 50px auto;
            padding: 0px 20px;
            box-sizing: border-box;
        }

        .Typewriter__wrapper, .Typewriter__cursor {
            font-size: 6vw !important;
            font-family: 'DM Serif Display';

            @media (max-width: ${dimensions.md}) {
                font-size: 8vw !important;
            }

            @media (max-width: ${dimensions.sm}) {
                font-size: 36px !important;
                min-height: 80px;
            }
        }
    }
`;


function Homepage() {
    return (
        <Container >
            <Header />
            <About />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Atividades com recurso a <br /> movimento')
                        .pauseFor(500)
                        .deleteChars(9)
                        .typeString("memória")
                        .pauseFor(500)
                        .deleteChars(7)
                        .typeString("música")
                        .pauseFor(500)
                        .deleteChars(6)
                        .typeString("movimento")
                        .pauseFor(500)
                        .deleteChars(9)
                        .typeString("memória")
                        .pauseFor(500)
                        .deleteChars(7)
                        .typeString("música")
                        .pauseFor(500)
                        .deleteChars(6)
                        .typeString("movimento")
                        .pauseFor(500)
                        .deleteChars(9)
                        .typeString("memória")
                        .pauseFor(500)
                        .deleteChars(7)
                        .typeString("música")
                        .pauseFor(500)
                        .deleteChars(6)
                        .typeString("movimento")
                        .pauseFor(500)
                        .deleteChars(9)
                        .typeString("memória")
                        .pauseFor(500)
                        .deleteChars(7)
                        .typeString("música")
                        .pauseFor(1000)
                        .start();
                }}

            />
            <Free />
            <Resources />
            <Soon />
        </Container>
    )
}

export default Homepage


