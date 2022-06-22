import React from 'react'
import styled from "styled-components";
import Sections from './HomepageComponents/Sections';
import Header from './HomepageComponents/Header';
import Information from './HomepageComponents/Information';
import About from './HomepageComponents/About';
import Faq from './HomepageComponents/Faq';
import Benefits from './HomepageComponents/Benefits';


const Container = styled.div`
  position: relative;
`;



function Homepage() {

    return (
        <Container >
            <Header />
            <Sections />
            <About />
            <Benefits />
            <Faq />
        </Container>
    )
}

export default Homepage


