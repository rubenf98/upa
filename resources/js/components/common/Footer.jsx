import { Row } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import moment from "moment";
import { dimensions, maxWidth } from '../../helper';

const Container = styled.section`
    min-width: 100%;
    position: relative;
`;

const FooterContainer = styled.div`
    position: relative;

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


const SubscribeContainer = styled.div`
    background-color: ${props => props.background};
    padding: 100px 0px;

    div {
        width: 100%;
        max-width: ${maxWidth};
        margin: auto;

        h3 {
            font-size: 32px;
        }
        h4 {
            font-size: 18px;
            opacity: .8;
        }
        h3, h4 {
            color: white;
            text-align: center;
        }
    }
`;


const Ring = styled.div`
    border-radius: 0 0 0 350px;
    background-color: transparent;
    height: 350px;
    width: 350px;
    border-left: 80px solid #32404d;
    border-bottom: 80px solid #32404d;
    position: absolute;
    top: 0; right: 0px;
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
        <Container>
            <SubscribeContainer background={theme.darkGreen}>
                <div>
                    <h3>lorem ipsum message</h3>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>
            </SubscribeContainer>

            <FooterContainer>
                <Ring />

                <FooterContent>
                    <Logo src="/image/logo_white.svg" alt="be local madeira white logo" />

                    <Row style={{ width: "80%" }} type="flex" justify='space-between'>
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
