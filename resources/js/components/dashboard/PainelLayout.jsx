import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom'
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from "../../helper";
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
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    
`;



function PainelLayout({ children, isAuthenticated }) {
    var navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [])

    return (
        <PageContainer>
            <WhiteBackground />


            <NavBar />
            <Content>
                {children}
            </Content>
            <Footer />


            <MobileMessage>
                O painel de controlo não está disponível na versão mobile, utilize um computador para aceder ao conteúdo.
            </MobileMessage>
        </PageContainer>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
}

export default connect(mapStateToProps, null)(withTheme(PainelLayout));