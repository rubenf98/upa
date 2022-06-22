import React, { useContext } from 'react'
import styled, { ThemeContext, withTheme } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions, maxWidth } from '../../helper';

const Container = styled.div`
    height: 100px;
    width: 100%;
    background-color: ${props => props.background};
    padding: 0px 200px;
    box-sizing: border-box;
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

    ${NavbarLink} {
        color: ${props => props.color};
    }
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
        height: 40px;
        border-radius: 1px;
        background-color: #7df3d0;
        opacity: 0;
        transition: .2s ease-in-out;
        box-sizing: border-box;
    }

    &:hover {
        outline: none;
        transition-duration: 500ms;
        color: black;

        div {
            width: 80%;
            opacity: 1;
            transform: skewX(-10deg);
            transform-origin: right;
        }
    }
    
`;





function Navbar({ theme }) {
    const themeContext = useContext(ThemeContext);

    return (
        <Container background={theme.lightYellow}>
            <Content>
                <FlexItem>
                    <Logo to="/">
                        <img src="/image/logo.svg" alt="be local madeira white logo" />
                    </Logo>
                </FlexItem>
                <FlexItem>
                    <MenuContainer color={themeContext.cBlue}>
                        <LinkContainer>
                            <NavbarLink to="/sessions"><span>sessões</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink to="/contact"><span>contactos</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink to="/sobre"><span>acerca de mim</span> <div /></NavbarLink>
                        </LinkContainer>
                    </MenuContainer>
                </FlexItem>
            </Content>
        </Container>
    )
}

export default withTheme(Navbar)
