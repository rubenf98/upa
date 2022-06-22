import { Collapse } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, maxWidth } from '../../../helper';

const { Panel } = Collapse;

const Container = styled.section`
    width: 40%;
    display: block;
    max-width: calc(${maxWidth} / 2);
    margin: 200px auto;

    h2 {
        font-size: 42px;
        font-weight: bold;
        font-family: 'Alegreya Sans', sans-serif;
        margin-bottom: 30px;
    }

`;

const Accordion = styled(Collapse)`

    .ant-collapse-item, .ant-collapse-item:last-child {
        background-color: white;
        margin-bottom: 20px;
        border: 2px solid #000;
        border-radius: ${borderRadius};
    }
    .ant-collapse-header {
        
        font-size: 24px;
        padding: 20px;
        box-sizing: border-box;
        font-weight: bold;
    }

    .ant-collapse-content-box {
        p {
            font-size: 22px;
        }
    }
`;

const items = [
    { question: "Why should I use Butter?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
    { question: "What is a co-facilitator?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
    { question: "What is a Shared room?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
    { question: "Why should I use Butter?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
    { question: "What is a co-facilitator?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
    { question: "What is a Shared room?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nostrum saepe voluptas ut possimus fuga facere, officia molestiae nesciunt reiciendis corrupti repudiandae! Exercitationem ipsa reiciendis et nostrum odio mollitia perspiciatis!" },
]

function Faq({ theme }) {
    return (
        <Container>
            <h2>Perguntas frequentes</h2>
            <Accordion ghost>
                {items.map((item, index) => (
                    <Panel showArrow={false} header={item.question} key={index}>
                        <p>{item.answer}</p>
                    </Panel>
                ))}
            </Accordion>
        </Container >
    )
}

export default withTheme(Faq)