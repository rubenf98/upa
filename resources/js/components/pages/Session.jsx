import { Col, Row } from 'antd';
import React, { useState } from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, dimensions, maxWidth } from '../../helper';
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
    }    
`;

const TextContainer = styled.section`
    margin: 200px auto;
    width: 100%;
    display: flex;
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

    h2 {
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 3.2vw;
        line-height: 76px;
        letter-spacing: 0.052em;
        font-weight: 900;
    }
`;

const DetailsContainer = styled.div`
    width: 30%;
    padding: 70px 30px 0px 0px;
    box-sizing: border-box;

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
    h2 {
        font-size: 42px;
        font-weight: bold;
        font-family: 'Alegreya Sans', sans-serif;
    }

    p {
        color: black;
        font-size: 20px;
        letter-spacing: 0.034em;
        margin: 30px 0px;
        text-align: justify;
    }
`;



function Session({ theme }) {
    const [active, setActive] = useState(0)
    return (
        <>

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
            <Video video="/video/apresentacao.mp4" />
            <MaterialContainer>
                <div className='flexcontainer'>
                    <Col span={12}>
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

                    <SessionDetails span={12}>
                        <h2>Sessões com acesso a recursos descarregáveis e visualização de vídeos</h2>
                        <p>
                            As nossas sessões possuem cerca de 35 minutos com atividades variadas. Os vídeos das atividades são acessíveis durante 1 ano e incluem acesso a recursos, tais como textos em pdf, exibições de PowerPoint e áudios.
                        </p>
                    </SessionDetails>
                </div>
            </MaterialContainer>
            <Benefits />
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

            <Faq />
        </>
    )
}

export default withTheme(Session);
