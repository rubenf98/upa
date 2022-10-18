import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled, { withTheme, keyframes } from "styled-components";
import { dimensions, fonts, navbarHeight } from '../../helper';
import { logout, setAuthorizationToken } from "../../redux/auth/actions";
import { connect } from "react-redux";
import { handleDashboardMenu } from "../../redux/application/actions";

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
    background-color: ${props => props.background};
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

    @media (max-width: ${dimensions.lg}) {
        display: block;
    }
`;

const LinksContainer = styled.div`
    color: black;
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
    font-size: 28px;
    line-height: 38px;
    color: black;
    margin: 0px;
    font-family: ${fonts.text};
    font-weight: bold;
    z-index: inherit;

    &:hover {
        transform: translate3d(20px,0,0);
        color: black;
    }
    
`;

const Leave = styled.div`
    display: block;
    transition: transform .5s cubic-bezier(.075,.82,.165,1);
    position: relative;
    font-size: 28px;
    line-height: 38px;
    color: black;
    margin: 0px;
    font-family: ${fonts.text};
    font-weight: bold;
    z-index: inherit;
    cursor: pointer;

    &:hover {
        transform: translate3d(20px,0,0);
        color: black;
    }
    
`;



function NavbarDashboardMenu({ logout, isAdmin, setAuthorizationToken, theme, handleDashboardMenu, menuDashboardVisible }) {
    const [animation, setAnimation] = useState(0)
    var navigate = useNavigate();

    function handleClose() {
        setAnimation(1);

        setTimeout(() => {
            handleDashboardMenu(false);
            setAnimation(0);
        }, 1000);
    }

    const handleLogout = () => {

        logout().then((response) => {
            if (response.action.payload.status == 200) {
                handleDashboardMenu(false);
                localStorage.removeItem("token");
                setAuthorizationToken(false);

                navigate("/");

            }
        });
    };

    useEffect(() => {
        setAnimation(!menuDashboardVisible);
    }, [menuDashboardVisible])


    return (

        <Container visible={menuDashboardVisible}>
            <Background background={theme.lightAccent} animation={animation} />
            <Content>
                <Navbar>
                    <Logo animation={animation} src="/image/logo.svg" alt="logos unidos pela atividade" />
                    <Menu background="black" onClick={handleClose} />
                </Navbar>
                <LinksContainer animation={animation}>
                    <CustomLink onClick={handleClose} to="/painel">Página inicial</CustomLink>
                    {isAdmin && <CustomLink onClick={handleClose} to="/painel/users">Utilizadores</CustomLink>}
                    <CustomLink onClick={handleClose} to="/painel/sessoes">Oferta formativa</CustomLink>
                    <Leave onClick={handleLogout}>Sair</Leave>
                </LinksContainer>
            </Content>

        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDashboardMenu: (state) => dispatch(handleDashboardMenu(state)),
        logout: () => dispatch(logout()),
        setAuthorizationToken: (token) => dispatch(setAuthorizationToken(token)),
    };
};

const mapStateToProps = (state) => {
    return {
        menuDashboardVisible: state.application.menuDashboardVisible,
        isAdmin: state.auth.isAdmin
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(NavbarDashboardMenu));
