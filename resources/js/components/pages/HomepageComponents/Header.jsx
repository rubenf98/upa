import React, { useContext } from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, maxWidth } from '../../../helper';
import Video from './Video';


const Container = styled.section`
  width: 100%;
  min-height: 100vh;
`;

const TitleContainer = styled.div`
  display: block;
  padding: 50px;
  box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;

  h1 {
    font-size: 60px;
    font-weight: 900;
    margin-bottom: 0px;
    color: black;
    line-height: 130px;
    text-align: center;
    font-family: 'Alegreya Sans', sans-serif;
  }

  h2 {
    font-size: 22px;
    color: black;
    font-weight: 400;
    margin: 0 auto;
    text-align: center;
    letter-spacing: 0.034em;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 70px auto 50px auto;

  div {
    padding: 14px 19px;
    box-sizing: border-box;
    margin: 0 10px;
    cursor: pointer;
    color: black;
    border: 1px solid black;  
    transition: all .4s ease;
    border-radius: ${borderRadius};
    font-weight: 900;
    background: white;
    font-size: 16px;
    
    &:hover {
        border: 1px solid black; 
        color: black;
        box-shadow: ${props => "3px 3px 0px 0px " + props.shadow};
    }
  }

  .background {
    background: black;
    color: white;
    border: 0px;

    &:hover {
        background: black;
        color: white;
        border: 0px;
        box-shadow: ${props => "3px 3px 0px 0px " + props.shadow};
    }
  }
`;




function Header({ theme }) {
    return (
        <Container>
            <TitleContainer titleColor={theme.text} subtitleColor={theme.text}>
                <h1>Unidos Pela Atividade</h1>
                <h2>Movimento. Memória. Música. Sessões de estimulação cognitiva e motora.</h2>
                <h2>Assista a vídeos demo gratuitos das nossas sessões!</h2>

                <ButtonContainer shadow={theme.blue}>
                    <div className='background'>Registar agora!</div>
                    <div>Saber mais...</div>
                </ButtonContainer>
            </TitleContainer>
            <Video />
        </Container>
    )
}

export default withTheme(Header)