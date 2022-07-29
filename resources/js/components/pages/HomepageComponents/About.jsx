import { Col, Row } from 'antd'
import React from 'react'
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth } from '../../../helper';
import { underlineStyle } from '../../../styles';

const Container = styled.section`
    margin: 200px auto;

    @media (max-width: ${dimensions.md}) {
        margin: 50px auto;
        padding: 0px 20px;
        box-sizing: border-box;
    }
`;

const ContentContainer = styled(Row)`
    width: 100%;
    margin: auto;
    max-width: ${maxWidth};
    padding: 50px 0px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        padding: 20px 0px;
    }
    

    img {
        width: 40%;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }
    }
`;

const Info = styled.div`
    width: 50%;
    box-sizing: border-box;
    padding-right: 50px;
 
    h2 {
        font-size: 60px;
        font-weight: bold;
        font-family: ${fonts.title};
    }

    p {
        font-size: 18px;
        text-align: justify;
        opacity: .7;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 0px;
        width: 100%;

        h2 {
            font-size: 42px;
        }

        p {
            font-size: 18px;
        }
    }
`;

function About({ theme }) {
    return (
        <Container>
            <ContentContainer type='flex' align='middle' justify='space-around'>

                <Info underlineColor={theme.blue}>
                    <h2>Unidos Pela Atividade</h2>
                    <p>O projeto UPA nasceu em 2020, fruto da consciência da falta de recursos  destinados à população sénior.  Este visa proporcionar aos profissionais que trabalham com os idosos um leque diversificado de atividades ocupacionais, que não só mantêm esta população ativa, como contribuem para o seu desenvolvimento cognitivo.</p>
                    <p>Dois anos depois surgiu a necessidade de ampliar a oferta a estes profissionais com atividades que, além de contemplarem a componente cognitiva, estimulam igualmente a componente motora. A valência EDUCASÉNIOR tem como propósito disponibilizar sessões de 30/40 minutos com atividades variadas: jogos musicais na mesa, dança coreográfica, sessões de literatura, entre outras.</p>

                </Info>

                <img src="/image/homepage/about_upa.jpg" alt="Sandra Carvalho" />


            </ContentContainer>
        </Container>
    )
}

export default withTheme(About)