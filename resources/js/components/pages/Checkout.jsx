import React, { useEffect } from 'react'
import { maxWidth } from '../../helper';
import styled, { withTheme } from "styled-components";
import { connect } from "react-redux";
import Col from "antd/es/col"
import Row from "antd/es/row"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    width: 100%;

    h2 {
        font-size: 28px;
        margin-bottom: 30px;
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: auto;
    padding: 100px 20px;
    box-sizing: border-box;
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
    }
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #707070;

    h2 {
        font-size: 22px;
    }

    &:last-child() {
        font-weight: bold;
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


function Checkout({ items, total, theme, isAuthenticated }) {
    var navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("login?to=checkout");
        }
    }, [])


    return (
        <Container>
            <Content>
                <Row type="flex" gutter={32}>
                    <Col span={16}>
                        <h2>Artigos no carrinho</h2>
                        {items.map((item) => (
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
                            <h2>{total}.00€</h2>
                        </PriceContainer>
                    </Col>
                    <Col span={8}>
                        <h2>Métodos de pagamento</h2>
                        <p>Está quase a terminar a sua compra. Escolha o método de pagamento que prefere, visite a sua <Link to="/painel">conta</Link> e submeta o comprovativo de pagamento.</p>

                        <PaymentMethod>
                            <p>Transferência bancária (IBAN)</p>
                            PT50 0193 0000 1050 7241056 17
                        </PaymentMethod>
                        <PaymentMethod>
                            <p>MBWAY</p>
                            +351 964 180 092
                        </PaymentMethod>
                    </Col>
                </Row>
            </Content>

        </Container >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeCart: () => dispatch(closeCart()),
        removeCartItem: (index) => dispatch(removeCartItem(index)),
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