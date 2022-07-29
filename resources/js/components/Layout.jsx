import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { connect } from "react-redux";
import { navbarHeight } from "../helper";
import NavbarMenu from "./common/NavbarMenu";

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    margin: auto;
    display: block;
    position: relative;
    box-sizing: border-box;

    .home-bg {
        position: fixed;
        left: 0%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        z-index: -1;
        background-color: ${props => props.background};

        .moving-noise {
            position: relative;
            z-index: -2;
            width: 100%;
            height: 100%;
            background-image: url("/image/noise.gif");
            background-position: 50% 50%;
            background-size: 200px;
            opacity: 0;
            mix-blend-mode: soft-light;
        }
    }
`;

const Content = styled.div`
    margin-top: ${props => props.hasMargin ? navbarHeight : "0px"};
`;



class Layout extends Component {
    render() {
        return (
            <ThemeProvider theme={{
                text: '#000000',
                background: '#ffffff',
                lightAccent: "#A9EAEB",
                opacityLightAccent: "#A9EAEB4D",
                darkAccent: "#2B444F",
            }}>
                <Container background="white">
                    <NavbarMenu />

                    <div className="home-bg">
                        <div className="moving-noise" />
                    </div>

                    <GlobalStyles />

                    {!this.props.minimalist && <Navbar onOrder={this.openForm} />}





                    <Content hasMargin={!this.props.minimalist}> {this.props.children} </Content>



                    {!this.props.minimalist && <Footer />}

                </Container>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.application.theme,
    };
};

export default connect(
    mapStateToProps,
    null
)(Layout);