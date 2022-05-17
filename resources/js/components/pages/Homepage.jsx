import React from 'react'
import styled from "styled-components";
import Sections from './HomepageComponents/Sections';
import Header from './HomepageComponents/Header';
import Information from './HomepageComponents/Information';
import Video from './HomepageComponents/Video';
import About from './HomepageComponents/About';


const Container = styled.div`
  width: 100vw;
  position: relative;
  overflow-x: hidden;
`;



function Homepage() {

  return (
    <Container >
      <Header />
      <About />
      <Sections />
      <Information />
      <Video />
    </Container>
  )
}

export default Homepage


