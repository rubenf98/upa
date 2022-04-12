import React, { useContext } from 'react'
import styled, { ThemeContext } from "styled-components";
import { maxWidth, dimensions } from '../../../helper';

const Container = styled.section`
    position: relative;
    width: 100%;
    max-width: ${maxWidth};
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin: 150px auto;
`;


const Section = styled.div`
    width: 30%;
    padding: 20px;
    box-sizing: border-box;
    min-width: 200px;

    @media (max-width: ${dimensions.md}) {
        width: 50%;
    }

    img {
        width: 100%;
    }

    h2, p {
        text-align: center;
    }

    h2 {
        font-size: 32px;
        font-weight: bold;
        margin: 20px auto 5px auto;
    }

    p {
        font-size: 16px;
    }
`;



function Sections() {
    const themeContext = useContext(ThemeContext);

    return (
        <Container>
            <Section>
                <img src="/image/homepage/movement.svg" alt="" />

                <h2>Movimento</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

            </Section>
            <Section>
                <img src="/image/homepage/music.svg" alt="" />

                <h2>Música</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

            </Section>
            <Section>
                <img src="/image/homepage/memory.svg" alt="" />

                <h2>Memória</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

            </Section>
        </Container>
    )
}

export default Sections