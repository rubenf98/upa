import React from 'react'
import styled, { withTheme } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions, maxWidth, navbarHeight } from '../../helper';

const Container = styled.div`
    height: ${navbarHeight};
    width: 100%;
    z-index: 999;
    background-color: ${props => props.background};
    padding: 0px 200px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
`;

const Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    top: 0;
    z-index: 20;
    max-width: ${maxWidth};
    margin: auto;
    transition: .5s ease-in-out;
    align-items: center;
    justify-content: space-between;
`;

const FlexItem = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Logo = styled(Link)`
    display: block;
    text-decoration: none;

    img {
        height: 60px;
    }
`;


const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LinkContainer = styled.div`
    position: relative;
    margin: 0px 30px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        display: none;
    }
`;

const NavbarLink = styled(Link)`
    display: block;
    font-size: 18px;
    text-transform: capitalize;
    cursor: pointer;
    
    font-weight: bold;
    color: inherit;   

    span {
        z-index: 3;
        position: relative;
    }

    div {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 2;
        width: 0px;
        height: 0px;
        border-radius: 1px;
        background-color: ${props => props.background};
        opacity: 0;
        transition: width .2s ease-in-out;
        box-sizing: border-box;
    }

    &:hover {
        outline: none;
        transition-duration: 500ms;
        color: black;

        div {
            height: 40px;
            width: 80%;
            opacity: 1;
            transform: skewX(-10deg);
            transform-origin: right;
        }
    }
    
`;





function Navbar({ theme }) {

    return (
        <Container background={theme.background}>
            <Content>
                <FlexItem>
                    <Logo to="/">
                        <img src="/image/logo.svg" alt="be local madeira white logo" />
                    </Logo>
                </FlexItem>
                <FlexItem>
                    <MenuContainer >
                        <LinkContainer>
                            <NavbarLink background={theme.blue} to="/sessoes"><span>sessões</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink background={theme.blue} to="/contact"><span>contactos</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink background={theme.blue} to="/sobre"><span>acerca de mim</span> <div /></NavbarLink>
                        </LinkContainer>
                    </MenuContainer>
                </FlexItem>
            </Content>
        </Container>
    )
}

export default withTheme(Navbar)
