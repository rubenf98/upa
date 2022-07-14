import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme, keyframes } from "styled-components";
import { dimensions, navbarHeight } from '../../helper';
import { connect } from "react-redux";
import { handleMenu } from "../../redux/application/actions";
import AnimationContainer from './AnimationContainer';

const spin = (animation) => keyframes`
    0% {
        clip-path: ${animation == 0 ? "circle(6rem at calc(100% - 1rem) 1rem)" : "circle(164rem at calc(100% - 1rem) 1rem)"};
    }

    100% {
        clip-path: ${animation == 0 ? "circle(164rem at calc(100% - 1rem) 1rem)" : "circle(6rem at calc(100% - 1rem) 1rem)"};
    }
`;


const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 800;
    background-color: transparent;
    display: ${props => props.visible ? "block" : "none"};
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 799;
    background-color: black;
    animation: ${props => spin(props.animation)} 1s ease-in-out forwards;
`;

const Menu = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin: 10px 0px 0px 0px;
    float: right;
    background: ${props => props.background};
    display: none;
    cursor: pointer;
    transition: scale 0.3s ease;
    z-index: inherit;

    &:hover {
        scale: 1.1;
    }

    @media (max-width: ${dimensions.md}) {
        display: block;
    }
`;

const LinksContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 50px;
    z-index: inherit;
    opacity: ${props => props.animation == 0 ? 1 : 0};
    transition: opacity 1s ease-in-out;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 20px 20px 20px;
    box-sizing: border-box;
    z-index: inherit;
`;

const Logo = styled.img`
    height: 50px;
    width: 90.1667px;
    z-index: inherit;
    opacity: ${props => props.animation == 0 ? 1 : 0};
    transition: opacity 1s ease-in-out;
`;

const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${navbarHeight};
    z-index: inherit;
`;

const CustomLink = styled(Link)`
    display: block;
    transition: transform .5s cubic-bezier(.075,.82,.165,1);
    position: relative;
    font-size: 12.22vmin;
    line-height: 50px;
    color: white;
    margin: 0px;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: bold;
    z-index: inherit;

    &:hover {
        transform: translate3d(20px,0,0);
        color: white;
    }
    
`;



function NavbarMenu({ theme, handleMenu, menuVisible }) {
    const [animation, setAnimation] = useState(0)

    function handleClose() {
        setAnimation(1);

        setTimeout(() => {
            handleMenu(false);
            setAnimation(0);
        }, 1000);
    }
    useEffect(() => {
        setAnimation(!menuVisible);
    }, [menuVisible])


    return (

        <Container visible={menuVisible}>
            <Background animation={animation} />
            <Content>
                <Navbar>
                    <Logo animation={animation} src="/image/logo_white.svg" alt="be local madeira white logo" />
                    <Menu background={theme.background} onClick={handleClose} />
                </Navbar>
                <LinksContainer animation={animation}>
                    <CustomLink onClick={handleClose} to="/">Página inicial</CustomLink>
                    <CustomLink onClick={handleClose} to="/sessoes">Sessões</CustomLink>
                    <CustomLink onClick={handleClose} to="/sobre">Acerca de mim</CustomLink>
                    <CustomLink onClick={handleClose} to="/contact">Contactos</CustomLink>
                    <CustomLink onClick={handleClose} to="/login">Iniciar sessão</CustomLink>
                </LinksContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(NavbarMenu));

