import Row from "antd/es/row"
import Col from "antd/es/col"
import React, { useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { dimensions, fonts, maxWidth } from "../../../helper";
import { fetchSelf } from "../../../redux/auth/actions";
import { connect } from "react-redux";

const Container = styled.div`
    width: 100%;
    margin: auto;
    max-width: ${maxWidth};

    h1 {
        text-align:center;
        font-size: 2em;
        text-align: center;
        padding: 50px 0;
    }
`;

const CardContent = styled.div`
    background: white;
    width: 100%;
    padding: 40px 30px;
    box-sizing: border-box;
    text-align: center;
    min-width: 200px;
    
    border-radius: 6px;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
    transition: .3s ease-in-out;

    @media (max-width: ${dimensions.sm}){
        margin: 10px 0;
    }

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
    }

    .no-data {
        width: 80%;
        margin: 20px auto;
        display: block;
        max-width: 120px;
    }

    p {
        margin: 15px auto;
        font-size:14px;

        span {
            opacity: .5;
        }
        
    }
`;

const Content = styled(Row)`
    margin: 50px auto;
    width: 100%;
`;

const Here = styled(Link)`
    font-weight: bold;
    color: black;
    opacity: 1;

    &:hover {
        color: black;
    }
`;

const CardItem = styled(Col)`
    padding: 5px 10px;
    box-sizing: border-box;
    text-align: left;
    
    img {
        width: 100%;
        margin: 0px;
    }

    h3 {
        font-family: ${fonts.text};
        font-size: 14px;
        margin-top: 10px;
        line-height: 17px;
    }
`;



function Painel({ fetchSelf, currentUser }) {

    useEffect(() => {
        fetchSelf()
    }, [])


    const CardContainer = ({ img, noDataText, seeMoreText, data, title, to }) => {


        return (
            <CardContent>
                <h2>{title}</h2>
                <div>
                    {data.length ?
                        <div>
                            <Row type="flex" justify="space-around">
                                {data.map((element, index) => (
                                    <>{
                                        index <= 2 && <CardItem span={8} key={index}>
                                            <img src={element.thumbnail} alt={element.title} />
                                            <h3>{element.title} </h3>
                                            <p>{element.volume} </p>
                                        </CardItem>}
                                    </>
                                )

                                )}
                            </Row>
                            <p><span>{seeMoreText}</span> <Here to={to}>aqui</Here></p>

                        </div>
                        :
                        <>
                            <img className="no-data" src={img} alt="sem dados" />
                            <p><span>{noDataText}</span> <Here to={to}>aqui</Here></p>
                        </>
                    }

                </div>
            </CardContent>
        )

    };

    return (
        <Container>
            <h1> Bem vindo de volta ao painel de controlo</h1>
            <Content type="flex" justify="space-around">
                <Col md={11} xs={24}>
                    <CardContainer
                        title="Oferta formativa"
                        img="/image/dashboard/no_sessions.svg"
                        to="/painel/sessoes"
                        noDataText="Ainda não adquiriu nenhuma oferta formativa, verifique "
                        seeMoreText="Poderá ver as restantes ofertas formativas "
                        data={currentUser?.courses}
                    />
                </Col>
                <Col md={11} xs={24}>
                    <CardContainer
                        title="Produtos"
                        to="/painel/produtos"
                        img="/image/dashboard/no_products.svg"
                        noDataText="Ainda não adquiriu nenhum produto, verifique "
                        seeMoreText="Poderá ver os restantes produtos "
                        data={currentUser?.ebooks}
                    />
                </Col>
            </Content>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSelf: () => dispatch(fetchSelf()),

    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        currentUser: state.auth.currentUser,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Painel));