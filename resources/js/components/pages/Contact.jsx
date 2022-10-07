import React, { useEffect } from 'react'
import styled, { withTheme } from "styled-components";
import Row from "antd/es/row"
import Form from "antd/es/form"
import Input from "antd/es/input"
import Col from "antd/es/col"
import { dimensions, maxWidth, navbarHeight } from "../../helper";
import axios from "axios";
import { StyledButton, CustomInput, CustomTextArea, underlineStyle } from '../../styles';

const Container = styled.div`
    min-height: calc(100vh - ${navbarHeight});
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: ${maxWidth};
    width: 100%;
    margin: auto;
    position: relative;

    @media (max-width: ${dimensions.maxWidth}){
        padding: 0px 20px;
        box-sizing: border-box;
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
        margin: 50px 0px;
    }
`;

const Title = styled.div`
    width: 60%;

    

    @media (max-width: ${dimensions.md}){
        width: 100%;
        margin-top: 50px;
    }

    h1 {
        font-weight: 500;
        letter-spacing: -.044em;
        font-size: 50px;
        line-height: 58px;

        span {
            font-weight: 900;
            color: ${props => props.underlineColor};
        }

        @media (max-width: ${dimensions.lg}){
            font-size: 40px;
            line-height: 48px;
        }

        @media (max-width: ${dimensions.md}){
            font-size: 28px;
            line-height: 38px;
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

        @media (max-width: ${dimensions.md}){
            font-size: 16px;
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

    @media (max-width: ${dimensions.maxWidth}){
        right: 20px;
    }

    @media (max-width: ${dimensions.md}){
        display: none;
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
            message: 'Por favor introduza o seu nome!',
        },
    ],
    email: [
        {
            required: true,
            message: 'Por favor introduza o seu email!',
        },
        {
            type: "email",
            message: 'O email não é válido',
        },
    ],
    message: [
        {
            required: true,
            message: 'Por favor introduza a sua mensagem!',
        },
    ]
}

function Contact({ theme }) {
    const [form] = Form.useForm();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const onFinish = () => {
        form.validateFields().then((values) => {
            axios.post(`${window.location.origin}/api/contact`, values);

            setTimeout(() => {
                form.resetFields();
            }, 300);
        }).catch(error => {
            console.log(error);
        })
    }



    return (
        <>
            <Container>
                <Title underlineColor={theme.textAccent}>
                    <h1><span>Coloque as suas questões.</span> <br />
                        Responderemos o mais brevemente possível</h1>

                    <div>
                        <p>Tel. +351 925 022 532</p>
                        <p>
                            <a href="mailto:unidospelaatividade@gmail.com">
                                unidospelaatividade@gmail.com
                            </a>
                        </p>
                    </div>
                </Title>
                <FormContainer type="flex" justify="space-between" align="middle">

                    <ContactForm
                        requiredMark={false}
                        name="basic"

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
                        <StyledButton onClick={onFinish} background={theme.textAccent} hover={theme.darkAccent} color="white">
                            Submeter
                        </StyledButton>
                    </ButtonContainer>
                </FormContainer>

                <InfoContainer>

                    <Logo href="https://www.facebook.com/educadorasenior" target="_blank">
                        <img src='/icon/facebook.svg' alt="facebook" />
                    </Logo>

                </InfoContainer>



            </Container>
        </>
    )
}

export default withTheme(Contact)
