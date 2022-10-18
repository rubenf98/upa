import React from "react";
import styled, { withTheme, keyframes } from "styled-components";
import { logout, setAuthorizationToken } from "../../redux/auth/actions";
import Row from "antd/es/row"
import { StyledButton } from "../../styles";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { dimensions, maxWidth } from "../../helper";
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

const Container = styled(Row)`
    width: 100%;
    max-width: ${maxWidth};
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 60px;
    }

    .button-container{
        display: flex;
        justify-content: flex-start;
        text-align: center;
        width: 100%;
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
    margin: 0px 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.lg}) {
        display: none;
    }
`;

const NavbarLink = styled(Link)`
    display: block;
    font-size: 16px;
    text-transform: capitalize;
    cursor: pointer;
    color: black;

    &:hover {
        color: black;
        font-weight: bold;
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

function NavBar({ theme, logout, openCart, cartItems, isAdmin }) {
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
        <Container type="flex" justify="center" align="middle">
            <LogoContainer>
                <Link to="/painel">
                    <img src="/image/logo.png" alt="unidos pela atividade logo" />
                </Link>
                <h1>Unidos Pela <br /> Atividade</h1>
            </LogoContainer>
            <MenuContainer >
                <LinkContainer>
                    <NavbarLink background={theme.blue} to="/painel/"><span>página inicial</span> <div /></NavbarLink>
                </LinkContainer>

                {isAdmin &&
                    <LinkContainer>
                        <NavbarLink background={theme.blue} to="/painel/users"><span>Utilizadores</span> <div /></NavbarLink>
                    </LinkContainer>
                }
                <LinkContainer>
                    <NavbarLink background={theme.blue} to="/painel/sessoes"><span>oferta formativa</span> <div /></NavbarLink>
                </LinkContainer>
                <LinkContainer onClick={handleLogout}>
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
            </MenuContainer>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        openCart: () => dispatch(openCart()),
    };
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.items,
        isAdmin: state.auth.isAdmin
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(withTheme(NavBar))