import React from "react";
import styled, { withTheme } from "styled-components";
import { logout, setAuthorizationToken } from "../../redux/auth/actions";
import Row from "antd/es/row"
import { StyledButton } from "../../styles";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { dimensions, maxWidth } from "../../helper";


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

function NavBar({ theme, logout }) {
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
            <Link to="/painel">
                <img src="/image/logo.svg" />
            </Link>
            <MenuContainer >
                <LinkContainer>
                    <NavbarLink background={theme.blue} to="/painel/"><span>página inicial</span> <div /></NavbarLink>
                </LinkContainer>
                <LinkContainer>
                    <NavbarLink background={theme.blue} to="/painel/sessoes"><span>oferta formativa</span> <div /></NavbarLink>
                </LinkContainer>
                <LinkContainer style={{ marginRight: "40px" }}>
                    <NavbarLink background={theme.blue} to="/painel/produtos"><span>produtos</span> <div /></NavbarLink>
                </LinkContainer>
                <div onClick={handleLogout}>
                    <StyledButton className="button-container">
                        Sair
                    </StyledButton>
                </div>
            </MenuContainer>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};


export default connect(null, mapDispatchToProps)(withTheme(NavBar))