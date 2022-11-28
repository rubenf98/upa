import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, fontSize, maxWidth, navbarHeight } from '../../helper';
import { StyledButton, titleStyle } from '../../styles';
import Video from './HomepageComponents/Video';
import { Carousel } from 'react-responsive-carousel';
import { verifyAddToCart } from "../../redux/cart/actions";
import { connect } from "react-redux";


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

    h3 {
        ${titleStyle}
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

        @media (max-width: ${dimensions.md}) {
            .carousel-root {
                width: 100%;
            }
        }
    
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
            ${titleStyle}

            @media (max-width: ${dimensions.md}) {
                font-size: 36px;
                line-height: 38px;
                text-align: center;
            }

        }

        p {
            font-size: 16px;
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

        .flex {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            a {
                span {
                    color: ${props => props.color};
                    font-weight: bold;
                    font-size: 16px;
                    margin-left: 20px;
                    text-transform: capitalize;

                    &:hover {
                        color: ${props => props.color};
                    }
                }
            }
        } 
        
    }
    

    
`;

const ButtonContainer = styled(Link)`
     //
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
        justify-content: space-between;
        width: 100%;

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
            opacity: 0;
            pointer-events: none;
            cursor: default;
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
        margin-bottom: 30px;
        padding: 0 20px;
        box-sizing: border-box;
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

            @media (max-width: ${dimensions.md}) {
                width: calc(100vw - 40px);
                right: -20px;
            }
        }
    }

    .info-container {
        width: 50%;
        text-align: left;
        padding: 0px 50px; 
        box-sizing: border-box;
        position: relative;

        h4, .price {
            margin: 0px;
        }
        
        h4 {
            font-size: ${fontSize.subtitle};
            font-family: ${fonts.title};
            font-weight: bold;

            @media (max-width: ${dimensions.md}) {
                font-size: 18px;
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
            font-size: 18px;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }

        .flex {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
        }

        a {
            span {
                color: ${props => props.color};
                font-weight: bold;
                font-size: 16px;
                margin-left: 20px;
                text-transform: capitalize;

                &:hover {
                    color: ${props => props.color};
                }
            }
        }
    }

    @media (max-width: ${dimensions.md}) {

        .image-container {
            width: 100%;
            padding: 20px 20px 20px 0px;
            box-sizing: border-box;
            margin: 0px 0px 30px 0px;
        }

        .info-container {
            width: 100%;
            padding: 0px; 
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

function Sessions({ theme, verifyAddToCart }) {
    const carousel = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1)

    function next() {
        carousel.current.increment()
        setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 3);
    }

    function previous() {
        carousel.current.decrement()
        setCurrentSlide(currentSlide > 1 ? currentSlide - 1 : 1);
    }

    const addToCart = (element) => {
        verifyAddToCart(element);
    };

    const Session = ({ image, title, price, description, to, id }) => (
        <SessionContent color={theme.textAccent} background={theme.lightAccent}>
            <div className='image-container'>
                <img src={"/image/sessions/" + image + ".jpg"} alt="" />
                <div className="background" />
            </div>

            <div className='info-container'>
                <SlideIndicator><p>0{currentSlide} <span>/03</span></p></SlideIndicator>
                <h4>{title}</h4>
                <p className="price">{price}.00€</p>

                <p className="description">{description}</p>

                <div className='flex'>

                    <StyledButton
                        onClick={() => addToCart({
                            title: title,
                            image: '/image/sessions/' + image + '.jpg',
                            price: price,
                            type: "App\\Models\\Course",
                            id: id,
                        })}
                    >
                        Adicionar ao carrinho
                    </StyledButton>

                    <Link to={to}>
                        <span>saber mais</span>
                    </Link>
                </div>
            </div>
        </SessionContent >
    );



    return (
        <>
            <Header>
                <div className='column'>
                    <h2>Sessões de estimulação cognitiva e motora</h2>
                    <ul>
                        <li> Jogos Musicais na mesa com vários elementos; </li>
                        <li> Jogos Musicais com Balão; </li>
                        <li> Jogos Musicais com copos, colheres, paus, arcos e instrumentos musicais; </li>
                        <li> Dança Coreográfica sentada e de pé; </li>
                        <li> Outras atividades. </li>

                    </ul>

                    <p>Clique no vídeo para assistir a uma descrição das atividades.</p>
                    <div className='flex'>

                        <ButtonContainer to="/login?mode=2">
                            <StyledButton>
                                Registar
                            </StyledButton>
                        </ButtonContainer>

                        <Link to="/sobre">
                            <span>Acerca de mim</span>
                        </Link>
                    </div>


                </div>
                <div className='column'>
                    <div className='offset' />
                    <div className='video-container'>
                        <Video controlsList="nodownload" video="/video/apresentacao.mp4" thumbnail='/image/sessions/header.jpg' />
                    </div>

                </div>
            </Header>

            <SessionsContainer color={theme.textAccent}>

                <h3>Sessões de Estimulação Cognitiva e Motora</h3>
                <div className='content'>
                    <Carousel
                        transitionTime={800}
                        ref={carousel}
                        showArrows={false}
                        renderThumbs={false}
                        showThumbs={false}
                        showIndicators={false}
                        swipeable={false}
                    >
                        {/* <Session
                            id={1}
                            title="Sessão Gratuita"
                            price={0}
                            image="free"
                            to="sessaoGratuita"
                            description="Sessão gratuita disponibilizada a qualquer utilizador que se registe na plataforma! Esta é composta por uma dança coreográfica snetada e um jogo musical na mesa."
                        /> */}
                        <Session
                            id={2}
                            title="Dança Coreográfica Sentada (Sessão de 10 danças)"
                            price={32}
                            image="sentado"
                            to="dancaCoreograficaSentada"
                            description="Modalidade de baixo impacto físico, que tem como propósito a realização de um conjunto de gestos e movimentos simples e fáceis de executar. O objetivo é estimular as capacidades físicas e cognitivas, tais como: a memória, a atenção, a coordenação, entre outras."
                        />
                        <Session
                            id={3}
                            title="Jogos Musicais na Mesa (Sessão de 10 jogos)"
                            price={32}
                            image="mesa"
                            to="jogosMusicaisNaMesa"
                            description="Estas atividades, além de proporcionarem divertimento, estimulam domínios como: a escuta, a atenção, a concentração, a memória e a expressão. São necessários 2 copos e 2 bolas para a realização destes jogos."
                        />

                        <Session
                            id={4}
                            title="Dança Coreográfica de Natal (Sessão de 10 danças)"
                            price={32}
                            image="natal"
                            to="dancaCoreograficaNatal"
                            description="Esta Sessão reúne danças coreográficas de Natal sentadas e de pé. Também reúne vídeos com a elaboração dos diferentes acessórios que são utilizados nas respetivas danças."
                        />

                        {/* <Session
                            id={4}
                            title="Jogos Musicais com Balão"
                            price={32}
                            image="balao"
                            to="jogosMusicaisComBalao"
                            description="lorem"
                        /> */}
                    </Carousel>

                    <CarouselStatusContainer color={theme.darkAccent} currentSlide={currentSlide}>
                        <div className='arrow-container'>
                            <img className={currentSlide == 1 ? "previous hidden" : "previous"} onClick={previous} src="/icon/sessions/previous.svg" alt="previous" />
                            <img className={currentSlide == 4 ? "next hidden" : "next"} onClick={next} src="/icon/sessions/next.svg" alt="next" />
                        </div>
                    </CarouselStatusContainer>
                </div>


            </SessionsContainer>

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        verifyAddToCart: (element) => dispatch(verifyAddToCart(element)),
    };
};

export default connect(null, mapDispatchToProps)(withTheme(Sessions));
