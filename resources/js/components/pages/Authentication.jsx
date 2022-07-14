import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { login } from "../../redux/auth/actions";
import { dimensions, maxWidth } from "../../helper";
import Form from "antd/es/form"

import { connect } from "react-redux";

import Login from "./AuthComponents/Login";
import { Link } from "react-router-dom";
import Register from "./AuthComponents/Register";

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${props => props.background};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
`;

const Content = styled.div`
    width: 80%;
    max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    z-index: 5;

    @media (max-width: ${dimensions.md}){
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
`;

const WhiteBackground = styled.div`
    width: 50vw;
    height: 100%;
    background: white;
    top: 0;
    right: 0;
    position: absolute;

    @media (max-width: ${dimensions.md}){
        width: 30vw;
    }
`;

const Title = styled.h1`
    font-size: 3.6vw;
    font-weight: 900;
    width: 60%;

    @media (max-width: ${dimensions.md}){
        width: 100%;
        font-size: 32px;
        margin-bottom: 30px;
        margin-top: 70px;
    }
`;

const BackButton = styled.img`
    width: 50px;
    position: absolute;
    top: 100px;
    left: 10vw;

    @media (max-width: ${dimensions.md}){
        top: 30px;
        width: 30px;
        left: 20px;
    }
`;

const FormContainer = styled.div`
    width: 40%;

    @media (max-width: ${dimensions.md}){
        width: 100%;
        margin-bottom: 50px;
    }
`;


function Authentication({ }) {
    const themeContext = useContext(ThemeContext);
    const [mode, setMode] = useState(1)
    const [form] = Form.useForm();

    function submitForm(e) {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(this.state).map((field) => {
            formData.append(field[0], field[1]);
        });

        this.props.login(formData);
    };

    const onFinish = (values) => {
        // axios.post(`${window.location.origin}/api/contact`, values);

        // setTimeout(() => {
        //     form.resetFields();
        //     setSubmitted(true);
        // }, 300);

    };

    return (
        <Container background={themeContext.background}>
            <WhiteBackground />
            <Link to="/">
                <BackButton src="/icon/back.svg" />
            </Link>
            <Content>
                <Title>Bem vindo à comunidade Unidos Pela Atividade</Title>
                <FormContainer>
                    {mode == 1 ?
                        <Login setMode={setMode} form={form} onFinish={onFinish} theme={themeContext} />
                        :
                        <Register setMode={setMode} form={form} onFinish={onFinish} theme={themeContext} />
                    }

                </FormContainer>
            </Content>

        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
    };
};


export default connect(null, mapDispatchToProps)(Authentication)

