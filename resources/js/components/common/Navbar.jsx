import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions, maxWidth } from '../../helper';

const Container = styled.div`
    height: 80px;
    width: 100%;
    box-shadow: 0 6px 12px 0 rgba(6, 43, 86, 0.04);
`;

const Content = styled.div`
    height: 100%;
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    top: 0;
    z-index: 20;
    width: 100%;
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

    ${NavbarLink} {
        color: ${props => props.color};
    }
`;



const NavbarLink = styled(Link)`
    display: block;
    font-size: 1.2em;
    text-transform: capitalize;
    cursor: pointer;
    transition: .3s ease-in-out;
    font-weight: bold;
    color: inherit;
    @media (max-width: ${dimensions.md}) {
        display: none;
    }

    &:nth-child(2) {
        padding: 0px 40px;
    }

    &:hover {
        outline: none;
        transition-duration: 500ms;
        color: ${props => props.color};
        div {
            width: 100%;
        }
    }
    
`;





function Navbar() {
    const themeContext = useContext(ThemeContext);

    return (
        <Container>
            <Content>
                <FlexItem>
                    <Logo to="/">
                        <img src="/image/logo_white.svg" alt="be local madeira white logo" />
                    </Logo>
                </FlexItem>
                <FlexItem style={{ flex: 1 }}>
                    <MenuContainer color={themeContext.cBlue}>
                        <NavbarLink to="/about">sobre <div /></NavbarLink>
                        <NavbarLink to="/contact">contactos <div /></NavbarLink>
                        <NavbarLink to="/activities">cursos <div /></NavbarLink>
                    </MenuContainer>
                </FlexItem>
            </Content>
        </Container>
    )
}

export default Navbar
