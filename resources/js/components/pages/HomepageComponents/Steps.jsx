import { Tooltip } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import styled, { withTheme } from "styled-components";
import { dimensions, maxWidth } from '../../../helper';
import { textStyle, titleStyle } from '../../../styles';

const Container = styled.section`
    margin: 200px auto;
    max-width: ${maxWidth};

    @media (max-width: ${dimensions.lg}) {
        padding: 0px 20px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.md}) {
        margin: 50px auto;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    margin: auto;
    padding: 50px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    gap: 50px;

     

    @media (max-width: ${maxWidth}) {
        flex-wrap: wrap;
        gap: 0px;
        justify-content: space-between;
    }    

    @media (max-width: ${dimensions.md}) {
        padding: 20px 0px;
        justify-content: space-around;
        
    }  

    .subsection {
        width: 33%;
        padding: 50px;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.lightAccent};

        

        .image {
            max-width: 80px;
            height: auto;
            margin-bottom: 20px;
        }

        .icon {
            cursor: pointer;
            width: 20px;
            height: 20px;
            float: right;
        }

        h3 {
            font-weight: bold;
            font-size: 26px;
            white-space: nowrap;
        }

        p {
            opacity: .7;

            span {
                font-weight: bold;
            }

            a {
                font-weight: bold;
                color: #000;
                text-decoration: underline;
            }
        }

        @media (max-width: ${maxWidth}) {
            width: calc(50% - 15px);
            margin-bottom: 30px;

            h3 {
                font-size: 24px;
            }
        } 
        
        @media (max-width: ${dimensions.md}) {
            width: 80%;

            h3 {
                font-size: 22px;
                white-space: normal;
            }
        }

        @media (max-width: ${dimensions.sm}) {
            width: 100%;
        }    
    }
`;

const Title = styled.div`
    width: 40%;
    min-width: 600px;
    margin: auto;
    margin-bottom: 50px;
    text-align: center;

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
        min-width: 0px;
    }

    h2 {
        ${titleStyle}
        margin: 0px;
    }

    p {
        opacity: .7;
        ${textStyle}
        margin: 0px 0px 50px 0px;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;

        h2 {
            font-size: 40px;
            text-align: 16px;
        }

        p {
            font-size: 16px;
            text-align: 16px;
        }
    }

`;

function Steps() {
    return (
        <Container>
            <Title>
                <h2>Como comprar</h2>
                <p>
                    Fazer uma compra na Unidos Pela Atividade Online é muito simples, basta seguir os seguintes passos
                </p>
            </Title>

            <ContentContainer type='flex' align='middle' justify='space-around'>
                <div className='subsection'>
                    <img className='image' src="/icon/homepage/guide_register.svg" alt="guide_register" />
                    <h3>Registo na plataforma</h3>
                    <p>Realize o registo na página <Link to="/login">aqui</Link> e confirme a sua conta através do botão no email de confirmação enviado. Agora está apto a fazer as suas compras, colocar-nos as suas dúvidas e muito mais.</p>

                    <Tooltip title="Caso não receba na sua caixa de e-mail a confirmação de registo, verifique, por favor, no “SPAM”, uma vez que alguns filtros de e-mail classificam essas mensagens como publicidade não solicitada.">
                        <img className='icon' src="/icon/tooltip.svg" />
                    </Tooltip>
                </div>

                <div className='subsection'>
                    <img className='image' src="/icon/homepage/guide_buy.svg" alt="guide_buy" />
                    <h3>Carrinho de compras</h3>
                    <p>Adicione o produto ao carrinho de compras e clique em <span>FINALIZAR</span>. Irá ser reencaminhado para o resumo de compras onde poderá verificar os dados de pagamento e clicar no botão <span>CONTINUAR</span>.</p>
                </div>

                <div className='subsection'>
                    <img className='image' src="/icon/homepage/guide_proof.svg" alt="guide_proof" />
                    <h3>Comprovativo pagamento</h3>
                    <p>Para concluir a sua compra realize o pagamento e submeta o comprovativo de pagamento no menu <span>“As minhas compras”</span>, no fim da página, na secção <span>“Histórico de transações”</span>.</p>
                </div>
            </ContentContainer>
        </Container>
    )
}

export default Steps