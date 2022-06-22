import { Row } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import moment from "moment";
import { dimensions, maxWidth } from '../../helper';

const Container = styled.section`
    min-width: 100%;
    position: relative;
    background-color: ${props => props.background};
`;

const FooterContainer = styled.div`
    position: relative;
    color: black;

    h1 {
        text-align: center;
        font-size: 68px;
        margin: 0px;

        @media (max-width: ${dimensions.md}) {
            font-size: 3.5em;
        }
        @media (max-width: ${dimensions.sm}) {
            font-size: 2.5em;
        }
    }
    
`;

const FooterContent = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;  
    padding: 50px 0px;  
    box-sizing: border-box;
`;

const Logo = styled.img`
    display: block;
    margin: 50px auto;
    width: 200px;
    
`;

const SectionContainer = styled.div`
    margin: 100px 0px;
    

    h3 {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 20px;
        color: black;
    }

    ul {
        font-size: 18px;
        list-style-type: none;
        padding: 10px 0;

    } 
`;

const Section = ({ title, items }) => (
    <SectionContainer>
        <h3>{title}</h3>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </SectionContainer>
)

function Footer({ theme }) {
    return (
        <Container background={theme.blue}>

            <FooterContainer>
                <FooterContent>
                    <Logo src="/image/logo.svg" alt="unidos pela atividade logo" />

                    <Row style={{ width: "100%" }} type="flex" justify='space-between'>
                        <Section title="Páginas" items={["Sobre", "Contactos", "Cursos"]} />
                        <Section title="Contactos" items={["925022532", "sandra_mfc@msn.com", "@educadorasenior"]} />
                        <Section title="Legal" items={["Política de privacidade", "Política de cookies"]} />
                    </Row>
                </FooterContent>

            </FooterContainer>
        </Container>
    )
}

export default withTheme(Footer)
