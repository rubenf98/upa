import { Col, Row } from 'antd'
import React from 'react'
import styled, { withTheme } from "styled-components";
import { maxWidth } from '../../../helper';

const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding: 30px;
    box-sizing: border-box;

    img {
        width: 90%;
    }

    .spacer {
        width: 5%;
        height: 200px;
        margin-top: auto;
        opacity: 0;
        background-color: ${props => props.spacerBackground};
    }
`;

const ContentContainer = styled(Row)`
    width: 100%;
    margin: auto;
    max-width: ${maxWidth};
`;

const InfoContainer = styled(Row)`
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
        
    h2 {
        font-family: 'Playfair Display', serif; 
        font-size: 60px;
        font-weight: 400;
        text-decoration: underline;
        text-decoration-color: ${props => props.underlineColor};
        text-decoration-thickness: 4px;
        white-space: nowrap;
    }

    p {
        font-size: 18px;
        opacity: .8;
    }
`;

function About({ theme }) {
    return (
        <div>
            <ContentContainer type='flex' align='middle'>
                <Col sm={24} md={12}>
                    <ImageContainer spacerBackground={theme.lightYellow}>
                        <div className='spacer' />
                        <img src="/image/homepage/teste.svg" alt="Sandra Carvalho" />
                        <div className='spacer' />
                    </ImageContainer>
                </Col>
                <Col sm={24} md={12}>
                    <InfoContainer underlineColor={theme.lightYellow}>
                        <h2>Sandra Carvalho, <br />Educadora Sénior</h2>
                        <p>Sou Mestre e licenciada em Ciências da Educação - Educação Sénior pela Universidade da Madeira. Possuo o Curso de Informática de Gestão e o Curso de Formador de Formadores.</p>
                        <p>Ao nível dos conteúdos formativos, destaco igualmente o Curso de Criatividade e Espaço Lúdico e o Curso de Instrutores de Danças Sénior.</p>
                    </InfoContainer>
                </Col>

            </ContentContainer>
        </div>
    )
}

export default withTheme(About)