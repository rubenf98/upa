import React from 'react'
import styled from "styled-components";
import Free from './HomepageComponents/Free';
import Header from './HomepageComponents/Header';
import About from './HomepageComponents/About';
import Resources from './HomepageComponents/Resources';
import Soon from './HomepageComponents/Soon';
import Gallery from './HomepageComponents/Gallery';

const Container = styled.div`
    overflow-x: none;
`;


function Homepage() {
    return (
        <Container >
            <Header />
            <About />

            <Gallery />
            <Free />
            <Resources />
            <Soon />
        </Container>
    )
}

export default Homepage


