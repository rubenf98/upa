import React, { Component } from "react";
import styled from "styled-components";
import { dimensions } from "../../helper";

const PageContainer = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
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




export default class PainelLayout extends Component {
    render() {
        return (
            <PageContainer>



                <MobileMessage>
                    O painel de controlo não está disponível na versão mobile, utilize um computador para aceder a todas as funções.
                </MobileMessage>
            </PageContainer>
        );
    }
}
