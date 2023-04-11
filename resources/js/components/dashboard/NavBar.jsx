import React from "react";
import styled, { withTheme, keyframes } from "styled-components";
import { logout, setAuthorizationToken } from "../../redux/auth/actions";
import Row from "antd/es/row"
import { StyledButton } from "../../styles";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { dimensions, maxWidth } from "../../helper";
import { openCart } from "../../redux/cart/actions";
import { handleDashboardMenu } from "../../redux/application/actions";

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

const Container = styled.section`
    width: 100%;
    max-width: ${maxWidth};
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .button-container {
        display: flex;
        justify-content: flex-start;
        text-align: center;
        width: 100%;

        @media (max-width: ${dimensions.lg}) {
            display: none;
        }
    }

    .desktop-link {
        @media (max-width: ${dimensions.lg}) {
            display: none !important;
        }
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
        height: auto;
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

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LinkContainer = styled.div`
    position: relative;
    padding: 0px 20px;
    box-sizing: border-box;
`;

const NavbarLink = styled(Link)`
    display: block;
    font-size: 16px;
    text-transform: capitalize;
    cursor: pointer;
    color: black;

    @media (max-width: ${dimensions.lg}) {
        display: none;
    }

    &:hover {
        color: black;
        font-weight: bold;
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
                padding-left: 20px;
                box-sizing: border-box;
            }
        }
    }
`;

function NavBar({ theme, logout, openCart, cartItems, isAdmin, handleDashboardMenu }) {
    var navigate = useNavigate();

    const handleLogout = () => {

        logout().then((response) => {
            if (response.action.payload.status == 200) {
                localStorage.removeItem("token");
                setAuthorizationToken(false);
                navigate("/");
            }
        });
    };

    return (
        <Container>
            <LogoContainer>
                <Link to="/painel">
                    <img src="/image/logo.png" alt="unidos pela atividade logo" />
                </Link>
                <h1>Unidos Pela <br /> Atividade</h1>
            </LogoContainer>
            <MenuContainer >
                <LinkContainer className="desktop-link">
                    <NavbarLink background={theme.blue} to="/painel/"><span>as minhas compras</span> <div /></NavbarLink>
                </LinkContainer>




                {isAdmin &&
                    <LinkContainer className="desktop-link">
                        <NavbarLink background={theme.blue} to="/painel/users"><span>Utilizadores</span> <div /></NavbarLink>
                    </LinkContainer>
                }
                
                <LinkContainer className="desktop-link">
                    <NavbarLink background={theme.blue} to="/painel/sessoes"><span>oferta formativa</span> <div /></NavbarLink>
                </LinkContainer>
                <LinkContainer className="desktop-link">
                    <NavbarLink background={theme.blue} to="/painel/guia"><span>como comprar</span> <div /></NavbarLink>
                </LinkContainer>
                <LinkContainer className="desktop-link" onClick={handleLogout}>
                    <StyledButton className="button-container">
                        Sair
                    </StyledButton>
                </LinkContainer>


                <LinkContainer>
                    <Cart onClick={openCart} color={theme.textAccent}>
                        <p>{cartItems.length}</p>
                        <img src="/icon/cart.svg" alt="carrinho" />
                    </Cart>
                </LinkContainer>

                <LinkContainer onClick={() => handleDashboardMenu(true)}>
                    <Menu background="#000" />
                </LinkContainer>
            </MenuContainer>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDashboardMenu: (state) => dispatch(handleDashboardMenu(state)),
        logout: () => dispatch(logout()),
        openCart: () => dispatch(openCart()),
    };
};

const mapStateToProps = (state) => {
    return {
        menuDashboardVisible: state.application.menuDashboardVisible,
        cartItems: state.cart.items,
        isAdmin: state.auth.isAdmin
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withTheme(NavBar))