import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { connect } from "react-redux";

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



class Layout extends Component {
    render() {
        return (
            <ThemeProvider theme={{
                text: '#000000',
                lightText: "#777",
                inverseText: '#ffffff',
                background: '#FFFD63',
                lightBlue: "#c4fcf1",
                green: "#52da72",
                darkGreen: "#00310b",
                yellow: "#FFFD63",
                darkYellow: "#452b00",
                blue: "#7df3d0",
                darkBlue: "#122038",
            }}>
                <Container background="#FFE32B">
                    <div className="home-bg">
                        <div className="moving-noise" />
                    </div>

                    <GlobalStyles />

                    <Navbar onOrder={this.openForm} />



                    <div> {this.props.children} </div>




                    <Footer />
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