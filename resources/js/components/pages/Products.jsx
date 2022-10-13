import { Col, Row } from 'antd';
import React from 'react'
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth } from '../../helper';
import { StyledButton } from "../../styles";
import { verifyAddToCart } from "../../redux/cart/actions";
import { connect } from "react-redux";

const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

const SessionsContainer = styled.div`
    margin: 100px auto;
    max-width: ${maxWidth};
    width: 100%;

    @media (max-width: ${dimensions.md}) {
        padding: 0 20px;
        width: 100%;
        box-sizing: border-box;
    }
    
    h2 {
        text-transform: uppercase;
        color: ${props => props.color};
        font-size: 26px;
        font-family: ${fonts.title};
        text-align: center;
        margin: 0px;

        @media (max-width: ${dimensions.md}) {
            font-size: 22px;
        }
    }

    h3 {
        font-size: 40px;
        font-family: ${fonts.title};
        text-align: center;
        margin: 0px;
        margin-bottom: 50px;

        @media (max-width: ${dimensions.md}) {
            font-size: 36px;
        }
    }
`;


const Header = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: ${maxWidth};
    margin: 100px auto 200px auto;
    

    .info-container {
        width: 60%;
        margin: 40px 0px;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }

        h2, .description {
            padding: 0px 0px 0px 20px;
            box-sizing: border-box;
        }

        h2 {
            font-size: 48px;
            font-family: ${fonts.title};

            @media (max-width: ${dimensions.md}) {
                font-size: 36px;
            }

        }

        .description {
            font-size: 18px;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }
    }
`;

const Citation = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 40px 0px 40px 20px;
    box-sizing: border-box;
    margin: 50px 0px;

    .background {
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100vw;
        left: 0;
        background-color: ${props => props.background};
        z-index: -1;
    }
        

    img {
        width: 56px;
        padding: 0px 20px 0px 0px;
        box-sizing: border-box;
    }

    .citation {
        flex: 1;

        p, h3 {
            font-size: 18px;

            @media (max-width: ${dimensions.md}) {
                font-size: 16px;
            }
        }

        h3 {
            font-weight: bold;
        }
    }
`;

const ImageContainer = styled.div`
    width: 40%;

    @media (max-width: ${dimensions.lg}) {
        width: 80%;
        padding: 0px 20px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
        padding: 50px 0px 50px 10px;
        box-sizing: border-box;
        position: relative;

        img {
            width: 90%;
            margin: auto;
            display: block;
        }

        .background {
            position: absolute;
            top: 0;
            height: 100%;
            width: 20%;
            left: 0;
            background-color: ${props => props.background};
            z-index: -1;
        }
    }

    .info-container {
        width: 50%;
        text-align: left;
        padding: 0px 10px; 
        box-sizing: border-box;

        h4, .price {
            margin: 0px;
        }
        
        h4 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 0px;
        }

        .description {
            margin: 20px 0px;
            font-size: 18px;
        }

        .price {
            opacity: .7;
            font-size: 16px;
            margin-top: 0px;

            @media (max-width: ${dimensions.md}) {
                font-size: 18px;
            }
        }

        .button-container {
            display: flex;
            justify-content: flex-start;
        }
    }
        
`;

function Products({ theme, verifyAddToCart }) {

    const addToCart = (element) => {
        verifyAddToCart(element);
    };

    const Session = ({ image, title, price, description, cartName, id }) => (
        <SessionContent color={theme.darkAccent} background="#eaeaea">
            <div className='image-container'>
                <img src={"/image/products/" + image + ".jpg"} alt="" />
                <div className="background" />
            </div>

            <div className='info-container'>
                <h4>{title}</h4>
                <p className="price">{price}.00€</p>

                <p className="description">{description}</p>
                <div className='button-container'>
                    <StyledButton
                        onClick={() => addToCart({
                            title: cartName,
                            image: "/image/products/" + image + ".jpg",
                            price: price,
                            type: "App\\Models\\Ebook",
                            id: id,
                        })}
                    >
                        Adicionar ao carrinho
                    </StyledButton>
                </div>
            </div>
        </SessionContent>
    );

    return (
        <Container>
            <Header>
                <ImageContainer>
                    <img src='/image/products/header.jpg' />
                </ImageContainer>

                <div className='info-container'>
                    <h2>Recursos de Estimulação Cognitiva</h2>
                    <p className='description'>A UPA apresenta recursos de estimulação cognitiva tais como E-Books, Exibições de PowerPoint e Jogos que permitem aos idosos trabalhar as suas habilidades cognitivas ou ainda dar início a outras que desconheciam.</p>
                    <Citation background={theme.opacityLightAccent}>
                        <div className="background" />
                        <img src='/icon/products/citation.svg' />
                        <div className='citation'>
                            <p>“A aprendizagem ao longo da vida permite recuperar e/ou compensar a perda de estimulação ambiental ou contextual, que sucede normalmente com a entrada para a reforma, permitindo que o idoso mantenha a sua capacidade intelectual ativa”</p>
                            <h3>Martin, 2007</h3>
                        </div>
                    </Citation>
                </div>

            </Header>

            <SessionsContainer color={theme.textAccent}>

                <h2>e-books</h2>
                <h3>50 Exercícios de Estimulação Cognitiva</h3>
                <Row type="flex">

                    <Col xs={24} md={12}>
                        <Session
                            title="Volume I"
                            cartName="50 Exercícios. Vol I"
                            price={8}
                            id={2}
                            image="50_volume1"
                            description="Memória, atenção, orientação espacial, cálculo, literatura escrita, criatividade."
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Session
                            title="Volume II"
                            cartName="50 Exercícios. Vol II"
                            price={8}
                            id={3}
                            image="50_volume2"
                            description="Memória, atenção, orientação espacial e literatura escrita."
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Session
                            title="Volume III"
                            cartName="50 Exercícios. Vol III"
                            price={8}
                            id={4}
                            image="50_volume3"
                            description="Atenção e perceção visual, orientação espacial e raciocínio lógico."
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Session
                            title="Volume IV"
                            cartName="50 Exercícios. Vol IV"
                            price={8}
                            id={5}
                            image="50_volume4"
                            description="Atenção e perceção visual, orientação espacial, raciocínio lógico e motricidade fina."
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Session
                            title="Volume V"
                            cartName="50 Exercícios. Vol V"
                            price={8}
                            id={7}
                            image="50_volume5"
                            description="Atenção e perceção visual, orientação espacial, literatura escrita e motricidade fina."
                        />
                    </Col>
                </Row>

            </SessionsContainer>
            <SessionsContainer color={theme.textAccent}>

                <h2>e-books</h2>
                <h3>24 Exercícios de Estimulação Cognitiva</h3>
                <Row type="flex">

                    <Col xs={24} md={12}>
                        <Session
                            title="Volume I"
                            cartName="24 Exercícios. Vol I"
                            price={4}
                            id={6}
                            image="24_volume1"
                            description="Memória, atenção e perceção visual e motricidade fina."
                        />

                    </Col>
                </Row>

            </SessionsContainer>

            <SessionsContainer color={theme.textAccent}>

                <h2>e-books</h2>
                <h3>Exercícios Temáticos de Estimulação Cognitiva</h3>
                <Row type="flex">

                    <Col xs={24} md={12}>
                        <Session
                            title="Volume I: Outono"
                            cartName="Volume I: Outono"
                            price={4}
                            id={8}
                            image="25_outono"
                            description="25 exercícios de atenção e perceção visual, literatura escrita, cálculo e motricidade fina."
                        />

                    </Col>
                </Row>

            </SessionsContainer>

        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        verifyAddToCart: (element) => dispatch(verifyAddToCart(element)),

    };
};



export default connect(null, mapDispatchToProps)(withTheme(Products));
