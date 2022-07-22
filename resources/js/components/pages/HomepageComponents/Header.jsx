import React from 'react'
import styled, { withTheme } from "styled-components";
import { borderRadius, dimensions, maxWidth } from '../../../helper';
import { Carousel } from 'react-responsive-carousel';

const Container = styled.section`
  width: 100%;
`;

const TitleContainer = styled.div`
  display: block;
  padding: 50px;
  box-sizing: border-box;
  text-align: center;
  width: 50%;
  max-width: ${maxWidth};
  margin: 150px auto 80px auto;

    @media (max-width: ${dimensions.md}) {
        padding: 20px;
        width: 100%;
    }

    h1 {
        font-family: 'DM Serif Display';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 66px;
        text-align: center;
        color: ${props => props.color};
    }

    h2 {
        font-size: 18px;
        margin: 0 auto;
        text-align: center;
        opacity: .6;
        width: 80%;

        @media (max-width: ${dimensions.md}) {
            font-size: 18px;
        }
    }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  box-sizing: border-box;
  width: 100vw;
  position: relative;
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    background-color: ${props => props.background};
    opacity: .3;
`;


const CustomCarousel = styled(Carousel)`
    max-width: ${maxWidth};
    margin: auto;
    position:relative;

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
        right: 30px;
    }

    .carousel .control-prev.control-arrow {
        left: 30px;
    }

    

    img {
        padding: 0px 20px;
        background-color: white;
    }

    .carousel-information {
        background: white;
        position: absolute;
        width: 30%;
        right: 0;
        bottom: 0;
        text-align: left;
        padding: 30px;
        box-sizing: border-box;

        h3 {
            font-family: 'DM Serif Display';
            font-size: 28px;
        }

        p {
            font-size: 14px;
        }
    }

`;

function Header({ theme }) {
    return (
        <Container>
            <TitleContainer titleColor={theme.darkAccent}>
                <h1>Recursos para profissionais que trabalham com idosos</h1>
                <h2>Nesta página encontrará sessões de dança coreográfica, jogos musicais na mesa, e-books de exercícios de estimulação cognitiva e muito mais que o ajudará a enriquecer o dia-a-dia do seu grupo de idosos. </h2>
            </TitleContainer>
            <CarouselContainer>
                <Background background={theme.lightAccent} />
                <CustomCarousel showThumbs={false}>
                    <div>
                        <img src="/image/homepage/header_session.jpg" />
                        <div className="carousel-information">
                            <h3>Sessões</h3>
                            <p>Aceda a sessões já programadas, assista a vídeos e descarregue aúdios e descrições das atividades</p>
                        </div>
                    </div>
                    <div>
                        <img src="/image/homepage/header_session.jpg" />
                        <div className="carousel-information">
                            <h3>Produtos</h3>
                            <p>Jogos, e-books e exibições de powerpoint de atividades para estimular as habilidades cognitivas</p>
                        </div>
                    </div>
                    <div>
                        <img src="/image/homepage/header_session.jpg" />
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