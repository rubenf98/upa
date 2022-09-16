import { Row } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import moment from "moment";
import { dimensions, fonts, maxWidth } from '../../helper';
import { Link } from 'react-router-dom';

const Container = styled.section`
    width: 100%;
    position: relative;
    background-color: ${props => props.background};
    padding: 100px 0px 10px 0px;  
    box-sizing: border-box;
`;

const FooterContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
`;

const FooterContent = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: ${dimensions.md}) {
        padding: 0px 20px;
        box-sizing: border-box;
    }
`;

const LogoContainer = styled.div`
    width: 45%;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    h1 {
        font-size: 48px;
        font-family: ${fonts.title};
        margin: 0px;

        @media (max-width: ${dimensions.md}) {
            text-align: center; 
            font-size: 42px;
        }
    }

    p {
        margin: 0px;
        font-size: 18px;

        @media (max-width: ${dimensions.md}) {
            font-size: 16px;
            text-align: center; 
            opacity: .7;
            margin-bottom: 40px;
        }
    }
    
`;

const InfoContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;

const SectionContainer = styled.div`  
    h3 {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 0px;
        font-family: ${fonts.title};
        text-transform: uppercase;
    }

    ul {
        font-size: 16px;
        list-style-type: none;
        padding: 5px 0;

        li {
            margin: 5px 0;

            a {
                opacity: .8;
                color: black;
                transition: opacity .3s ease;

                &:hover {
                    opacity: 1;
                }
            }
            
        }

    } 
`;

const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    flex-wrap: wrap;
    

    a {
        color: black;
        font-weight: bold;
        

        &:hover {
            color: black;
        }
    }
`;

const ContactsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px 0px;
    opacity: .7;

    

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        
    }

    div {
        box-sizing: border-box;
        width: 33%;
        text-decoration: underline;

        @media (max-width: ${dimensions.md}) {
            width: 100%; 
            text-align: center !important;
        }
    }
`;

const Disclaimer = styled.div`
    text-align: center;
    margin: auto;
    opacity: .5;

    @media (max-width: ${dimensions.md}) {
        padding: 0px 20px;
        box-sizing: border-box;
    }
`;


const Section = ({ title, items, links = [] }) => (
    <SectionContainer>
        <h3>{title}</h3>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <Link to={links[index]}>{item}</Link>

                </li>
            ))}
        </ul>
    </SectionContainer>
)

function Footer({ theme }) {
    return (
        <Container background={theme.opacityLightAccent}>

            <FooterContainer>
                <FooterContent>
                    <LogoContainer>
                        <h1>Unidos Pela Atividade</h1>
                        <p>Registe-se para ter acesso às atividades gratuitas!</p>
                    </LogoContainer>

                    <InfoContainer>
                        <Section
                            title="Menu"
                            items={["Página Inicial", "Oferta Formativa", "Produtos", "Contactos", "Acerca de Mim"]}
                            links={["/", "/sessoes", "/produtos", "/contact", "/sobre"]}
                        />

                        <Section
                            title="Legal"
                            items={["Privacidade", "Cookies"]}
                            links={["/privacidade", "/cookies"]}
                        />
                    </InfoContainer>


                </FooterContent>
                <ContactsContainer>
                    <div style={{ textAlign: "left" }}>
                        +351925022532
                    </div>
                    <div style={{ textAlign: "center" }}>
                        sandra_mfc@msn.com
                    </div>
                    <div style={{ textAlign: "right" }}>
                        @educadorasenior
                    </div>
                </ContactsContainer>
                <DetailsContainer>
                    <Disclaimer>© {moment().year()} <a href="https://ruben-freitas.pt/" target="_blank">Rúben Freitas</a>. All Rights Reserved</Disclaimer>



                </DetailsContainer>
            </FooterContainer>
        </Container>
    )
}

export default withTheme(Footer)
