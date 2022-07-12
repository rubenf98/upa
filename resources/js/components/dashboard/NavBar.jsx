import React from "react";
import styled, { withTheme } from "styled-components";
import { dimensions, colors } from "../../helper";
import Row from "antd/es/row"
import { BlackButton } from "../../styles";
import { Link } from "react-router-dom";

const Container = styled(Row)`
    width: 80%;
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 70px;
    }

    .button-container{
        min-width: 150px;
        text-align: center;
        
    }
`;

const CustomLink = styled(Link)`
    color: white;
    &:hover {
        color: white;
    }
`;


function NavBar({ theme }) {
    return (
        <Container type="flex" justify="center" align="middle">

            <img src="/image/logo.svg" />

            <BlackButton className="button-container" shadow={theme.blue}>
                <CustomLink to="/">Sair</CustomLink>

            </BlackButton>

        </Container>
    )
}

export default withTheme(NavBar)