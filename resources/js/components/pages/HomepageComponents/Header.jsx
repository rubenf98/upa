import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { maxWidth } from '../../../helper';


const Container = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;bottom:0;left:0;right: 0;
  position: absolute;
  z-index: -2;

  .blue-ball, .background {
    position: absolute;
  }
  
  .background {
    right: 0;
    height: 100%;
    width: 40%;
    background: ${props => props.blue};
  }

  .blue-ball {
    left: -15vw;
    top: -15vw;
    height: 30vw;
    width: 30vw;
    border-radius: 50%;
    background: ${props => props.yellow};
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: ${maxWidth};
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 50%;
  display: block;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    font-size: 90px;
    line-height: 90px;
    font-family: 'Playfair Display', serif;
    font-weight: bold;
    color: ${props => props.titleColor};
  }

  h2 {
    font-size: 22px;
    color: ${props => props.subtitleColor};
  }
`;

const ImageContainer = styled.div`
  width: 45%;
  padding: 20px;
  box-sizing: border-box;
  max-height: 90vh;
  background-color: #ffffff;
  border-radius: 16px;

  img {
    width: 100%;
    border-radius: 16px;
  }
  
`;




function Header() {
  const themeContext = useContext(ThemeContext);



  return (
    <Container color={themeContext.inverseText} id="header-container">
      <Background yellow={themeContext.cYellow} blue={themeContext.cBlue}>
        <div className='background' />
        <div className='blue-ball' />
      </Background>

      <Content>
        <TitleContainer titleColor={themeContext.cBlue} subtitleColor={themeContext.lightText}>
          <h1>Unidos Pela Atividade</h1>
          <h2>A manutenção das funções congitivas e motoras é essencial para um envelhecimento ativo e saudável!</h2>

        </TitleContainer>
        <ImageContainer>
          <img src="/image/homepage/header.png" alt="Sandra Carvalho" />
        </ImageContainer>

      </Content>



    </Container>
  )
}

export default Header