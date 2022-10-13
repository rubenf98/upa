import { Collapse } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, dimensions, maxWidth } from '../../helper';
import { textStyle, titleStyle } from '../../styles';

const { Panel } = Collapse;

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width:${maxWidth};
    margin: 200px auto;

    @media (max-width: ${dimensions.md}) {
        width: 95%;
        margin: 100px auto;
    }

`;

const Title = styled.div`
    width: 40%;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    h2 {
        ${titleStyle}
        margin-bottom: 30px;

        @media (max-width: ${dimensions.md}) {
            font-size: 28px;
        }
    }

    p {
        ${textStyle}
    }

`;

const Accordion = styled(Collapse)`
    width: 60%;
    padding-left: 50px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding-left: 0px;
    }

    .ant-collapse-item, .ant-collapse-item:last-child {
        background-color: white;
        margin-bottom: 20px;
        border: 1px solid #c9c9c9;
        border-radius: ${borderRadius};

        span {
            position: relative;
            z-index: 3;
        }
    }
    .ant-collapse-header {
        
        font-size:18px;
        padding: 20px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            font-size: 16px;
        }
    }

    .ant-collapse-content-box {
        p {
            font-size: 18px;
            opacity: .7;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }
    }

    .hover-container {
        position: relative;
    }

    
`;

const items = [
    { question: "Quais os componentes de cada sessão?", answer: "Uma sessão é composta por 10 atividades. Cada atividade reúne 1 vídeo, que estará disponível durante 1 ano após a compra, a descrição da atividade em pdf e o áudio que poderão ser descarregados." },
    { question: "Quais as sessões disponíveis?", answer: "As sessões disponíveis são: a Sessão de Jogos Musicais na Mesa, Sessão de Dança Coreográfica sentada e Sessão de Dança Coreográfica de Natal." },
    { question: "Quais as próximas sessões?", answer: "Brevemente estará disponível a Sessão de Jogos Musicais com o/a Balão/Bola e paus." },
    {
        question: "Quais os produtos UPA que têm disponíveis?", answer: (
            <div>
                <p>Temos disponíveis:</p>
                <ul>
                    <li>E-Book – 50 Exercícios de Estimulação Cognitiva – 5 Volumes</li>
                    <li>E-Book - 24 Exercícios de Estimulação Cognitiva</li>
                    <li>E-Book – 25 Exercícios de Estimulação Cognitiva: Outono</li>
                </ul>
            </div>
        )
    },
]

function Faq({ theme }) {
    return (
        <Container>
            <Title>
                <h2>Perguntas frequentes</h2>
                <p>Estas são as dúvidas que a maioria das pessoas têm relativamente à Unidos Pela Atividade. Caso nenhuma lhe interesse, contacte-nos para informação adicional.</p>
            </Title>
            <Accordion ghost>
                {items.map((item, index) => (
                    <Panel
                        showArrow={false}
                        header={(<div className='hover-container'>{item.question}</div>)}
                        key={index}
                    >
                        <p>{item.answer}</p>
                    </Panel>
                ))}
            </Accordion>
        </Container >
    )
}

export default withTheme(Faq)