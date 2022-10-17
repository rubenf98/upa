import React, { useContext, useState, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import {
    login, register, setAuthorizationToken, forgot, recover
} from "../../redux/auth/actions";
import { dimensions, maxWidth } from "../../helper";
import Form from "antd/es/form"
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Login from "./AuthComponents/Login";
import { Link } from "react-router-dom";
import Register from "./AuthComponents/Register";
import { message } from "antd";
import Forgot from "./AuthComponents/Forgot";
import Recover from "./AuthComponents/Recover";

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

const BackButton = styled(Link)`
    z-index: 6;
    position: absolute;
    top: 100px;
    left: 10vw;

    @media (max-width: ${dimensions.md}){
        top: 30px;
        left: 20px;
    }

    img {
        width: 50px;
        
        @media (max-width: ${dimensions.md}){
            width: 30px;
        }
    }
    
`;

const FormContainer = styled.div`
    width: 40%;
    padding-left: 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}){
        width: 100%;
        padding-left: 0px;
        margin-bottom: 50px;
    }
`;


function Authentication({ register, login, forgot, recover, loading }) {
    const themeContext = useContext(ThemeContext);
    const [mode, setMode] = useState(2)
    const [form] = Form.useForm();
    const [to, setTo] = useState("/painel")
    const [token, setToken] = useState(undefined)
    const [searchParams, setSearchParams] = useSearchParams();
    var navigate = useNavigate();

    useEffect(() => {
        var destination = searchParams.get("to")
        var aEmail = searchParams.get("email")
        var aMode = searchParams.get("mode")
        var aToken = searchParams.get("token")
        if (destination) {
            setTo("/" + destination);
        }

        if (aEmail) {
            form.setFieldsValue({ email: aEmail });
        }

        if (aToken) {
            setToken(aToken);
            setMode(1);
        }

        if (aMode) {
            setToken(aToken);
            setMode(aMode);
        }
    }, [])

    const handleForgot = (values) => {

        form.validateFields().then(() => {
            forgot(values).then((response) => {
                if (response.action.payload.status == 200) {
                    message.success('Foi enviado um email de recuperação, por favor verifique o seu email.');
                    form.resetFields();
                }
            }).catch(error => {
                let messages = [];

                Object.values(error.response.data.errors).map(function (message) {
                    messages.push(message)
                })
                message.error(messages.map((message) => (
                    <span>{message}</span>
                )));
                console.log(err.response.data);
            });
        })
    };

    const handleRecover = (values) => {
        form.validateFields().then(() => {
            recover({ ...values, token: token }).then((response) => {
                if (response.action.payload.status == 200) {
                    message.success('Password alterada com sucesso');
                    form.resetFields();
                    setMode(1);
                }
            }).catch(error => {
                message.error(error.response.data.error);
            });
        })

    };

    const handleLogin = (values) => {

        login({ ...values, token: token }).then((response) => {
            if (response.action.payload.status == 200) {
                const token = response.value.data.access_token;
                localStorage.setItem("token", token);
                setAuthorizationToken(token);
                navigate(to);
            }
        }).catch(error => {
            message.error(error.response.data.error);
        });
    };

    const handleRegistration = (values) => {
        form.validateFields().then(() => {
            register(values).then((response) => {
                if (response.action.payload.status == 201) {
                    message.success('Obrigado por se registar, verifique o seu email para completar o processo.');
                    form.resetFields();
                    setMode(1);
                }
            }).catch(error => {
                let messages = [];

                Object.values(error.response.data.errors).map(function (message) {
                    messages.push(message[0])
                })
                message.error(messages.map((message) => (
                    <span>{message}</span>
                )));
                console.log(err.response.data);
            });
        })

    };

    return (
        <Container background={themeContext.lightAccent}>
            <WhiteBackground />
            <BackButton to="/">
                <img src="/icon/back.svg" />
            </BackButton>
            <Content>
                <Title>Bem vindo à comunidade Unidos Pela Atividade</Title>
                <FormContainer>
                    {mode == 1 ?
                        <Login setMode={setMode} form={form} onFinish={handleLogin} theme={themeContext} loading={loading} /> :
                        mode == 2 ?
                            <Register setMode={setMode} form={form} onFinish={handleRegistration} theme={themeContext} loading={loading} />
                            : mode == 3 ?
                                <Forgot setMode={setMode} form={form} onFinish={handleForgot} theme={themeContext} loading={loading} />
                                :
                                <Recover setMode={setMode} form={form} onFinish={handleRecover} theme={themeContext} loading={loading} />
                    }
                </FormContainer>
            </Content>

        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
        register: (data) => dispatch(register(data)),
        forgot: (data) => dispatch(forgot(data)),
        recover: (data) => dispatch(recover(data)),
    };
};

function mapStateToProps(state) {
    return {
        loading: state.auth.loading,
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Authentication)

