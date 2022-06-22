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
    padding: 50px;
    box-sizing: border-box;

    img {
        width: 30%;
    }
`;

const Info = styled.div`
  width: 70%;
  box-sizing: border-box;
  padding-right: 60px;

  
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

  p:nth-child(2){

    margin-bottom: 20px;
  }
`;

function About({ theme }) {
    return (

        <ContentContainer type='flex' align='middle'>

            <Info underlineColor="white">
                <h2>A nossa história</h2>
                <p>Olá sou a Sandra Carvalho, Educadora Sénior. Sou Mestre e licenciada em Ciências da Educação - Educação Sénior pela Universidade da Madeira. Possuo o Curso de Informática de Gestão e o Curso de Formador de Formadores.</p>

                <Row type="flex" gutter={32}>
                    <Col span={12}>
                        <p>Colaborei com a Universidade da Madeira em algumas ações educativas: "A Animação Sociocultural em contexto sénior" e “Educação Permanente”. Possuo experiência como formadora na área de animação e fui promotora de vários Workshops</p>
                    </Col>
                    <Col span={12}>
                        <p>no âmbito da estimulação cognitiva e motora, recursos musicais para aplicar com idosos e dança coreográfica sentada. Possuo 11 anos de experiência no exercício de funções de Educadora Sénior num Lar de Idosos e Centro de Convívio.</p>
                    </Col>
                </Row>
            </Info>

            <img src="/image/homepage/header2.jpg" alt="Sandra Carvalho" />


        </ContentContainer>

    )
}

export default withTheme(About)