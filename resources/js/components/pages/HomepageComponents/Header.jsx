import React from 'react'
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
    margin: 350px auto 0px auto;
    padding: 0px 10px;

    @media (max-width: ${dimensions.lg}) {
        margin: 250px auto 0px auto;
    }

    @media (max-width: ${dimensions.nd}) {
        margin: 50px auto 0px auto;
    }

    h1 {
        font-family: ${fonts.title};
        font-size: 72px;
        line-height: 78px;
        color: ${props => props.color};
        margin: 0px;

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
        font-size: 18px;
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
        right: calc((100vw - ${maxWidth}) / 2);
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
        left: calc((100vw - ${maxWidth}) / 2);
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
        min-height: 600px;
        object-fit:cover;
    }

    .carousel-information {
        color: white;
        z-index: 5;
        position: absolute;
        width: 70%;
        left: calc((100vw - ${maxWidth}) / 2);
        bottom: 20px;
        text-align: left;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            left: 10px;
            width: 100%;
        }

        

        h3 {
            font-family: 'Inter';
            font-size: 16px;
            color: white;
            text-transform: uppercase;
            margin: 0px;

            @media (max-width: ${dimensions.md}) {
                font-size: 14px;
            }
        }

        p {
            font-size: 52px;
            font-family: ${fonts.title};
            line-height: 60px;
            width: 90%;
            margin-top: 0px;

            @media (max-width: ${dimensions.lg}) {
                font-size: 30px;
                line-height: 36px;
            }

            @media (max-width: ${dimensions.md}) {
                font-size: 24px;
                line-height: 28px;
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
                        <img src="/image/homepage/header_session_1920.jpg" />
                        <div className="carousel-information">
                            <h3>Sessões</h3>
                            <p>Aceda a sessões já programadas, assista a vídeos e descarregue aúdios e descrições das atividades</p>
                        </div>
                    </div>
                    <div>
                        <img src="/image/homepage/header_session_1920.jpg" loading="lazy" />
                        <div className="carousel-information">
                            <h3>Produtos</h3>
                            <p>Jogos, e-books e exibições de powerpoint de atividades para estimular as habilidades cognitivas</p>
                        </div>
                    </div>
                    <div>
                        <img src="/image/homepage/header_workshops_1920.jpg" loading="lazy" />
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