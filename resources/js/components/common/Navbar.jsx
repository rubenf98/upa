import React, { useState, useEffect, useCallback } from 'react'
import styled, { withTheme, keyframes } from "styled-components";
import {
    Link
} from "react-router-dom";
import { dimensions, maxWidth, navbarHeight } from '../../helper';
import { connect } from "react-redux";
import { handleMenu } from "../../redux/application/actions";
import { openCart } from "../../redux/cart/actions";

const rotate = keyframes`
  0% {
    transform: translateY(-2px)
  }

  50% {
    transform: translateY(2px)
  }

  100% {
    transform: translateY(-2px)
  }
`;


const Container = styled.div`
    height: ${props => props.visible ? navbarHeight : "0px"}; 
    width: 100%;
    z-index: 100;
    background-color: ${props => props.visible ? props.background : "#fff"};
    padding: 0px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    transition: height .5s ease, background .5s ease;
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
    align-items: center;
`;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LinkContainer = styled.div`
    position: relative;
    margin: 0px 15px;
    box-sizing: border-box;
    

    
`;

const NavbarLink = styled(Link)`
    display: block;
    font-size: 16px;
    text-transform: capitalize;
    cursor: pointer;
    color: inherit; 
    
    @media (max-width: ${dimensions.lg}) {
        display: none;
    }

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


const Menu = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background: ${props => props.background};
    display: none;
    cursor: pointer;
    transition: scale 0.3s ease;
    z-index: 999;

    &:hover {
        scale: 1.1;
    }

    @media (max-width: ${dimensions.lg}) {
        display: block;
    }
`;


const Cart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    animation: ${rotate} 3s ease-in-out infinite;

    img {
        width: 25px;
    }
    p {
        text-align: center;
        margin: 0px;
        font-size: 16px;
        line-height: 12px;
        color: ${props => props.color};
        font-weight: 900;
    }
`;

const AccountButton = styled.div`
    font-size: 16px;
    text-transform: capitalize;
    cursor: pointer;
    background-color: white;
    padding: 8px 18px;
    box-sizing: border-box;
    
    a {
        font-weight: bold;
        color: ${props => props.color};
    }

    @media (max-width: ${dimensions.md}) {
        display: none;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;

    h1 {
        font-size: 16px;
        margin-left: 10px;
        font-weight: bold;

        @media (max-width: ${dimensions.md}) {
            display: none;
        }
    }

    a {
        display: block;
        text-decoration: none;

        img {
            height: 50px;

            @media (max-width: ${dimensions.md}) {
                height: 50px;
            }
        }
    }
`;


function Navbar({ theme, openCart, handleMenu, cartItems }) {
    const [y,
        setY] = useState(document.scrollingElement.scrollHeight);
    const [scrollDirection,
        setScrollDirection] = useState(1);

    const [backgroundColor,
        setBackgroundColor] = useState("#fff");

    const handleNavigation = useCallback((e) => {
        if (window.scrollY > 500) {
            if (y > window.scrollY) {
                setScrollDirection(1);
                setBackgroundColor(theme.lightAccent)
            } else if (y < window.scrollY) {
                setScrollDirection(0);
            }
        } else {
            setScrollDirection(1);
            setBackgroundColor("#fff")
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

        <Container visible={scrollDirection} background={backgroundColor}>
            <Content visible={scrollDirection}>
                <LogoContainer>
                    <Link to="/">
                        <img src="/image/logo.png" alt="unidos pela atividade logo" />
                    </Link>
                    <h1>Unidos Pela <br /> Atividade</h1>
                </LogoContainer>
                <FlexItem>

                    <MenuContainer >
                        <LinkContainer>
                            <NavbarLink to="/"><span>início</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink to="/sessoes"><span>oferta formativa</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink to="/produtos"><span>produtos</span> <div /></NavbarLink>
                        </LinkContainer>
                        <LinkContainer>
                            <NavbarLink to="/contact"><span>contactos</span> <div /></NavbarLink>
                        </LinkContainer>
                    </MenuContainer>
                </FlexItem>
                <FlexItem>
                    

                    <AccountButton color={theme.textAccent} to="/painel">
                        <Link to="/painel">
                            a minha conta
                        </Link>

                    </AccountButton>

                    <LinkContainer>

                        <Cart onClick={openCart} color={theme.textAccent}>
                            <p>{cartItems.length}</p>
                            <img src="/icon/cart.svg" alt="carrinho" />
                        </Cart>


                    </LinkContainer>

                    <Menu background="#000" onClick={() => handleMenu(true)} />
                </FlexItem>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMenu: (state) => dispatch(handleMenu(state)),
        openCart: () => dispatch(openCart()),
    };
};

const mapStateToProps = (state) => {
    return {
        menuVisible: state.application.menuVisible,
        cartItems: state.cart.items,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Navbar));
