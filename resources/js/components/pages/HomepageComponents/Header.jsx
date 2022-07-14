import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme } from "styled-components";
import { borderRadius, dimensions } from '../../../helper';
import Video from './Video';


const Container = styled.section`
  width: 100%;
  min-height: 100vh;
`;

const TitleContainer = styled.div`
  display: block;
  padding: 50px;
  box-sizing: border-box;
  text-align: center;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

    @media (max-width: ${dimensions.md}) {
        padding: 20px;
    }

    h1 {
        font-size: 60px;
        font-weight: 900;
        margin-bottom: 0px;
        color: black;
        line-height: 130px;
        text-align: center;
        font-family: 'Alegreya Sans', sans-serif;

        @media (max-width: ${dimensions.md}) {
            line-height: 52px;
            font-size: 46px;
            margin-bottom: 20px;
        }
    }

    h2 {
        font-size: 22px;
        color: black;
        font-weight: 400;
        margin: 0 auto;
        text-align: center;
        letter-spacing: 0.034em;
        width: 70%;

        @media (max-width: ${dimensions.md}) {
            font-size: 18px;
            width: 100%;
        }
    }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 70px auto 50px auto;

  div {
    padding: 14px 19px;
    box-sizing: border-box;
    margin: 0 15px;
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
        box-shadow: ${props => "6px 6px 0px 0px " + props.shadow};
    }
  }

  .background {
    background: black;
    color: white;
    border: 0px;
    font-weight: 900;
    padding: 14px 19px;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid black;  
    transition: all .4s ease;

    &:hover {
        background: black;
        color: white;
        border: 0px;
        box-shadow: ${props => "6px 6px 0px 0px " + props.shadow};
    }
  }
`;




function Header({ theme }) {
    return (
        <Container>
            <TitleContainer titleColor={theme.text} subtitleColor={theme.text}>
                <div>
                    <h1>Unidos Pela Atividade</h1>
                    <h2>A manutenção das funções cognitivas e motoras é essencial para um envelhecimento ativo e saudável!</h2>

                    <ButtonContainer shadow={theme.blue}>
                        <Link to="/" className='background'>Registar agora!</Link>
                        <div>Saber mais...</div>
                    </ButtonContainer>
                </div>
            </TitleContainer>
            <Video />
        </Container>
    )
}

export default withTheme(Header)