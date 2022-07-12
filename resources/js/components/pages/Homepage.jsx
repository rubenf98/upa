import React from 'react'
import styled from "styled-components";
import Sections from './HomepageComponents/Sections';
import Header from './HomepageComponents/Header';
import Information from './HomepageComponents/Information';
import About from './HomepageComponents/About';
import Faq from './Faq';
import Benefits from './HomepageComponents/Benefits';
import Sessions from './HomepageComponents/Sessions';

const Container = styled.div`
    position: relative;
`;

const WhiteBackground = styled.div`
    position: absolute;
    top: 100vh;
    right: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: white;
    z-index: -1;
    box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,.2);
`;


function Homepage() {

    return (
        <Container >
            <WhiteBackground />
            <Header />
            <Sections />
            <About />
            <Sessions />
            <Benefits />
            <Faq />
        </Container>
    )
}

export default Homepage


