import React from 'react'
import styled, { withTheme } from "styled-components";
import Team from './About/Team';
import History from './About/History';
import Services from './About/Services';
import { dimensions, maxWidth } from '../../helper';
import { underlineStyle } from '../../styles';
import Faq from './HomepageComponents/Faq';

const Container = styled.section`
    margin: 120px auto;
    width: 100%;
    max-width: ${maxWidth};
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    align-items: flex-start;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    position: relative;
    padding: 0px 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
        margin-bottom: 80px;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 90%;
    }


    .profile {
        width: 95%;
        height: auto;
    }

    .offset {
        width: 50%;
        height: 80%;
        z-index: -1;
        position: absolute;
        bottom: -2%;
        right: 0;
    }
`;

const InfoContainer = styled.div`
    width: 50%;
    padding: 0px 50px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
    }

    h2 {
        font-size: 42px;
        font-weight: bold;
        font-family: 'Alegreya Sans', sans-serif;
        ${underlineStyle}
    }

    p {
        color: black;
        font-size: 20px;
        letter-spacing: 0.034em;
        margin: 30px 0px;
        text-align: justify;
        line-height: 27px;
    }
`;


function About({ theme }) {

    return (
        <Container>
            <ProfileContainer>
                <ImageContainer>
                    <img className='profile' src="/image/about/1.jpg" />
                    <img className='offset' src="/image/about/offset.svg" />

                </ImageContainer>

                <InfoContainer underlineColor={theme.blue}>
                    <h2>Conheça um pouco mais sobre mim</h2>
                    <p>Olá sou a <b>Sandra Carvalho, Educadora Sénior</b>. Sou Mestre e licenciada em Ciências da Educação - Educação Sénior pela Universidade da Madeira. Possuo o Curso de Informática de Gestão e o Curso de Formador de Formadores.</p>
                    <p>Colaborei com a Universidade da Madeira em algumas ações educativas: "A Animação Sociocultural em contexto sénior" e “Educação Permanente”. Possuo experiência como formadora na área de animação e fui promotora de vários Workshops no âmbito da estimulação cognitiva e motora, recursos musicais para aplicar com idosos e dança coreográfica sentada. Possuo <b>11 anos de experiência</b> no exercício de funções de Educadora Sénior num Lar de Idosos e Centro de Convívio.</p>
                </InfoContainer>

            </ProfileContainer>

            <Faq />
        </Container>
    )
}

export default withTheme(About);
