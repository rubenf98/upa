import React, { useState, useEffect, useCallback } from 'react'
import styled, { withTheme } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions, maxWidth, navbarHeight } from '../../helper';
import { connect } from "react-redux";
import { handleMenu } from "../../redux/application/actions";
import AnimationContainer from './AnimationContainer';

const Container = styled.div`
    height: ${props => props.visible ? navbarHeight : "0px"}; 
    width: 100%;
    z-index: 100;
    background-color: ${props => props.background};
    padding: 0px 200px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    transition: height .5s ease;
    overflow-y: hidden;

    @media(max-width: ${dimensions.xl}) {
        padding: 0px 10px;
    }
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

        @media (max-width: ${dimensions.md}) {
            height: 50px;
        }
    }
`;


const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LinkContainer = styled.div`
    position: relative;
    margin: 0px 20px;
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
            width: 60%;
            opacity: 1;
            transform: skewX(-10deg);
            transform-origin: right;
        }
    }
    
`;


const Register = styled(Link)`
    display: block;
    font-size: 18px;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: bold;
    background: black;
    color: white;
    transition: .3s ease;
    padding: 6px 16px;
    box-sizing: border-box;

    &:hover {
        outline: none;
        color: white;
        background: ${props => props.accent};
    }
`;

const Menu = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: black;
    display: none;
    cursor: pointer;
    transition: scale 0.3s ease;
    z-index: 999;

    &:hover {
        scale: 1.1;
    }

    @media (max-width: ${dimensions.md}) {
        display: block;
    }
`;


function Navbar({ theme, menuVisible, handleMenu }) {
    const [y,
        setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection,
        setScrollDirection] = useState(1);

    const handleNavigation = useCallback((e) => {
        if (window.scrollY > 500) {
            if (y > window.scrollY) {
                setScrollDirection(1);
            } else if (y < window.scrollY) {
                setScrollDirection(0);
            }
        }
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {

        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);


    return (

        <Container visible={scrollDirection} background={theme.background}>
            <Content visible={scrollDirection}>
                <FlexItem>
                    <Logo to="/">
                        <img src="/image/logo.png" alt="unidos pela atividade logo" />
                    </Logo>
                </FlexItem>
                <FlexItem>
                    <Menu onClick={() => handleMenu(true)} />
                    <MenuContainer >
                        <LinkContainer>
                            <NavbarLink background={theme.blue} to="/sessoes"><span>sessões</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink background={theme.blue} to="/sessoes"><span>oferta formativa</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink background={theme.blue} to="/sessoes"><span>produtos</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink background={theme.blue} to="/contact"><span>contactos</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink background={theme.blue} to="/sobre"><span>acerca de mim</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <Register accent={theme.blue} to="/login">a minha conta</Register>
                        </LinkContainer>
                    </MenuContainer>
                </FlexItem>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMenu: (state) => dispatch(handleMenu(state)),
    };
};

const mapStateToProps = (state) => {
    return {
        menuVisible: state.application.menuVisible,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Navbar));
