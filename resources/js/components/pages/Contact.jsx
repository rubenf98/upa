import React, { useEffect } from 'react'
import styled, { withTheme } from "styled-components";
import Row from "antd/es/row"
import Form from "antd/es/form"
import Input from "antd/es/input"
import Col from "antd/es/col"
import { dimensions, maxWidth, navbarHeight } from "../../helper";
import axios from "axios";
import { BlackButton, CustomInput, CustomTextArea, underlineStyle } from '../../styles';

const Container = styled.div`
    min-height: calc(100vh - ${navbarHeight});
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: ${maxWidth};
    width: 100%;
    margin: auto;
    position: relative;
`;

const TextArea = styled(Input.TextArea)`
    margin: auto;
    textarea {
        border-radius: 6px;
    }
`;

const ContactForm = styled(Form)`
    width: 100%;
`;



const FormContainer = styled(Row)`
    width: 40%;

    .ant-col{
        width: 100%;
    }

    @media (max-width: ${dimensions.md}){
        width: 100%;
    }
`;

const Title = styled.div`
    width: 60%;

    h1 {
        font-weight: 500;
        letter-spacing: -.044em;
        font-size: 4vw;
        line-height: 98px;

        span {
            font-weight: 900;
        }
    }

    p {
        color: black;
        font-size: 18px;
        font-weight: bold;
        margin: 0px 0px 5px 0px;

        a{
            text-decoration: none;
            color: inherit;

            &:hover{
                ${underlineStyle}
            }
        }
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    position: absolute;
    justify-content: flex-end;
    bottom: 20px;
    display: flex;
    flex-wrap: wrap;

    h3 {
        font-weight: bold;
        font-size: 1.6em;
        margin: 0px;
    }

   
`;

const Logo = styled.a`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
        margin: 0px;
    }

    img{
        width: 100%;
    }
`;

const ButtonContainer = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;


const rules = {
    name: [
        {
            required: true,
            message: 'Please input your name!',
        },
    ],
    email: [
        {
            required: true,
            message: 'Please input your email!',
        },
        {
            type: "email",
        },
    ],
    message: [
        {
            required: true,
            message: 'Please input your message!',
        },
    ]
}

function Contact({ theme }) {
    const [form] = Form.useForm();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const onFinish = (values) => {
        axios.post(`${window.location.origin}/api/contact`, values);

        setTimeout(() => {
            form.resetFields();
            setSubmitted(true);
        }, 300);

    };

    return (
        <>
            <Container>
                <Title underlineColor={theme.blue}>
                    <h1><span>Vamos conversar.</span> <br />
                        Responderemos o mais brevemente possível</h1>

                    <div>
                        <p>Tel. +351 925 022 532</p>
                        <p>
                            <a href="mailto:contactos@unidospelaatividade.pt">
                                contactos@unidospelaatividade.pt
                            </a>
                        </p>
                    </div>
                </Title>
                <FormContainer type="flex" justify="space-between" align="middle">

                    <ContactForm
                        requiredMark={false}
                        name="basic"
                        onFinish={onFinish}
                        layout="vertical"
                        form={form}
                    >
                        <Row gutter={16}>
                            <Col md={24}>
                                <Form.Item
                                    name="name"
                                    rules={rules.name}
                                >
                                    <CustomInput placeholder="Nome" size="large" />
                                </Form.Item>
                            </Col>
                            <Col md={24}>
                                <Form.Item

                                    name="email"
                                    rules={rules.email}
                                >
                                    <CustomInput placeholder="Endereço de email" size="large" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item

                            name="message"
                            rules={rules.message}
                        >
                            <CustomTextArea placeholder="Escreva aqui a sua mensagem..." size="large" maxLength={180} />
                        </Form.Item>
                    </ContactForm>

                    <ButtonContainer>
                        <BlackButton shadow={theme.blue}>
                            Submeter
                        </BlackButton>
                    </ButtonContainer>
                </FormContainer>

                <InfoContainer>

                    <Logo href="https://www.facebook.com/educadorasenior" target="_blank">
                        <img src='/icon/instagram.svg' alt="instagram" />
                    </Logo>
                    <Logo href="https://www.facebook.com/educadorasenior" target="_blank">
                        <img src='/icon/facebook.svg' alt="facebook" />
                    </Logo>

                </InfoContainer>



            </Container>
        </>
    )
}

export default withTheme(Contact)
