import React from 'react'
import styled, { withTheme } from "styled-components";
import { BlackButton } from '../../../styles';

const Container = styled.div`
 //
`;

const Title = styled.h1`
    font-size: 7vw;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    line-height: 100px;
    margin: 0px 0px 150px 0px;
`;

const CourseContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: flex;
    width: 85%;
    margin: auto;
    margin-bottom: 100px;

    img {
        width: 50%;
    }

    .information {
        width: 50%;
        padding: 0px 30px;
        box-sizing: border-box;

        h3 {
            font-weight: bold;
            font-size: 24px;
        }
        h2 {
            font-weight: bold;
            font-size: 90px;
            margin: 0px 0px 50px 0px;
            line-height: 92px;
        }
        p {
            font-size: 20px;
        }
    }
`;

const ButtonContainer = styled.div`
    margin: 50px 0px;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    .buy-button {
        margin-left: 15px;
    }
`;


function Courses({ theme }) {

    const Course = ({ img, h2, h3, p, hasCourse }) => (
        <CourseContainer>
            <img src={img} alt="course image" />
            <div className='information'>
                <h3>{h3}</h3>
                <h2>{h2}</h2>
                <p>{p}</p>
                <ButtonContainer>
                    <BlackButton shadow={theme.blue}>
                        Saber Mais...
                    </BlackButton>
                    {!hasCourse &&
                        <BlackButton className='buy-button' background={theme.background} shadow={theme.blue}>
                            Comprar
                        </BlackButton>
                    }

                </ButtonContainer>
            </div>

        </CourseContainer>
    )
    return (
        <Container>
            <Title>oferta formativa</Title>
            <Course
                hasCourse
                img="/image/session/sentado.jpg"
                h3="From the New York Times bestselling author"
                h2="Danças Coreográficas Sentadas"
                p="From the #1 New York Times bestselling author of The Raven Boys, a mesmerizing story of dreams and desires, death and destiny."
            />

            <Course
                img="/image/session/mesa.jpg"
                h3="From the New York Times bestselling author"
                h2="Jogos Musicais na Mesa"
                p="From the #1 New York Times bestselling author of The Raven Boys, a mesmerizing story of dreams and desires, death and destiny."
            />
        </Container>
    )
}

export default withTheme(Courses)