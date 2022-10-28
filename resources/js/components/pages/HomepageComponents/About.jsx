import { Col, Row } from 'antd'
import React from 'react'
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth } from '../../../helper';
import { textStyle, titleStyle, underlineStyle } from '../../../styles';
import AnimationContainer from '../../common/AnimationContainer';

const Container = styled.section`
    margin: 200px auto;

    @media (max-width: ${dimensions.lg}) {
        padding: 0px 20px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.md}) {
        margin: 50px auto;
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

    .animated {
        width: 50%;

        img {
            width: 100%;
        }
    }

    .fadeInLeft {
        width: 50%;

        @media (max-width: ${dimensions.lg}) {
            width: 100%;
        }
    }
    

    .fadeInRight {
        width: 40%;
        @media (max-width: ${dimensions.lg}) {
            width: 100%;
        }

        
    }
    
`;

const Info = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-right: 50px;
 
    h2 {
        ${titleStyle};
    }

    p {
        ${textStyle};
        text-align: justify;
        opacity: .7;
    }

    @media (max-width: ${dimensions.lg}) {
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
                <AnimationContainer className="left-container" animation="fadeInLeft">
                    <Info underlineColor={theme.blue}>
                        <h2>Unidos Pela Atividade</h2>
                        <p>O projeto UPA nasceu em 2020, fruto da consciência da falta de recursos  destinados à população sénior.  Este visa proporcionar aos profissionais que trabalham com os idosos um leque diversificado de atividades ocupacionais, que não só mantêm esta população ativa, como contribuem para o seu desenvolvimento cognitivo.</p>
                        <p>Dois anos depois surgiu a necessidade de ampliar a oferta a estes profissionais com atividades que, além de contemplarem a componente cognitiva, estimulam igualmente a componente motora. A valência EDUCASÉNIOR tem como propósito disponibilizar sessões de 30/40 minutos com atividades variadas: jogos musicais na mesa, dança coreográfica, sessões de literatura, entre outras.</p>

                    </Info>
                </AnimationContainer>
                <AnimationContainer className="right-container" animation="fadeInRight">
                    <img src="/image/homepage/about_upa.jpg" alt="Sandra Carvalho" />
                </AnimationContainer>


            </ContentContainer>
        </Container>
    )
}

export default withTheme(About)