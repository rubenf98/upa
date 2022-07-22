import React from 'react'
import styled from "styled-components";
import Sections from './HomepageComponents/Sections';
import Header from './HomepageComponents/Header';
import Information from './HomepageComponents/Information';
import About from './HomepageComponents/About';
import Faq from './Faq';
import Benefits from './HomepageComponents/Benefits';
import Sessions from './HomepageComponents/Sessions';
import Typewriter from 'typewriter-effect';

const Container = styled.div`
    position: relative;

    .Typewriter {
        min-height: 100vh;

        .Typewriter__wrapper, .Typewriter__cursor {
            font-size: 110px !important;
        }

    }

    
`;


function Homepage() {

    return (
        <Container >
            <Header />
            <Sections />
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
            <Sessions />
            <Benefits />
            <Faq />
        </Container>
    )
}

export default Homepage


