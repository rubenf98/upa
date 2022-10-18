import { Button, Col, Drawer, Row } from 'antd';
import React, { useState } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { closeCart, removeCartItem } from "../../redux/cart/actions";
import { StyledButton } from '../../styles';
import { Link } from 'react-router-dom';
import ConditionalLink from '../common/ConditionalLink';
import { dimensions } from '../../helper';

const Item = styled(Row)`
    display: flex;
    margin: 20px 0px;
`;

const Details = styled.div`
    padding: 20px;
    box-sizing: border-box;
    flex: 1;

    h4 {
        margin: 0px;
    }

    h3 {
        margin: 0px;
    }
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-top: 20px;
`;

const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 80px;
    
`;

const ItemContainer = styled.div`
    flex: 1;
    overflow: scroll;
`;

const Container = styled(Drawer)`

    .ant-drawer-content-wrapper {
        width: 500px !important;

        @media (max-width: ${dimensions.md}) {
            width: 90% !important;
        }
    }
    
    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        align-items: space-between;
        max-height: 100vh;
    }
    
`;

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    border-top: 1px solid #707070;

    h2 {
        font-size: 28px;
        font-weight: bold;
    }
`;

const EmptyCart = styled.div`
    padding: 20px;
    box-sizing: border-box;

    img {
        width: 60%;
        margin: auto;
        display: block;
        margin-bottom: 30px;
    }
    

    h3, p {
        margin: auto;
        text-align: center;
    }

    p {
        color: #777;
    }

    h3 {
        font-weight: bold;
    }
`;
function Cart({ visible, closeCart, removeCartItem, items, total, isAuthenticated }) {

    const onClose = () => {
        closeCart();
    };

    return (
        <Container title="Carrinho" placement="right" onClose={onClose} visible={visible}>
            <ItemContainer>
                {items.length ? items.map((item, index) => (
                    <Item key={index}>
                        <div>
                            <ProductImage src={item.image} alt="" />
                        </div>
                        <Details>
                            <h4>{item.title}</h4>
                            <h3>+{item.price}.00€</h3>
                        </Details>
                        <div>
                            <Icon onClick={() => removeCartItem(index)} src="/icon/minus.svg" alt="remove" />
                        </div>
                    </Item>
                )) :
                    <EmptyCart>
                        <img src="/icon/empty_cart.svg" />
                        <h3>O seu carrinho está vazio!</h3>
                        <p>
                            Ainda não adicionou nada ao sue carrinho. Explore os nossos produtos e oferta formativa para encontrar o que melhor se adequa as suas necessidades.
                        </p>
                    </EmptyCart>
                }
            </ItemContainer>

            <PriceContainer>
                <h2>{total}.00€</h2>
                <div onClick={items.length && onClose}>
                    <ConditionalLink to={!isAuthenticated ? "/login?to=checkout" : "/checkout"} condition={items.length}>
                        <StyledButton >
                            Finalizar
                        </StyledButton>
                    </ConditionalLink>
                </div>
            </PriceContainer>

        </Container>

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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);