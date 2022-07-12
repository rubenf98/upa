import { Row } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import moment from "moment";
import { dimensions, maxWidth } from '../../helper';

const Container = styled.section`
    width: 100%;
    position: relative;
    background-color: ${props => props.background};
    padding: 20px 0px;  
    box-sizing: border-box;
`;

const FooterContainer = styled.div`
    position: relative;
    color: black;

    h1 {
        font-weight: 800;
        line-height: 84px;
        letter-spacing: 0.029em;
        font-size: 72px;

        @media (max-width: ${dimensions.md}) {
            font-size: 42px;
        }
    }
    
`;

const FooterContent = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;  
    padding: 50px 0px;  
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid black;
`;

const LogoContainer = styled.div`
    width: 40%;
    
`;

const InfoContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
`;

const SectionContainer = styled.div`  

    h3 {
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 20px;
        color: black;
        text-transform: uppercase;
    }

    ul {
        font-size: 18px;
        list-style-type: none;
        padding: 10px 0;

        li {
            margin: 10px 0;
        }

    } 
`;

const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;

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

    div {
        box-sizing: border-box;
        padding: 5px 10px;
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
        <Container background={theme.background}>

            <FooterContainer>
                <FooterContent>
                    <LogoContainer>
                        <h1>Unidos Pela <br /> Atividade</h1>
                    </LogoContainer>

                    <InfoContainer>
                        <Section title="Menu" items={["Sobre", "Contactos", "Sessões"]} />

                        <Section title="Info" items={["Privacidade", "Cookies"]} />
                    </InfoContainer>


                </FooterContent>
                <DetailsContainer>
                    <span>© Made by <a href="https://ruben-freitas.pt/" target="_blank">Rúben Freitas</a></span>

                    <ContactsContainer>
                        <div>
                            +351925022532
                        </div>
                        <div>
                            sandra_mfc@msn.com
                        </div>
                        <div>
                            @educadorasenior
                        </div>

                    </ContactsContainer>

                </DetailsContainer>
            </FooterContainer>
        </Container>
    )
}

export default withTheme(Footer)
