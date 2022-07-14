import React from 'react'
import styled from "styled-components";
import { dimensions, maxWidth } from '../../../helper';

const Container = styled.section`
    width: 100%;
    max-width: ${maxWidth};
    margin: 100px auto;
    box-sizing: border-box;
    padding: 20px;

    @media (max-width: ${dimensions.md}) {
        margin: 50px auto;
    }
`;

const Title = styled.h2`
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    font-family: 'Alegreya Sans', sans-serif;
    margin-bottom: 100px;
`;

const BenefitsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;

    .middle {
        border-left: 1px solid black;
        border-right: 1px solid black;

        @media (max-width: ${dimensions.md}) {
            border-right: 0px;
        }
    }

    div {
        width: 33%;
        box-sizing: border-box;
        padding: 0px 30px;
        
        @media (max-width: ${dimensions.md}) {
            width: 50%;
            margin-bottom: 20px;
            padding: 0px 20px;
        }

        h3 {
            font-weight: 700;
            font-size: 24px;

            @media (max-width: ${dimensions.md}) {
                font-size: 22px;
                line-height: 25px;
            }
        }

        img {
            width: 100px;
            margin-bottom: 40px;
            background-color: black;
            box-sizing: border-box;
            padding: 10px;
        }
    }
`;


function Benefits() {
    return (
        <Container>
            <Title>
                Benefícios das nossas sessões para a <br /> população sénior
            </Title>

            <BenefitsContainer>
                <div>
                    <img src="/icon/brain.svg" alt="" />
                    <h3>Melhorar as funções cognitivas</h3>
                </div>
                <div className='middle'>
                    <img src="/icon/social.svg" alt="" />
                    <h3>Fomentar as relações sociais</h3>
                </div>
                <div>
                    <img src="/icon/activity.svg" alt="" />
                    <h3>Estimular as funções motoras</h3>
                </div>
            </BenefitsContainer>

        </Container>
    )
}

export default Benefits