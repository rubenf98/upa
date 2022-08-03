import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth, navbarHeight } from '../../helper';
import { StyledButton } from '../../styles';
import Video from './HomepageComponents/Video';
import { Carousel } from 'react-responsive-carousel';


const SessionsContainer = styled.div`
    margin: 100px auto;
    width: 100%;
    max-width: ${maxWidth};
    position: relative;

    .carousel-status {
        display: none;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 0px;
        width: 100%;
        box-sizing: border-box;
    }
    
    h2 {
        text-transform: uppercase;
        color: ${props => props.color};
        font-size: 28px;
        font-family: ${fonts.title};
        text-align: center;
        margin: 0px;

        @media (max-width: ${dimensions.md}) {
            font-size: 22px;
        }
    }

    h3 {
        font-size: 60px;
        font-family: ${fonts.title};
        text-align: center;
        margin: 0px;
        margin-bottom: 50px;

        @media (max-width: ${dimensions.md}) {
            font-size: 36px;
        }
    }

    .content {
        width: 100%;
        max-width: ${maxWidth};
        margin: auto;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        position: relative;
    }
`;


const Header = styled.section`
    min-height: calc(100vh - ${navbarHeight});
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    

    .column {
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
        position: relative;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }

        h2 {
            font-size: 60px;
            letter-spacing: 0.027em;
            line-height: 65px;
            font-weight: bold;
            font-family: ${fonts.title};

            @media (max-width: ${dimensions.md}) {
                font-size: 36px;
                line-height: 38px;
                text-align: center;
            }

        }

        p {
            font-size: 18px;
            margin: 30px 0px;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
                text-align: center;
                width: 100%;
                margin-bottom: 0px;
            }
        }

        .video-container {
            width: calc(100% - 30px);
            margin-right: auto;
            display: block;
            position: relative;
            z-index: 2;

            @media (max-width: ${dimensions.md}) {
                width: 100%;
            }
        }

        .offset {
            position: absolute;
            right: 0;
            bottom: 30px;
            height: 80%;
            width:  80%;
            background-color: white;

            @media (max-width: ${dimensions.md}) {
                display: none;
            }
        }
    }
    

    
`;

const ButtonContainer = styled(Link)`
    margin: 20px 0px;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: ${dimensions.md}) {
        display: none;
    }
`;

const CarouselStatusContainer = styled.div`
    display: flex;
    justify-content: ${props => props.currentSlide == 1 ? "flex-end" : "flex-start"};
    align-items: center;
    width: 100vw;
    position: absolute;
    height: 40px;
    top: 50%;
    transform: translate(0, -50%);

    @media (max-width: ${dimensions.md}) {
        bottom: -20px;
        top: unset;
        transform: translate(-50%, 0);
        left: 50%;
        justify-content: center;
    }

    .arrow-container {
        display: flex;
        justify-content: center;

        img {
            width: 80px;
            margin: 0 20px;
            cursor: pointer;
            box-sizing: border-box;
            transition: padding .3s ease;
            padding: 0px 5px;

            @media (max-width: ${dimensions.md}) {
                width: 70px;
            }

            &:hover {
                padding: 0px;
            }
        }

        .hidden {
            display: none;
        }
    }
`;

const SessionContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        margin-bottom: 30px;
        padding: 0 20px;
    }

    .image-container {
        width: 50%;
        padding: 50px 50px 50px 0px;
        box-sizing: border-box;
        position: relative;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
            padding: 20px 20px 20px 0px;
            margin: auto auto 30px auto;
        }

        img {
            width: 100%;
        }

        .background {
            position: absolute;
            top: 0;
            height: 100%;
            width: calc(100% - 100px);
            right: 0;
            background-color: ${props => props.background};
            z-index: -1;

            @media (max-width: ${dimensions.md}) {
                width: calc(100% - 40px);
            }
        }
    }

    .info-container {
        width: 50%;
        text-align: left;
        padding: 0px 50px; 
        box-sizing: border-box;
        position: relative;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
            padding: 0px; 
        }

        h4, .price {
            margin: 0px;
        }
        
        h4 {
            font-size: 48px;
            font-family: ${fonts.title};

            @media (max-width: ${dimensions.md}) {
                font-size: 32px;
            }
        }

        .description {
            margin: 20px 0px;
            font-size: 18px;
            opacity: .7;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }

        .price {
            opacity: .7;
            font-size: 20px;

            @media (max-width: ${dimensions.md}) {
                font-size: 18px;
            }
        }

        a {
            display: flex;
            align-items: center;
            margin-top: 20px;
            transition: margin .3s ease;

            @media (max-width: ${dimensions.md}) {
                margin: 20px 0px;
            }

            &:hover {
                margin-left: 5px;
            }

            img {
                width: 50px;
                margin-right: 5px;
            }

            span {
                color: ${props => props.color};
                font-weight: bold;

                &:hover {
                    color: ${props => props.color};
                }
            }
        }
    }
        
`;

const SlideIndicator = styled.div`
    display: flex;
    justify-content : flex-end;
    margin-bottom: 50px;

    @media (max-width: ${dimensions.md}) {
        margin-bottom: 20px;
        margin-right: 25px;
    }

    p {
        font-size: 32px;
        margin: 0px;
        text-align: left;
        margin-left: auto;
        color: ${props => props.color};
        position: relative;
        display: inline-block;

        span {
            font-size: 14px;
            position: absolute;
            top: 10px;
            right: -30px;
        }

        @media (max-width: ${dimensions.md}) {
            font-size: 24px;

            span {
                font-size: 12px;
                position: absolute;
                top: 5px;
                right: -25px;
            }
        }
    }
`;

function Sessions({ theme }) {
    const carousel = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1)

    function next() {
        carousel.current.increment()
        setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 2);
    }

    function previous() {
        carousel.current.decrement()
        setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : 1);
    }

    const Session = ({ image, title, price, description, to }) => (
        <SessionContent color={theme.darkAccent} background="#eaeaea">
            <div className='image-container'>
                <img src={"/image/sessions/" + image + ".jpg"} alt="" />
                <div className="background" />
            </div>

            <div className='info-container'>
                <SlideIndicator><p>0{currentSlide} <span>/02</span></p></SlideIndicator>
                <h4>{title}</h4>
                <p className="price">{price}</p>

                <p className="description">{description}</p>

                <Link to={to}>
                    <img src={"/icon/sessions/indicator.svg"} alt="indicador click" />
                    <span>saber mais</span>
                </Link>
            </div>
        </SessionContent>
    );



    return (
        <>
            <Header>
                <div className='column'>
                    <h2>Sessões de estimulação cognitiva e motora</h2>
                    <p>Disponibilizamos Sessões, Workshops, Oficinas e Recursos no âmbito da Estimulação Cognitiva e Motora para aplicar com idosos.</p>
                    <p>Clique no vídeo para assistir a uma descrição das atividades.</p>
                    <ButtonContainer to="/login">
                        <StyledButton shadow={theme.darkAccent}>
                            Registar
                        </StyledButton>
                    </ButtonContainer>
                </div>
                <div className='column'>
                    <div className='offset' />
                    <div className='video-container'>
                        <Video video="/video/apresentacao.mp4" thumbnail='/image/sessions/header.jpg' />
                    </div>

                </div>
            </Header>

            <SessionsContainer color={theme.textAccent}>

                <h2>sessões</h2>
                <h3>Sessões de Estimulação Cognitiva e Motora</h3>
                <div className='content'>
                    <Carousel
                        transitionTime={800}
                        ref={carousel}
                        showArrows={false}
                        renderThumbs={false}
                        showThumbs={false}
                        showIndicators={false}
                    >
                        <Session
                            title="Jogos Musicais na Mesa"
                            price="32.00€"
                            image="mesa"
                            to="jogosMusicaisNaMesa"
                            description="Mais do que proporcionar divertimento, o jogo musical ajuda no treino dos domínios da escuta, da concentração e da expressão."
                        />
                        <Session
                            title="Dança Coreográfica Sentada"
                            price="32.00€"
                            image="sentado"
                            to="dancaCoreograficaSentada"
                            description="Modalidade de baixo impacto, que tem como propósito a realização de gestos e de movimentos simples e fáceis de executar."
                        />
                        {/* <Session
                            title="Jogos Musicais com Balão"
                            price="32.00€"
                            image="balao"
                            to="jogosMusicaisComBalao"
                            description="lorem"
                        /> */}
                    </Carousel>

                    <CarouselStatusContainer color={theme.darkAccent} currentSlide={currentSlide}>
                        <div className='arrow-container'>
                            <img className={currentSlide == 1 ? "previous hidden" : "previous"} onClick={previous} src="/icon/sessions/previous.svg" alt="previous" />
                            <img className={currentSlide == 2 ? "next hidden" : "next"} onClick={next} src="/icon/sessions/next.svg" alt="next" />
                        </div>
                    </CarouselStatusContainer>
                </div>


            </SessionsContainer>

        </>
    )
}

export default withTheme(Sessions);
