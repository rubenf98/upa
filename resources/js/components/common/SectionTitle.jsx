import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    margin: 50px auto 100px auto;
    width: 100%;

    h2 ,h3 {
        font-family: 'Playfair Display', serif;
    }
`;

const Title = styled.h2`
    color: inherit;
    text-align: center;
    margin: 0px auto;
    width: 40%;
    font-size: 60px;
    text-transform: capitalize;

    span {
        font-weight: bold;
        font-family: 'Merienda One', cursive;
    }
`;

const SubTitle = styled.h3`
    color: inherit;
    text-align: center;
    margin: 50px auto 0px auto;
    width: 100%;
    font-size: 20px;
    text-transform: uppercase;
`;

const SectionTitle = ({ title, subtitle }) => {
    return (
        <Container>
            <SubTitle>
                {subtitle}
            </SubTitle>
            <Title>
                {title}
            </Title>

        </Container>

    )
}

export default SectionTitle
