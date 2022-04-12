import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import styled from "styled-components";
import SmoothScroll from "./common/SmoothScroll";

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
    overflow-x: hidden;
`;

class Layout extends Component {
    render() {
        return (
            <ThemeProvider theme={{
                text: '#000000',
                lightText: "#777",
                inverseText: '#ffffff',
                background: '#ffffff',
                cBlue: "#36475d",
                cPink: "#FFEFCD",
                cYellow: "#FFCB57",
            }}>
                <Container>
                    <SmoothScroll>
                        <GlobalStyles />
                        <Navbar onOrder={this.openForm} />

                        <div> {this.props.children} </div>


                        <Footer />
                    </SmoothScroll>
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