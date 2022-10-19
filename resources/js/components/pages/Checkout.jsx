import React, { useEffect, useState } from 'react'
import { dimensions, maxWidth } from '../../helper';
import styled, { withTheme } from "styled-components";
import { connect } from "react-redux";
import Col from "antd/es/col"
import Row from "antd/es/row"
import { useNavigate } from 'react-router-dom'
import { createTransaction } from "../../redux/transaction/actions";
import { setCart } from "../../redux/cart/actions";
import { StyledButton } from '../../styles';


const Container = styled.div`
    width: 100%;

    h2 {
        font-size: 24px;
        margin-bottom: 30px;
    }
`;

const Content = styled.div`
    width: 70%;
    max-width: ${maxWidth};
    margin: auto;
    padding: 100px 20px;
    box-sizing: border-box;

    @media (max-width: ${maxWidth}) {
        width: 100%;
    }
`;

const Item = styled(Row)`
    display: flex;
    align-items: center;
    margin: 10px 0px;

    img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 70px;
        margin-right: 10px;

        @media (max-width: ${dimensions.md}) {
            width: 60px;
            height: 60px;
            border-radius: 60px;
        }    
    }
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #707070;

    

    
`;

const TitleContainer = styled.div`
    margin-bottom: 50px;

    h2 {
        font-size: 40px;
    }

    p {
        font-size: 20px;
    }

    @media (max-width: ${dimensions.md}) {
        h2 {
            font-size: 30px;
        }

        p {
            font-size: 16px;
        }
    }
`;


const PaymentMethod = styled.div`
    margin: 10px 0px;

    p {
        color: #707070;
        font-weight: bold;
        margin: 0px;
    }
`;


function Checkout({ items, total, theme, isAuthenticated, createTransaction, setCart }) {
    var navigate = useNavigate();
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [initialCart, setInitialCart] = useState([])
    const [initialTotal, setInitialTotal] = useState(0)

    function createEntry() {
        if (items.length && !hasSubmitted) {
            createTransaction({
                items: items
            }).then(() => {
                setHasSubmitted(true);
                setCart([]);
                navigate("/painel");
            });

        }
    }

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login?to=checkout");
        }


    }, [])

    useEffect(() => {
        if (total) {
            setInitialCart(items);
            setInitialTotal(total);
        }
    }, [total])


    return (
        <Container>
            <Content>
                <TitleContainer>
                    <h2>Está quase a terminar a sua compra</h2>
                    <p>Os seus artigos e os métodos de pagamento disponíveis estão na listas que seguem abaixo. Faça o pagamento e submeta o comprovativo de pagamento ao fazer login na sua conta.</p>
                </TitleContainer>

                <Row type="flex" gutter={64}>
                    <Col xs={24} md={16}>
                        <h2>Artigos no carrinho</h2>
                        {initialCart.map((item) => (
                            <Item>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <h3>+{item.price}.00€</h3>
                                </div>
                            </Item>
                        ))}
                        <PriceContainer>
                            <h2>Total</h2>
                            <h2>{initialTotal}.00€</h2>
                        </PriceContainer>
                    </Col>
                    <Col xs={24} md={8}>

                        <h2>Métodos de pagamento</h2>
                        <PaymentMethod>
                            <p>Transferência bancária (IBAN)</p>
                            PT50 0035 0711 0000 9440 5301 9
                        </PaymentMethod>
                        <PaymentMethod>
                            <p>MBWAY</p>
                            +351 925 022 532
                        </PaymentMethod>
                        <PaymentMethod>
                            <p>Paypal</p>
                            sementilha@gmail.com
                        </PaymentMethod>
                    </Col>
                </Row>
                <Row type="flex">
                    <StyledButton onClick={createEntry}>
                        Continuar
                    </StyledButton>
                </Row>
            </Content>

        </Container >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeCart: () => dispatch(closeCart()),
        removeCartItem: (index) => dispatch(removeCartItem(index)),
        createTransaction: (index) => dispatch(createTransaction(index)),
        setCart: (cart) => dispatch(setCart(cart)),
    };
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        visible: state.cart.visible,
        items: state.cart.items,
        total: state.cart.total
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Checkout));