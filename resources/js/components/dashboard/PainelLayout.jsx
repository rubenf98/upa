import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from "../../helper";
import Courses from "./pages/Courses";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const WhiteBackground = styled.div`
    width: 90%;
    height: calc(100% - 350px);
    position: absolute;
    background-color: white;
    top: 350px;
    right: 0;
    z-index: -1;
`;

const MobileMessage = styled.div`
    width: 80%;
    font-size: 1.4em;
    font-weight: bold;
    text-align:center;
    margin: auto;

    @media (min-width: ${dimensions.md}){
        display: none;
    }
    
`;


const Content = styled.div`
    margin-top: 180px;
    
`;



function PainelLayout({ children }) {
    return (
        <PageContainer>
            <WhiteBackground />

            <NavBar />
            <Content>
                {children}
            </Content>
            <Footer />


            <MobileMessage>
                O painel de controlo não está disponível na versão mobile, utilize um computador para aceder a todas as funções.
            </MobileMessage>
        </PageContainer>
    )
}

export default withTheme(PainelLayout)