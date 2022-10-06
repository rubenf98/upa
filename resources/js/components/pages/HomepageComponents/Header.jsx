import React, { useState, useEffect } from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, dimensions, fonts, maxWidth } from '../../../helper';
import { Carousel } from 'react-responsive-carousel';

const Container = styled.section`
  width: 100%;
`;

const TitleContainer = styled.div`
    display: block;
    box-sizing: border-box;
    width: 100%;
    max-width: ${maxWidth};
    margin: 200px auto 0px auto;
    padding: 0px 10px;

    @media (max-width: ${dimensions.lg}) {
        margin: 150px auto 0px auto;
    }

    @media (max-width: ${dimensions.nd}) {
        margin: 50px auto 0px auto;
    }

    h1 {
        font-family: ${fonts.title};
        font-size: 60px;
        line-height: 68px;
        color: ${props => props.color};
        margin: 0px;
        font-weight: bold;

        @media (max-width: ${dimensions.xl}) {
            font-size: 60px;
            line-height: 66px;
        }

        @media (max-width: ${dimensions.md}) {
            font-size: 48px;
            line-height: 54px;
            margin-bottom: 10px;
            br {
                display: none;
            }
        }

        @media (max-width: ${dimensions.sm}) {
            font-size: 33px;
            line-height: 36px;
        }

        span {
            color: ${props => props.accent}
        }
    }

    h2 {
        font-size: 20px;
        opacity: .7;
        margin: 10px 0px 50px 0px;
        width: 70%;

        @media (max-width: ${dimensions.lg}) {
            width: 100%;
        }

        @media (max-width: ${dimensions.md}) {
            display: none;
        }
    }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
`;


const CustomCarousel = styled(Carousel)`
    position: relative;

    .carousel-status {
        display: none;
    }

    .carousel.carousel-slider .control-arrow:hover {
        background-color: transparent;
    }

    &:hover {
        .carousel.carousel-slider {
            background-color: transparent;
        }
    }

    .carousel .control-next.control-arrow {
        right: 20px;
        opacity: .8;

        &:before {
            border-width: 20px !important;
        }

        @media (max-width: ${dimensions.md}) {
            right: 20px;

            &:before {
                border-width: 14px !important;
            }
        }
    }

    .carousel .control-prev.control-arrow {
        left: 20px;
        opacity: .8;

        &:before {
            border-width: 20px !important;
        }

        @media (max-width: ${dimensions.md}) {
            left: 20px;

            &:before {
                border-width: 14px !important;
            }
        }
    }

    img {
        width: 100%;
        max-height: calc(100vh - 100px);
        min-height: 300px;
        object-fit: cover;
    }

    .carousel-information {
        color: white;
        z-index: 5;
        position: absolute;
        width: 100%;
        max-width: ${maxWidth};
        left: 50%;
        transform: translate(-50%, 0);
        bottom: 20px;
        text-align: left;
        box-sizing: border-box;
        padding: 0px 20px;
        box-sizing: border-box;


        h3 {
            font-family: ${fonts.title};
            font-size: 18px;
            color: white;
            text-transform: uppercase;
            margin: 0px;

            @media (max-width: ${dimensions.md}) {
                font-size: 14px;
            }
        }

        p {
            font-size: 36px;
            font-family: ${fonts.text};
            margin-top: 0px;

            @media (max-width: ${dimensions.lg}) {
                font-size: 28px;
            }

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }
    }

`;




function Header({ theme }) {
    return (
        <Container>
            <TitleContainer titleColor={theme.darkAccent} accent={theme.textAccent}>
                <h1>Recursos para profissionais <br /> que trabalham com <span>idosos</span></h1>
                <h2>Nesta página encontrará sessões de dança coreográfica, jogos musicais na mesa, e-books de exercícios de estimulação cognitiva e muito mais que o ajudará a enriquecer o dia-a-dia do seu grupo de idosos. </h2>
            </TitleContainer>
            <CarouselContainer>
                <CustomCarousel showThumbs={false}>
                    <div>
                        <picture>
                            <source media="(min-width: 1921px)" srcSet="/image/homepage/header_session_3000.jpg" />
                            <source media="(min-width: 721px) and (max-width: 1920px)" srcSet="/image/homepage/header_session_1920.jpg" />
                            <source media="(max-width: 720px)" srcSet="/image/homepage/header_session_720.jpg" />

                            <img src="/image/homepage/header_session_1920.jpg" alt="profile" loading="eager" />
                        </picture>
                        <div className="carousel-information">
                            <h3>Sessões</h3>
                            <p>Aceda a sessões vídeo e descarregue aúdios e instruções de todas as atividades</p>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <source media="(min-width: 1921px)" srcSet="/image/homepage/header_session_3000.jpg" />
                            <source media="(min-width: 721px) and (max-width: 1920px)" srcSet="/image/homepage/header_session_1920.jpg" />
                            <source media="(max-width: 720px)" srcSet="/image/homepage/header_session_720.jpg" />

                            <img src="/image/homepage/header_session_1920.jpg" alt="profile" loading="lazy" />
                        </picture>
                        <div className="carousel-information">
                            <h3>Produtos</h3>
                            <p>Jogos, e-books e exibições de atividades para estimular as habilidades cognitivas</p>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <source media="(min-width: 1921px)" srcSet="/image/homepage/header_workshops_3000.jpg" />
                            <source media="(min-width: 721px) and (max-width: 1920px)" srcSet="/image/homepage/header_workshops_1920.jpg" />
                            <source media="(max-width: 720px)" srcSet="/image/homepage/header_workshops_720.jpg" />

                            <img src="/image/homepage/header_workshops_1920.jpg" alt="profile" loading="lazy" />
                        </picture>
                        <div className="carousel-information">
                            <h3>Workshops</h3>
                            <p>Cursos, workshops e oficinas no âmbito da estimulação cognitiva e motora</p>
                        </div>
                    </div>
                </CustomCarousel>
            </CarouselContainer>
        </Container>
    )
}

export default withTheme(Header)