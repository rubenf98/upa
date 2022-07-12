import { Col, Row } from 'antd'
import React from 'react'
import styled, { withTheme } from "styled-components";
import { maxWidth } from '../../../helper';
import { underlineStyle } from '../../../styles';

const Container = styled.section`
    background-color: white;
    padding-bottom: 200px;
`;

const ContentContainer = styled(Row)`
    width: 100%;
    margin: auto;
    max-width: ${maxWidth};
    padding: 50px 0px;
    box-sizing: border-box;
    

    img {
        width: 30%;
        box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.3);
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
        <Container>
            <ContentContainer type='flex' align='middle'>

                <Info underlineColor={theme.blue}>
                    <h2>A nossa história</h2>
                    <p>O projeto UPA nasceu em 2020, fruto da consciência da falta de recursos  destinados à população sénior.  Este visa proporcionar aos profissionais que trabalham com os idosos um leque diversificado de atividades ocupacionais, que não só mantêm esta população ativa, como contribuem para o seu desenvolvimento cognitivo.</p>

                    <Row type="flex" gutter={32}>
                        <Col span={12}>
                            <p>Dois anos depois surgiu a necessidade de ampliar a oferta a estes profissionais com atividades que, além de contemplarem a componente cognitiva, estimulam igualmente a componente motora.</p>
                        </Col>
                        <Col span={12}>
                            <p>A valência EDUCASÉNIOR tem como propósito disponibilizar sessões de 30/40 minutos com atividades variadas: jogos musicais na mesa, dança coreográfica, sessões de literatura, entre outras.</p>
                        </Col>
                    </Row>
                </Info>

                <img src="/image/homepage/header2.jpg" alt="Sandra Carvalho" />


            </ContentContainer>
        </Container>
    )
}

export default withTheme(About)