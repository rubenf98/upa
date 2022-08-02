import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth, navbarHeight } from '../../helper';
import { BlackButton } from '../../styles';
import Video from './HomepageComponents/Video';
import { Carousel } from 'react-responsive-carousel';


const SessionsContainer = styled.div`
    margin: 100px auto;
    width: 80%;
    max-width: ${maxWidth};

    .carousel-status {
        display: none;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 0 20px;
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
            font-family: 'Alegreya Sans', sans-serif;

            @media (max-width: ${dimensions.md}) {
                font-size: 36px;
                line-height: 38px;
                text-align: center;
            }

        }

        p {
            color: black;
            font-size: 22px;
            letter-spacing: 0.034em;
            margin: 30px 0px;
            text-align: justify;
            width: 90%;

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
            border: 2px solid white;
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
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    p {
        font-size: 32px;
        margin: 0px;
        text-align: left;
        color: ${props => props.color};
    }

    .arrow-container {
        display: flex;
        justify-content: center;

        img {
            width: 80px;
            cursor: pointer;
            box-sizing: border-box;
            transition: padding .3s ease;
            padding: 0px 10px;

            &:hover {
                padding: 0px 5px;
            }
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
    }

    .image-container {
        width: 50%;
        padding: 50px 50px 50px 0px;
        box-sizing: border-box;
        position: relative;

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
        }
    }

    .info-container {
        width: 50%;
        text-align: left;
        padding: 0px 50px; 
        box-sizing: border-box;

        h4, .price {
            margin: 0px;
        }
        
        h4 {
            font-size: 48px;
            font-family: ${fonts.title};
        }

        .description {
            margin: 20px 0px;
            font-size: 18px;
            opacity: .7;
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

            &:hover {
                margin-left: 5px;
            }

            img {
                width: 50px;
                margin-right: 5px;
            }

            span {
                color: ${props => props.color};

                &:hover {
                    color: ${props => props.color};
                }
            }
        }
    }
        
`;

function Products({ theme }) {
    const carousel = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1)

    const Session = ({ image, title, price, description, to }) => (
        <SessionContent color={theme.darkAccent} background={theme.lightAccent}>
            <div className='image-container'>
                <img src={"/image/products/" + image + ".jpg"} alt="" />
                <div className="background" />
            </div>

            <div className='info-container'>
                <h4>{title}</h4>
                <p className="price">{price}</p>

                <p className="description">{description}</p>

                <Link to={to}>
                    <img src={"/icon/products/indicator.svg"} alt="indicador click" />
                    <span>saber mais</span>
                </Link>
            </div>
        </SessionContent>
    );

    function next() {
        carousel.current.increment()
        setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 3);
    }

    function previous() {
        carousel.current.decrement()
        setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : 1);
    }

    return (
        <>
            <Header>
                <div className='column'>
                    <h2>Sessões de estimulação cognitiva e motora</h2>
                    <p>Disponibilizamos Sessões, Workshops, Oficinas e Recursos no âmbito da Estimulação Cognitiva e Motora para aplicar com idosos.</p>
                    <p>Clique no vídeo para assistir a uma descrição das atividades.</p>
                    <ButtonContainer to="/login">
                        <BlackButton shadow={theme.darkAccent}>
                            Registar
                        </BlackButton>
                    </ButtonContainer>
                </div>
                <div className='column'>
                    <div className='offset' />
                    <div className='video-container'>
                        <Video video="/video/apresentacao.mp4" thumbnail='/image/products/header.jpg' />
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
                            description="Caldera Creta Paradise is the place where you enjoy the endless possibilities of outstanding hospitality in Chania."
                        />
                        <Session
                            title="Dança Coreográfica Sentada"
                            price="32.00€"
                            image="sentado"
                            to="dancaCoreograficaSentada"
                            description="teste"
                        />
                        <Session
                            title="Jogos Musicais com Balão"
                            price="32.00€"
                            image="balao"
                            to="jogosMusicaisComBalao"
                            description="teste"
                        />
                    </Carousel>
                </div>
                <CarouselStatusContainer color={theme.darkAccent}>
                    <p>0{currentSlide}</p>
                    <div className='arrow-container'>
                        <img className="previous" onClick={previous} src="/icon/products/previous.svg" alt="previous" />
                        <img className="next" onClick={next} src="/icon/products/next.svg" alt="next" />
                    </div>
                </CarouselStatusContainer>

            </SessionsContainer>

        </>
    )
}

export default withTheme(Products);
