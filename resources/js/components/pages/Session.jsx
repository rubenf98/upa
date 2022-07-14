import { Col, Row } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme } from "styled-components";
import { borderRadius, dimensions, maxWidth, navbarHeight } from '../../helper';
import { BlackButton } from '../../styles';
import Faq from './Faq';
import Benefits from './HomepageComponents/Benefits';
import Video from './HomepageComponents/Video';
import SessionDescription from './SessionComponents/SessionDescription';


const MaterialContainer = styled.section`
    margin: 100px auto;
    width: 100%;
    max-width: ${maxWidth};
    

    .flexcontainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items:center;
        margin: 200px auto;

        @media (max-width: ${dimensions.lg}) {
            margin: 100px auto;
        }

        @media (max-width: ${dimensions.md}) {
            margin: 0px auto;
        }
    }    
`;

const TextContainer = styled.section`
    margin: 200px auto;
    width: 100%;
    display: flex;

    @media (max-width: ${dimensions.md}) {
        margin: 50px auto;
    }


`;

const ContentContainer = styled.section`
    margin: auto;
    width: 100%;
    max-width: ${maxWidth};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`;

const Spacer = styled.div`
    flex: 1;

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

`;

const WhiteBackground = styled(Spacer)`
    background-color: white;
`;

const WhiteContainer = styled.div`
    width: 70%;
    background-color: white;
    padding: 60px 60px 80px 60px;
    box-sizing: border-box;
    flex: 1;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 60px 10px 60px 10px;
    }

    h2 {
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 3.2vw;
        line-height: 76px;
        letter-spacing: 0.052em;
        font-weight: 900;

        @media (max-width: ${dimensions.md}) {
            font-size: 40px;
            line-height: 45px;
        }

        @media (max-width: ${dimensions.sm}) {
            font-size: 28px;
            line-height: 30px;
        }

    }
`;

const DetailsContainer = styled.div`
    width: 30%;
    padding: 70px 30px 0px 0px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    h3 {
        font-weight: bold;
        font-size: 28px;
    }

    p {
        font-size: 18px;
        letter-spacing: 0.02em;
        
        
    }
`;

const InfoContainer = styled(Row)`
    width: 100%;
    font-size: 18px;

    @media (max-width: ${dimensions.md}) {
        font-size: 16px;
    }
    text-align: justify;
`;

const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0px;

    div {
        width: 160px;
        padding-top: 100%;
        margin: 0px 10px 20px 10px;
        background-color: white;
        box-sizing: border-box;
        padding: 20px;
        border-radius: ${borderRadius};

        img {
            width: 50%;
            margin: 0px auto 10px auto;
            display: block;
        }

        h3 {
            font-weight: 900;
            text-align: center;
            font-size: 18px;
            text-transform: capitalize;
        }
    }
`;

const SessionDetails = styled(Col)`
    box-sizing: border-box;
    padding: 20px;

    h2 {
        font-size: 42px;
        font-weight: bold;
        font-family: 'Alegreya Sans', sans-serif;

        @media (max-width: ${dimensions.md}) {
            font-size: 28px;
        }
    }

    p {
        color: black;
        font-size: 20px;
        letter-spacing: 0.034em;
        margin: 30px 0px;
        text-align: justify;

        @media (max-width: ${dimensions.md}) {
            font-size: 18px;
        }
    }
`;


const Header = styled.section`
    min-height: calc(100vh - ${navbarHeight});
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    

    .column {
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
        position: relative;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }

        h2 {
            font-size: 60px;
            letter-spacing: 0.027em;
            line-height: 65px;
            font-weight: bold;
            font-family: 'Alegreya Sans', sans-serif;

            @media (max-width: ${dimensions.md}) {
                font-size: 36px;
                line-height: 38px;
                text-align: center;
            }

        }

        p {
            color: black;
            font-size: 22px;
            letter-spacing: 0.034em;
            margin: 30px 0px;
            text-align: justify;
            width: 90%;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
                text-align: center;
                width: 100%;
                margin-bottom: 0px;
            }
        }

        .video-container {
            width: calc(100% - 30px);
            margin-right: auto;
            display: block;
            position: relative;
            z-index: 2;

            @media (max-width: ${dimensions.md}) {
                width: 100%;
            }
        }

        .offset {
            position: absolute;
            right: 0;
            border: 2px solid white;
            bottom: 30px;
            height: 80%;
            width:  80%;
            background-color: white;

            @media (max-width: ${dimensions.md}) {
                display: none;
            }
        }
    }
    

    
`;

const ButtonContainer = styled(Link)`
    margin: 20px 0px;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: ${dimensions.md}) {
        display: none;
    }
`;



function Session({ theme }) {
    const [active, setActive] = useState(0)
    return (
        <>
            <Header>
                <div className='column'>
                    <h2>Sessões de estimulação cognitiva e motora</h2>
                    <p>Disponibilizamos Sessões, Workshops, Oficinas e Recursos no âmbito da Estimulação Cognitiva e Motora para aplicar com idosos.</p>
                    <p>Clique no vídeo para assistir a uma descrição das atividades.</p>
                    <ButtonContainer to="/login">
                        <BlackButton shadow={theme.blue}>
                            Registar
                        </BlackButton>
                    </ButtonContainer>
                </div>
                <div className='column'>
                    <div className='offset' />
                    <div className='video-container'>
                        <Video video="/video/apresentacao.mp4" thumbnail='/image/session/header.jpg' />
                    </div>

                </div>
            </Header>
            <TextContainer>
                <Spacer />
                <ContentContainer>
                    <DetailsContainer>
                        <h3>Cada sessão dá acesso a recursos descarregáveis e à visualização de vídeos</h3>
                        <p>A manutenção cognitiva é essencial e ajuda o idoso a realizar as suas tarefas do dia-a-dia. E-Books, exibições de PowerPoint, jogos e outras atividades contribuem para desenvolver as várias funções cognitivas: memória, raciocínio, atenção, orientação espacial, etc.</p>
                    </DetailsContainer>
                    <WhiteContainer>
                        <h2>Movimento. Memória. Música. Sessões de estimulação cognitiva e motora.</h2>

                        <InfoContainer type="flex" gutter={32}>
                            <Col span={12}>
                                <p>Atividades com recurso à música, que podem ser desenvolvidas em formato individual ou em grupo, visando a interação, socialização, integração e diversão dos participantes.</p>
                            </Col>
                            <Col span={12}>
                                <p>Cursos, Workshops, Oficinas e Recursos no âmbito da Estimulação Cognitiva e Motora para aplicar com idosos através de jogos musicais, dança coreográfica sentada, e muito mais.</p>

                            </Col>
                        </InfoContainer>

                    </WhiteContainer>
                </ContentContainer>
                <WhiteBackground />

            </TextContainer >

            <SessionDescription
                content={{
                    title: "Danças Coreográficas Sentadas",
                    description: [
                        "A Dança Coreográfica Sentada é uma modalidade de baixo impacto, que tem como propósito a realização de gestos e de movimentos simples e fáceis de executar.",
                        "O bater de mãos, de pés; o dar estalos; o levar as mãos ao pescoço, à cabeça, aos ombros; o elevar as pernas, os braços, os joelhos, etc., são movimentos que fazem parte desta modalidade.",
                        "Além do divertimento que esta atividade proporciona, também oferece benefícios a nível físico, cognitivo, emocional e social."
                    ],
                    image: "sentado"
                }}
            />

            <SessionDescription
                reversed
                content={{
                    title: "Jogos Musicais na Mesa",
                    description: [
                        "Os jogos musicais na mesa podem ser realizados com grupos de qualquer idade. ",
                        "Mais do que proporcionar divertimento, o jogo musical ajuda no treino dos domínios da escuta, da concentração e da expressão. Pode ser, incontestavelmente, uma estratégia eficaz para a manutenção cognitiva, motora, social e emocional do idoso. Ele tem o poder de cativar quem nele participa!",
                    ],
                    image: "mesa"
                }}
            />

            <br />

            <MaterialContainer>
                <div className='flexcontainer'>
                    <Col xs={24} md={12}>
                        <IconsContainer>
                            <div>
                                <img src="/icon/resources.svg" alt="" />
                                <h3>documentos</h3>
                            </div>
                            <div>
                                <img src="/icon/video.svg" alt="" />
                                <h3>videos</h3>
                            </div>
                        </IconsContainer>
                        <IconsContainer>
                            <div>
                                <img src="/icon/audio.svg" alt="" />
                                <h3>audio</h3>
                            </div>
                            <div>
                                <img src="/icon/presentation.svg" alt="" />
                                <h3>apresentações</h3>
                            </div>
                        </IconsContainer>
                    </Col>

                    <SessionDetails xs={24} md={12}>
                        <h2>Sessões com acesso a recursos descarregáveis e visualização de vídeos</h2>
                        <p>
                            As nossas sessões possuem cerca de 35 minutos com atividades variadas. Os vídeos das atividades são acessíveis durante 1 ano e incluem acesso a recursos, tais como textos em pdf, exibições de PowerPoint e áudios.
                        </p>
                    </SessionDetails>
                </div>
            </MaterialContainer>

            <Benefits />


            <Faq />
        </>
    )
}

export default withTheme(Session);
