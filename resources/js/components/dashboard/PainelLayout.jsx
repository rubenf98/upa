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


const MobileMessage = styled.div`
    width: 80%;
    font-size: 1.4em;
    font-weight: bold;
    text-align:center;
    margin: 200px auto;

    @media (min-width: ${dimensions.md}){
        display: none;
    }
`;


const Content = styled.div`
    @media (max-width: ${dimensions.md}){
        display: none;
    }
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
            <NavBar />
            <MobileMessage>
                O painel de controlo não está disponível na versão mobile, utilize um computador para aceder ao conteúdo.
            </MobileMessage>

            <Content>
                {children}
            </Content>
            <Footer />
        </PageContainer>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
}

export default connect(mapStateToProps, null)(withTheme(PainelLayout));