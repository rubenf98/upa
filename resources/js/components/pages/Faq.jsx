import { Collapse } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, dimensions, maxWidth } from '../../helper';

const { Panel } = Collapse;

const Container = styled.section`
    width: 40%;
    display: block;
    max-width: calc(${maxWidth} / 2);
    margin: 200px auto;

    @media (max-width: ${dimensions.md}) {
        width: 95%;
        margin: 100px auto;
    }

    h2 {
        font-size: 42px;
        font-weight: bold;
        font-family: 'Alegreya Sans', sans-serif;
        margin-bottom: 30px;

        @media (max-width: ${dimensions.md}) {
            font-size: 28px;
        }
    }

`;

const Accordion = styled(Collapse)`

    .ant-collapse-item, .ant-collapse-item:last-child {
        background-color: white;
        margin-bottom: 20px;
        border: 2px solid #000;
        border-radius: ${borderRadius};

        span {
            position: relative;
            z-index: 3;
        }

        &:hover {
            .hover {
                width: 60%;
                opacity: 1;
                transform: skewX(-10deg);
                transform-origin: right;
            }
        }
    }
    .ant-collapse-header {
        
        font-size: 24px;
        padding: 20px;
        box-sizing: border-box;
        font-weight: bold;

        @media (max-width: ${dimensions.md}) {
            font-size: 18px;
        }
    }

    .ant-collapse-content-box {
        p {
            font-size: 22px;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }
    }

    .hover-container {
        position: relative;
    }

    .hover {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 2;
        width: 0px;
        height: 40px;
        border-radius: 1px;
        background-color: #37cfd1;
        opacity: 0;
        transition: .2s ease-in-out;
        box-sizing: border-box;
    }

    
`;

const items = [
    { question: "O que faz a Unidos Pela Atividade (UPA)?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
    { question: "Porque devo aquirir as sessões da UPA?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
    { question: "Como entro em contacto com a UPA?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
    { question: "Gostaria de fazer uma parceria, o que faço?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
    { question: "Quem pertence à Unidos pela Atividade?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
]

function Faq({ theme }) {
    return (
        <Container>
            <h2>Perguntas frequentes</h2>
            <Accordion ghost>
                {items.map((item, index) => (
                    <Panel showArrow={false} header={(<div className='hover-container'><span>{item.q}</span><div className='hover' /></div>)} key={index}>
                        <p>{item.answer}</p>
                    </Panel>
                ))}
            </Accordion>
        </Container >
    )
}

export default withTheme(Faq)