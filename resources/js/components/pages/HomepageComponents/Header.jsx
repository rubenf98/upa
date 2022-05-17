import React, { useContext } from 'react'
import styled, { withTheme } from "styled-components";
import { maxWidth } from '../../../helper';


const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 150px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: ${props => props.background};
  margin-bottom: 200px;
  
`;

const TitleContainer = styled.div`
  width: 60%;
  display: block;
  padding: 90px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  z-index: 5;
  margin-top: -70px;

  h1 {
    font-size: 8vw;
    line-height: 140px;
    font-weight: bold;
    margin-bottom: 0px;
    color: black;
  }

  h2 {
    font-size: 36px;
    text-transform: capitalize;
    color: black;
  }
`;

const ImageContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 200px);
  top: 0px;
  padding: 0px 40px;
  box-sizing: border-box;
  border-radius: 16px;
  position: absolute;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
  
`;


const Overlay = styled.div`
  z-index: 4;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, #f5da7994 0%, #f5da7939 100%);
  opacity: 0.7;
`;


function Header({ theme }) {
  return (
    <Container background={theme.lightYellow}>

      <TitleContainer titleColor={theme.darkGreen} subtitleColor={theme.lightText}>
        <h2>Manutenção das funções congitivas e motoras</h2>
        <h1>Unidos Pela Atividade</h1>
      </TitleContainer>
      <ImageContainer>
        <div className='container'>
          <Overlay />
          <img src="/image/homepage/header.jpg" alt="Sandra Carvalho" />
        </div>

      </ImageContainer>



    </Container>
  )
}

export default withTheme(Header)