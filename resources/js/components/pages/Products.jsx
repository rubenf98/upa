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

const AdditionalInfo = styled.div`
    width: 70%;
    margin: auto;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    div {
        margin: 30px 0px;
    }
    h4 {
        font-size: 28px;
        line-height: 94%;

        @media (max-width: ${dimensions.md}) {
            font-size: 22px;
        }
    }
`;

const jogosAE = [
    { id: 9, name: "Jogo A", image: "jogo_ae_a", price: 2, description: "" },
    { id: 10, name: "Jogo B", image: "jogo_ae_b", price: 2, description: "" },
    { id: 11, name: "Jogo C", image: "jogo_ae_c", price: 2, description: "" },
    { id: 12, name: "Jogo D", image: "jogo_ae_d", price: 2, description: "" },
    { id: 13, name: "Jogo E", image: "jogo_ae_e", price: 2, description: "" },
]

const jogosIX = [
    { id: 14, name: "Jogo I", image: "jogo_ix_1", price: 2, description: "" },
    { id: 15, name: "Jogo II", image: "jogo_ix_2", price: 2, description: "" },
    { id: 16, name: "Jogo III", image: "jogo_ix_3", price: 2, description: "" },
    { id: 17, name: "Jogo IV", image: "jogo_ix_4", price: 2, description: "" },
    { id: 18, name: "Jogo V", image: "jogo_ix_5", price: 2, description: "" },
    { id: 19, name: "Jogo VI", image: "jogo_ix_6", price: 2, description: "" },
    { id: 20, name: "Jogo VII", image: "jogo_ix_7", price: 2, description: "" },
    { id: 21, name: "Jogo VIII", image: "jogo_ix_8", price: 2, description: "" },
    { id: 22, name: "Jogo IX", image: "jogo_ix_9", price: 2, description: "" },
    { id: 23, name: "Jogo X", image: "jogo_ix_10", price: 2, description: "" },
]

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
                    <Col xs={24} md={12}>
                        <Session
                            title="Volume VI"
                            cartName="50 Exercícios. Vol VI"
                            price={8}
                            id={34}
                            image="50_volume6"
                            description="Atenção e perceção visual, literatura, motricidade fina e orientação espacial."
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

                    <Col xs={24} md={12}>
                        <Session
                            title="Volume I: Natal"
                            cartName="Volume I: Natal"
                            price={4}
                            id={24}
                            image="25_natal"
                            description="25 exercícios de atenção, perceção visual e motricidade fina."
                        />

                    </Col>

                    <Col xs={24} md={12}>
                        <Session
                            title="Volume I: Inverno"
                            cartName="Volume I: Inverno"
                            price={4}
                            id={27}
                            image="25_inverno"
                            description="25 exercícios de atenção, perceção visual, orientação espacial, literatura escrita e motricidade fina."
                        />

                    </Col>

                    <Col xs={24} md={12}>
                        <Session
                            title="Dia de Reis"
                            cartName="Dia de Reis"
                            price={4}
                            id={29}
                            image="25_reis"
                            description="25 exercícios de atenção, perceção visual, orientação espacial, literatura escrita e motricidade fina."
                        />

                    </Col>

                    <Col xs={24} md={12}>
                        <Session
                            title="Carnaval"
                            cartName="Carnaval"
                            price={7}
                            id={30}
                            image="40_carnaval"
                            description="40 exercícios de atenção, perceção visual, orientação espacial, cálculo,  literatura escrita e motricidade fina."
                        />

                    </Col>

                    <Col xs={24} md={12}>
                        <Session
                            title="Dia dos afetos / São Valentim"
                            cartName="Dia dos afetos / São Valentim"
                            price={6}
                            id={31}
                            image="30_saovalentim"
                            description="30 exercícios de atenção, memória, literatura escrita e orientação espacial."
                        />

                    </Col>

                    <Col xs={24} md={12}>
                        <Session
                            title="Dia do Pai"
                            cartName="Dia do Pai"
                            price={4}
                            id={32}
                            image="25_pai"
                            description="25 exercícios de memória, atenção, literatura escrita e orientação espacial"
                        />

                    </Col>

                    <Col xs={24} md={12}>
                        <Session
                            title="Dia Internacional da Mulher"
                            cartName="Dia Internacional da Mulher"
                            price={4}
                            id={33}
                            image="25_mulher"
                            description="25 exercícios de memória, atenção, literatura escrita e orientação espacial"
                        />

                    </Col>
                </Row>

            </SessionsContainer>

            <SessionsContainer color={theme.textAccent}>

                <h2>jogos</h2>
                <h3>Jogos de A a E</h3>
                <AdditionalInfo>
                    <p>O objetivo é colocar as peças na posição correta. Os quebra-cabeças são um ótimo recurso para a estimulação da capacidade cognitiva e psicomotora, capacidade de concentração, noção espacial e perceção visual.</p>
                    <Row>
                        <Col xs={24} md={8}>
                            <h4>Áreas de estimulação cognitiva e motora</h4>
                        </Col>
                        <Col xs={12} md={8}>
                            <ul>
                                <li>Atenção e raciocínio lógico</li>
                                <li>Coordenação motora</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={8}>
                            <ul>
                                <li>Motricidade Fina</li>
                                <li>Habilidades do pensamento, como: observar, comparar, analisar e sintetizar</li>
                            </ul>
                        </Col>
                    </Row>
                </AdditionalInfo>




                <Row type="flex">

                    {jogosAE.map((jogo) => (
                        <Col key={jogo.id} xs={24} md={12}>
                            <Session
                                title={jogo.name}
                                cartName={jogo.name}
                                price={jogo.price}
                                id={jogo.id}
                                image={jogo.image}
                                description={jogo.description}
                            />

                        </Col>
                    ))}
                </Row>

            </SessionsContainer>

            <SessionsContainer color={theme.textAccent}>

                <h2>jogos</h2>
                <h3>Jogos de I a X</h3>

                <AdditionalInfo>
                    <p>O objetivo é colocar as peças na posição correta de acordo com os diferentes símbolos e orientação. Os quebra-cabeças são um ótimo recurso para a estimulação da capacidade cognitiva e psicomotora, capacidade de concentração, noção espacial e perceção visual.</p>
                    <Row>
                        <Col xs={24} md={8}>
                            <h4>Áreas de estimulação cognitiva e motora</h4>
                        </Col>
                        <Col xs={12} md={8}>
                            <ul>
                                <li>Atenção e raciocínio lógico</li>
                                <li>Coordenação motora</li>
                                <li>Orientação Espacial</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={8}>
                            <ul>
                                <li>Motricidade Fina</li>
                                <li>Habilidades do pensamento, como: observar, comparar, analisar e sintetizar</li>
                            </ul>
                        </Col>
                    </Row>
                </AdditionalInfo>
                <Row type="flex">

                    {jogosIX.map((jogo) => (
                        <Col key={jogo.id} xs={24} md={12}>
                            <Session
                                title={jogo.name}
                                cartName={jogo.name}
                                price={jogo.price}
                                id={jogo.id}
                                image={jogo.image}
                                description={jogo.description}
                            />

                        </Col>
                    ))}
                </Row>

            </SessionsContainer>

            <SessionsContainer color={theme.textAccent}>

                <h2>exibições</h2>
                <h3>Exibições de powerpoint</h3>
                <AdditionalInfo>
                    <Row>
                        <Col xs={24} md={8}>
                            <h4>Atividades que compõem as exibições de PowerPoint</h4>
                        </Col>
                        <Col xs={12} md={8}>
                            <ul>
                                <li>Descubra a parte que falta</li>
                                <li>Descubra o elemento que não tem par</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={8}>
                            <ul>
                                <li>Descubra o elemento que tem par</li>
                                <li>Descubra a imagem que falta em cada fila</li>
                            </ul>
                        </Col>
                    </Row>
                </AdditionalInfo>
                <Row type="flex">

                    <Col xs={24} md={12}>
                        <Session
                            title="Volume I: Natal"
                            cartName="Volume I: Natal"
                            price={2}
                            id={25}
                            image="pp_natal_1"
                            description=""
                        />

                    </Col>

                    <Col xs={24} md={12}>
                        <Session
                            title="Volume II: Natal"
                            cartName="Volume II: Natal"
                            price={2}
                            id={26}
                            image="pp_natal_1"
                            description=""
                        />

                    </Col>
                </Row>

            </SessionsContainer>

            <SessionsContainer color={theme.textAccent}>

                <h2>e-books</h2>
                <h3>Jogos Temáticos de Estimulação Cognitiva</h3>
                <Row type="flex">
                    <Col xs={24} md={12}>
                        <Session
                            title="Volume I: Inverno"
                            cartName="Volume I: Inverno"
                            price={2}
                            id={28}
                            image="jogo_inverno"
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
