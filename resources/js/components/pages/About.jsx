import React from 'react'
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth, navbarHeight } from '../../helper';
import { underlineStyle } from '../../styles';
import Faq from './Faq';

const Container = styled.section`
    width: 100%;
    margin-top: 150px;
`;
const Content = styled.div`
    margin: auto;
    width: 100%;
    max-width: ${maxWidth};
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: 100px auto;
    align-items: flex-start;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        margin: 30px auto;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
        margin-bottom: 80px;
    }

    @media (max-width: ${dimensions.md}) {
        order: 2;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 90%;
    }


    img {
        width: 95%;
        height: auto;
        
    }
`;

const TitleContainer = styled.div`
    width: 50%;
    box-sizing: border-box;
    position: relative;

    @media (max-width: ${dimensions.md}) {
        order: 1;
    }

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
    }

    div {
        position: absolute;
        top: 0;
        left: -100px;
        z-index: 1;

        @media (max-width: ${dimensions.md}) {
            position: relative;
            left: 0px;
        }
    }

    h2 {
        font-weight: 500;
        letter-spacing: -.044em;
        font-size: 5vw;
        line-height: 98px;
        font-weight: bold;
        margin-bottom: 0px;

        @media (max-width: ${dimensions.md}) {
            position: relative;
            left: 0px;
            text-align: center;
            font-size: 40px;
            line-height: 49px;
        }
    }

    h3 {
        font-size: 26px;
        margin-top: 0px;

        @media (max-width: ${dimensions.md}) {
            text-align: center;
            font-size: 18px;
        }
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    align-items: flex-start;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 0px 20px;
        box-sizing: border-box;
    }

    .column {
        width: 70%;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }

        p {
            color: black;
            margin-bottom: 30px;
            text-align: justify;
            font-size: 18px;
            line-height: 23px;
            letter-spacing: 0.066em;
            font-weight: 400;
        }
    }

    .title {
        width: 30%;
        font-size: 28px;
        font-weight: bold;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }
    }

    
`;


function About({ theme }) {

    return (
        <Container>
            <Content>
                <ProfileContainer>
                    <ImageContainer>
                        <img className='profile' src="/image/about/1.jpg" />

                    </ImageContainer>

                    <TitleContainer>
                        <div>
                            <h2>Conheça um pouco mais sobre mim.</h2>
                            <h3>SANDRA CARVALHO</h3>
                        </div>
                    </TitleContainer>
                </ProfileContainer>

                <InfoContainer>
                    <div className='column title'>
                        <span>SOBRE</span>
                    </div>
                    <div className='column' >
                        <p>Olá sou a <b>Sandra Carvalho, Educadora Sénior</b>. Sou Mestre e licenciada em Ciências da Educação - Educação Sénior pela Universidade da Madeira. Possuo o Curso de Informática de Gestão e o Curso de Formador de Formadores.</p>
                        <p>Colaborei com a Universidade da Madeira em algumas ações educativas: "A Animação Sociocultural em contexto sénior" e “Educação Permanente”.</p>
                        <p>Possuo experiência como formadora na área de animação e fui promotora de vários Workshops no âmbito da estimulação cognitiva e motora, recursos musicais para aplicar com idosos e dança coreográfica sentada. Possuo <b>11 anos de experiência</b> no exercício de funções de Educadora Sénior num Lar de Idosos e Centro de Convívio.</p>
                    </div>
                </InfoContainer>
                <Faq />
            </Content>
        </Container>
    )
}

export default withTheme(About);
