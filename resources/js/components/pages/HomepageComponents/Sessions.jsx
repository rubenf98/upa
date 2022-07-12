import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme } from "styled-components";
import { maxWidth } from '../../../helper';
import { BlackButton, underlineStyle } from '../../../styles';

const Container = styled.section`
    background-color: white;
    padding-bottom: 50px;
    position: relative;
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 2;

    img {
        width: 40%;
        margin: auto;
        display: block;
        z-index: inherit;
    }
`;

const Info = styled.div`
    width: 50%;
    max-width: ${maxWidth};
    z-index: inherit;

    h2 {
        font-weight: bold;
        font-size: 36px;
        font-family: 'Alegreya Sans', sans-serif;
        margin-bottom: 0px;
    }

    h3 {
        font-weight: bold;
        font-size: 24px;
        opacity: .7;
    }
`;

const Background = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 30%;
    background-color: ${props => props.background};
    
`;

const ButtonContainer = styled(Link)`
    margin: 20px 0px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;



function Sessions({ theme }) {
    return (
        <Container>
            <Background background={theme.background} />
            <Content>
                <img src="/image/homepage/mockup.jpg" />
                <Info>
                    <div>
                        <h2>Sessões de estimulação cognitiva e motora</h2>
                        <h3>Cada sessão dá acesso a recursos descarregáveis e à visualização de vídeos</h3>
                        <ButtonContainer to="/sessoes">
                            <BlackButton shadow={theme.blue}>
                                Saber mais...
                            </BlackButton>
                        </ButtonContainer>
                    </div>

                </Info>
            </Content>
        </Container>
    )
}

export default withTheme(Sessions)