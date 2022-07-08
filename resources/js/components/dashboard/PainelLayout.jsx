import React, { Component } from "react";
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from "../../helper";
import Course from "./sections/Course";

const PageContainer = styled.div`
    width: 100%;
    min-height:100vh;
`;

const WhiteBackground = styled.div`
    width: 70%;
    height: 100%;
    position: absolute;
    background-color: white;
    top: 100px;
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

const CoursesContainer = styled.div`
    padding: 100px 0px;
    box-sizing: border-box;
`;

function PainelLayout({ theme }) {
    return (
        <PageContainer>
            <WhiteBackground />

            <CoursesContainer>
                <Course />

                <Course />
            </CoursesContainer>



            <MobileMessage>
                O painel de controlo não está disponível na versão mobile, utilize um computador para aceder a todas as funções.
            </MobileMessage>
        </PageContainer>
    )
}

export default withTheme(PainelLayout)