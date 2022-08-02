import { Input } from 'antd';
import React, { useContext } from 'react'
import styled, { withTheme } from "styled-components";
import { maxWidth, dimensions, borderRadius, fonts } from '../../../helper';

const RegistrationContainer = styled.div`
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;

    .ant-input {
        padding: 20px !important;
    }

    input {
        flex: 1;
    }

    button {
        padding: 20px 30px;
        background-color: black;
        color: white;
        font-weight: bold;
        border: 0px;
    }


    @media (max-width: ${dimensions.md}) {
        width: 90%;
        order: 2;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 100%;
    }
`;

const Container = styled.section`
    background-color: ${props => props.background};
    margin: 200px 0px;

    @media (max-width: ${dimensions.md}) {
        margin: 50px 0px;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: auto;
    padding: 100px 0px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.lg}) {
        padding: 20px;
        
    }
    
`;

const InfoContainer = styled.div`
    width: 50%;

    h3 {
        font-size: 60px;
        line-height: 64px;
        font-family: ${fonts.title};
        margin: 0px 0px 5px 0px;
    }

    p {
        font-size: 18px;
        opacity: .7;
        margin: 0px;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        text-align: center;

        h3 {
            font-size: 36px;
        }

        p {
            font-size: 16px;
            margin-bottom: 30px;
        }
    }
`;




function Free({ theme }) {

    return (
        <Container background={theme.opacityLightAccent}>
            <Content>
                <InfoContainer>
                    <h3>Atividade gratuitas</h3>
                    <p>Registe-se para ter acesso às atividades gratuitas que incluem 1 jogo musical na mesa e uma dnaça coreográfica sentada!</p>
                </InfoContainer>
                <RegistrationContainer>
                    <Input size='large' placeholder='Endereço de email'></Input>
                    <button type='primary'>Registar</button>
                </RegistrationContainer>
            </Content>
        </Container>
    )
}

export default withTheme(Free)