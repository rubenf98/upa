import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth } from '../../../helper';
import { StyledButton, textStyle, titleStyle, underlineStyle } from '../../../styles';
import AnimationContainer from '../../common/AnimationContainer';

const Container = styled.section`
    margin: 100px auto;

    @media (max-width: ${dimensions.md}) {
        margin: 50px auto;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    display: flex;
    align-items: space-around;
    justify-content: center;
    flex-wrap: wrap;
    
    .image-container {
        width: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }
    }
    
`;

const Info = styled.div`
    width: 50%;
    padding: 0px 0px 0px 50px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 0px 20px;
    }
`;

const Title = styled.div`
    width: 40%;
    min-width: 600px;
    margin: auto;
    margin-bottom: 50px;
    text-align: center;

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
        min-width: 0px;
    }

    h2 {
        ${titleStyle}
        margin: 0px;
    }

    p {
        opacity: .7;
        ${textStyle}
        margin: 0px 0px 50px 0px;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;

        h2 {
            font-size: 40px;
            text-align: 16px;
        }

        p {
            font-size: 16px;
            text-align: 16px;
        }
    }

`;

const Resource = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 40px 0px;

    .icon-container {
        width: 60px;
        padding: 15px;
        border-radius: 60px;
        background-color: ${props => props.background};
        margin-right: 10px;

        img {
            width: 100%;
            height: 100%;    
        }
    }

    .resources-container {
        h3, p {
            margin: 0px;
        }

        h3 {
            font-size: 20px;
            font-weight: bold;
        }

        p {
            font-size: 16px;
            opacity: .7;
        }

        @media (max-width: ${dimensions.md}) {
            width: 100%;
            padding: 0px 20px;
            box-sizing: border-box;

            h3 {
                font-size: 18px;
            }

            p {
                font-size: 15px;
            }
        }
    }


    
`;



function Resources({ theme }) {
    const items = [
        { title: "Recursos Musicais", subtitle: "Sessões variadas com recurso à música.", icon: "recursos_musicais" },
        { title: "E-Books", subtitle: "Exercícios de Estimulação Cognitiva.", icon: "ebook" },
        { title: "Exibições de powerpoint", subtitle: "Atividades de projeção para estimular as diferentes habilidades cognitivas.", icon: "powerpoint" },
        { title: "Jogos", subtitle: "Jogos em pdf e em formato físico.", icon: "jogos" },
        { title: "Workshops", subtitle: "Workshops presenciais e na plataforma Zoom", icon: "workshops" }
    ]

    return (
        <Container>
            <Title>
                <h2>Recursos Cognitivos</h2>
                <p>
                    A manutenção cognitiva é essencial e ajuda o idoso a realizar as suas tarefas do dia-a-dia.
                </p>
            </Title>
            <Content>
                <div className='image-container'><img src="/image/homepage/resources.jpg" /></ div>

                <Info>
                    {items.map((item, index) => (
                        <Resource key={index} background={theme.opacityLightAccent}>
                            <div className='icon-container'><img src={"/icon/homepage/" + item.icon + ".svg"} /></div>

                            <AnimationContainer animation="fadeInLeft">
                                <div className='resources-container'>
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </AnimationContainer>
                        </Resource>
                    ))}
                </Info>
            </Content>
        </Container>
    )
}

export default withTheme(Resources)