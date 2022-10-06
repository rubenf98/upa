import React from 'react'
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth } from '../../../helper';
import { textStyle, titleStyle } from '../../../styles';

const Container = styled.section`
    width: 100%;
    margin: 150px auto 0px auto;
    position: relative;

    @media (max-width: ${dimensions.md}) {
        margin: 50px auto 0px auto;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    box-sizing: border-box;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const InfoContainer = styled.div`
    width: 60%;
    margin: 50px 0px 150px 0px;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        margin: 50px 0px;
        padding: 0px 20px;
        box-sizing: border-box;
    }

    .description {
        width: 50%;
        margin-left: 20%;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
            margin: 0px;
            padding-left: 40px;
            box-sizing: border-box;
        }

        h3 {
            ${textStyle}
            text-transform: uppercase;
            color: #38CDD0;
            font-weight: bold;
        }

        p {
            ${textStyle}
            opacity: .7;
        }
    }
`;

const Title = styled.h2`
    ${titleStyle}
    z-index: 2;

    @media (max-width: ${dimensions.md}) {
        font-size: 40px;
    }
`;

const ImageContainer = styled.div`
    width: 40%;
    z-index: -1;

    img {
        width: 110%;
        margin-left: -30%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;

        img {
            width: 90%;
            margin: auto;
            display: block;
            height: auto;
        }
    }
`;

const BlueBackground = styled.div`
    position: absolute;
    z-index: -1;
    bottom: 0px;
    width: 100%;
    height: 100px;
    background-color: ${props => props.background};
`;


function Soon({ theme }) {
    return (
        <Container>
            <BlueBackground background={theme.opacityLightAccent} />
            <Content>
                <InfoContainer >
                    <Title>
                        Serviços de apoio à terceira idade online
                    </Title>
                    <div className='description'>
                        <h3>brevemente</h3>
                        <p>Acompanhamento a idosos que precisam de apoio no âmbito da manutenção das suas funções cognitivas e motoras no seu domicílio. Este acompanhamento é feito online. </p>
                        <p>É elaborado um plano de atividades adequado às necessidades de cada idoso, pode ser realizado individual ou em grupo.</p>
                    </div>
                </InfoContainer>

                <ImageContainer>

                    <img src="/image/homepage/soon.jpg" alt="" />

                </ImageContainer>
            </Content>
        </Container>
    )
}

export default withTheme(Soon)