import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { maxWidth } from '../../../helper';
import SectionTitle from '../../common/SectionTitle';

const Container = styled.section`
    background: ${props => props.background};
    color: ${props => props.color};
    min-height: 100vh;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    max-width: ${maxWidth};
    margin: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;    
`;

const Column = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.fullHeight ? "space-between" : "flex-start"};
`;

const ServiceContainer = styled.div`
    width: 80%;
    padding: 60px 30px;
    box-sizing: border-box;
    text-align: center;

    h3 {
        color: inherit;
        font-family: 'Playfair Display', serif;
        font-size: 26px;
    }

    img {
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
    }
`;

const ImageContainer = styled.div`
    width: 90%;
    height: 50vh;
    box-sizing: border-box;
    margin: auto;
    margin-bottom: 50px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const Service = ({ moveToRight = false, center = false }) => (
    <ServiceContainer style={{ margin: center ? "auto" : "0px", marginLeft: moveToRight ? "auto" : (center ? "auto" : "0px") }}>
        <img src="/icon/homepage/services1.svg" alt="" />
        <h3>Unforgettable experiences</h3>
        <p>Creating your trip is entirely collaborative and our Travel Researchers are here for every step.</p>
    </ServiceContainer>
)

function Services() {
    const themeContext = useContext(ThemeContext);
    return (
        <Container color={themeContext.inverseText} background={themeContext.primary}>
            <Content>
                <SectionTitle title={(<>What we have to <span>offer</span></>)} subtitle="services" />
                <Column>
                    <Service />
                    <Service moveToRight />
                </Column>
                <Column fullHeight>
                    <ImageContainer>
                        <img src="/image/homepage/service.png" />
                    </ImageContainer>

                    <Service center />
                </Column>
                <Column>
                    <Service moveToRight />
                    <Service />
                </Column>
            </Content>
        </Container>
    )
}

export default Services