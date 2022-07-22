import React from "react";
import styled, { withTheme } from "styled-components";
import { logout, setAuthorizationToken } from "../../redux/auth/actions";
import Row from "antd/es/row"
import { BlackButton } from "../../styles";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";


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

const CustomLink = styled.div`
    color: white;
    &:hover {
        color: white;
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
            <BlackButton className="button-container" shadow={theme.blue}>
                <CustomLink onClick={handleLogout}>Sair</CustomLink>

            </BlackButton>

        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};


export default connect(null, mapDispatchToProps)(withTheme(NavBar))