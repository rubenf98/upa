import React, { useEffect, useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import styled from "styled-components";
import moment from "moment";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { connect } from "react-redux";
import { navbarHeight } from "../helper";
import NavbarMenu from "./common/NavbarMenu";
import Cart from "./pages/Cart";
import { setCart } from "../redux/cart/actions";

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    margin: auto;
    display: block;
    position: relative;
    box-sizing: border-box;
`;

const Content = styled.div`
    margin-top: ${props => props.hasMargin ? navbarHeight : "0px"};
`;

function Layout({ cart, minimalist, children, setCart }) {
    const [previousCartLength, setPreviousCartLength] = useState(0)

    useEffect(() => {
        if (cart.length || previousCartLength > cart.length) {
            var expire = moment().add(7, 'days').format('ddd, D MMM YYYY H:mm:ss');

            document.cookie = "cart=" + JSON.stringify(cart) + ";expires=" + expire + "; path=/";
            setPreviousCartLength(cart.length)
        }

    }, [cart])

    useEffect(() => {

        let name = "cart=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                var cartString = c.substring(name.length, c.length);
                setCart(JSON.parse(cartString));
            }
        }

    }, [])


    return (

        <ThemeProvider theme={{
            text: '#000000',
            background: '#ffffff',
            lightAccent: "#93ecee",
            opacityLightAccent: "#b9ebec4d",
            darkAccent: "#1a4355",
            textAccent: "#289294",
        }}>
            <Container background="white">
                <NavbarMenu />
                <Cart />


                <GlobalStyles />

                {!minimalist && <Navbar />}





                <Content hasMargin={!minimalist}> {children} </Content>



                {!minimalist && <Footer />}

            </Container>
        </ThemeProvider>
    )
}


const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
        cart: state.cart.items,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        setCart: (cart) => dispatch(setCart(cart)),
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);