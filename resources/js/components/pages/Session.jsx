import { Col } from 'antd';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled, { withTheme } from "styled-components";
import { dimensions, fonts, maxWidth, navbarHeight } from '../../helper';
import { StyledButton } from '../../styles';
import Video from './HomepageComponents/Video';

const Container = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
`;

const HeaderContainer = styled.section`
    min-height: calc(100vh - ${navbarHeight});
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;



const VideoContainer = styled(Col)`
    width: 100%;
    display: block;
    position: relative;

    @media (max-width: ${dimensions.md}) {
        order: 2;
    } 
`;


const Header = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
    .column {
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
        position: relative;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
        }   
    }
    

    
`;

const InfoContainer = styled.div`
    margin: 50px 0px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        order: 1;
    } 

    h2 {
        font-size: 60px;
        font-family: ${fonts.title};

        @media (max-width: ${dimensions.md}) {
            font-size: 36px;
            line-height: 38px;
            text-align: center;
        }

    }

    p {
        font-size: 18px;
        margin: 15px 0px;

        @media (max-width: ${dimensions.md}) {
            font-size: 16px;
            text-align: center;
            width: 100%;
            margin-bottom: 0px;
        }
    }
`;

const CartButton = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 80px;
    text-align: center;

    @media (max-width: ${dimensions.md}) {
        justify-content: center;
        margin-top: 30px;
    } 

    @media (max-width: ${dimensions.sm}) {
        width: 100%;
    }
`;

const OtherTitle = styled.h2`
    width: 100%;
    text-align: left;
    margin: 50px 0px 50px 0px;
    font-family: ${fonts.title};
    font-size: 48px;
    padding: 0px 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        font-size: 32px;
    }
`;


const OtherContainer = styled.section`
    width: 100%;
    text-align: left;
    margin: 0px 0px 200px 0px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0px 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        margin: 0px 0px 100px 0px;
    }
`;

const Other = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        
        margin-bottom: 30px;
    }

    img {
        width: 30%;
        height: 100%;
        object-fit: cover;
    }

    .info {
        width: 70%;
        padding: 0px 50px 0px 20px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            padding: 0px 0px 0px 10px;
        }

        p {
            font-size: 16px;
        }

        .price {
            opacity: .7;
            margin: 0px;
        }

        .description {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2; 
            -webkit-box-orient: vertical;

            @media (max-width: ${dimensions.md}) {
               display: none;
            }
        }

        h3 {
            font-size: 20px;
            
            @media (max-width: ${dimensions.md}) {
               margin: 0px;
            }
        }

        .cart-container {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            margin-top: 20px;
            text-align: center;
        }
    }
`;

const content = {
    jogosMusicaisNaMesa: {
        title: "Jogos Musicais na Mesa",
        paragraphs: [
            "Os jogos musicais na mesa podem ser realizados com grupos de qualquer idade.",
            "Mais do que proporcionar divertimento, o jogo musical ajuda no treino dos domínios da escuta, da concentração e da expressão. Pode ser, incontestavelmente, uma estratégia eficaz para a manutenção cognitiva, motora, social e emocional do idoso. Ele tem o poder de cativar quem nele participa!",
            "Clique no ícone DEMO para assistir a um vídeo de demonstração das atividades."
        ],
        thumbnail: "mesa",
        demo: "02_demo",
        price: "32.00€"
    },
    dancaCoreograficaSentada: {
        title: "Dança Coreográfica Sentada",
        paragraphs: [
            "A Dança Coreográfica Sentada é uma modalidade de baixo impacto, que tem como propósito a realização de gestos e de movimentos simples e fáceis de executar.",
            "O bater de mãos, de pés; o dar estalos; o levar as mãos ao pescoço, à cabeça, aos ombros; o elevar as pernas, os braços, os joelhos, etc., são movimentos que fazem parte desta modalidade.",
            "Além do divertimento que esta atividade proporciona, também oferece benefícios a nível físico, cognitivo, emocional e social.",
            "Clique no ícone DEMO para assistir a um vídeo de demonstração das atividades."
        ],
        thumbnail: "sentado",
        demo: "01_demo",
        price: "32.00€"
    },
    jogosMusicaisComBalao: {
        title: "Jogos Musicais com Balão",
        paragraphs: [
            "Os jogos musicais na mesa podem ser realizados com grupos de qualquer idade.",
            "Mais do que proporcionar divertimento, o jogo musical ajuda no treino dos domínios da escuta, da concentração e da expressão. Pode ser, incontestavelmente, uma estratégia eficaz para a manutenção cognitiva, motora, social e emocional do idoso. Ele tem o poder de cativar quem nele participa!",
            "Clique no ícone DEMO para assistir a um vídeo de demonstração das atividades."
        ],
        thumbnail: "balao",
        demo: "Jogos Musicais na Mesa",
        price: "32.00€"
    }
}

function Session({ theme }) {
    const [others, setOthers] = useState([])
    const { sessao } = useParams();

    useEffect(() => {
        var aOthers = [];
        Object.keys(content).map((key) => {
            if (key != sessao) {
                aOthers.push(key);

            }
        })

        setOthers(aOthers);
    }, [])

    return (
        <Container>
            <HeaderContainer>
                <Header>
                    <VideoContainer className='column'>
                        <Video video={"/video/" + content[sessao].demo + ".mp4"} thumbnail={'/image/sessions/' + content[sessao].thumbnail + '.jpg'} />
                    </VideoContainer>
                    <InfoContainer className='column'>
                        <h2>{content[sessao].title}</h2>
                        {content[sessao].paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <CartButton>
                            <StyledButton>
                                Adicionar ao Carrinho
                            </StyledButton>
                        </CartButton>
                    </InfoContainer>
                </Header>
            </HeaderContainer>
            <OtherTitle>Utilizadores também compraram</OtherTitle>
            <OtherContainer>
                {others.map((other) => (
                    <Other key={other}>
                        <img src={'/image/sessions/' + content[sessao].thumbnail + '.jpg'} />
                        <div className='info'>
                            <h3>{content[other].title}</h3>
                            <p className='price'>{content[other].price}</p>
                            <p className='description'>{content[other].paragraphs[0]}</p>

                            <div className='cart-container'>
                                <StyledButton fontSize="16px">
                                    Adicionar ao Carrinho
                                </StyledButton>
                            </div>
                        </div>

                    </Other>
                ))}
            </OtherContainer>
        </Container>
    )
}

export default withTheme(Session);
