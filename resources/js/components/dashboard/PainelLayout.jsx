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




const Content = styled.div`
    //
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