import React from 'react'
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth, navbarHeight } from '../../helper';
import { underlineStyle } from '../../styles';
import Faq from './Faq';

const Container = styled.div`
    width: 100%;
    margin-top: 150px;
`;
const Content = styled.div`
    margin: auto;
    width: 100%;
    max-width: ${maxWidth};

    @media (max-width: ${dimensions.md}) {
        padding: 0px 20px;
        box-sizing: border-box;
    }
`;

const ProfileContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 80%;
    margin: 150px auto 100px auto;
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

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
        order: 1;
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
        font-size: 5.2vw;
        line-height: 98px;
        font-weight: bold;
        margin-bottom: 0px;
        font-family: ${fonts.title};

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

const InfoContainer = styled.section`
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
            margin-bottom: 30px;
            text-align: justify;
            font-size: 18px;
            opacity: .9;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
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

const ImportanceContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    margin: 100px auto;
    align-items: center;

    @media (max-width: ${dimensions.md}) {
        margin: 30px auto;
    }

    img, .info {
        width: 50%;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }
    }

    .info {
        padding: 20px;
        box-sizing: border-box;

        h2 {
            font-size: 48px;
            font-family: ${fonts.title};
            line-height: 55px;

            @media (max-width: ${dimensions.md}) {
                text-align: center;
                font-size: 40px;
                line-height: 49px;
            }
        }

        p {
            font-size: 18px;
            text-align: justify;
            opacity: .9;
            padding-right: 20px;
            box-sizing: border-box;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
                text-align: justify;
                padding: 0px;
            }
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

                <ImportanceContainer>
                    <div className='info' >
                        <h2>A importância de oferecer novas experiências e novas vivências ao idoso</h2>
                        <p>As propostas de atividades  e recursos que vos apresento têm por objetivo contribuir para a manutenção das capacidades físicas e cognitivas do idoso. Estas atividades não são meras tarefas a executar, mas uma oportunidade do idoso viver o processo de envelhecimento ativamente, de resgatar a sua autoestima, de socializar, de se envolver em novas aprendizagens, levando-o deste modo a alcançar uma melhor qualidade de vida.</p>
                    </div>
                    <img alt='Sandra Carvalho' src="/image/about/importance.jpg" />
                </ImportanceContainer>
                <Faq />
            </Content>
        </Container>
    )
}

export default withTheme(About);
