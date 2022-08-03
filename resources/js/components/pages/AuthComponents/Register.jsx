import React from 'react'
import { StyledButton, CustomInput, CustomPassword } from '../../../styles';
import Col from "antd/es/col"
import Row from "antd/es/row"
import Form from "antd/es/form"
import Checkbox from "antd/es/checkbox"
import { dimensions, maxWidth } from "../../../helper";
import styled, { ThemeContext } from "styled-components";
import { Link } from 'react-router-dom';
import { Input } from 'antd';

const ButtonContainer = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const ContactForm = styled(Form)`
    width: 100%;

    .ant-form-item {
        margin-bottom: 10px;
    }
`;

const FormContainer = styled(Row)`
    width: 100%;

    .ant-col{
        width: 100%;
    }
`;

const ModeSwitch = styled.div`
   float: right;
   font-size: 18px;
   font-weight: 100;
   cursor: pointer;

   span {
    font-weight: bold;
   }
`;


const CustomLink = styled(Link)`
    color: white;
    &:hover {
        color: white;
    }
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
    password: [
        {
            required: true,
            message: 'Introduza a sua palavra-passe',
        },
    ],
    privacy: [
        {
            required: true,
            message: 'É necessário aceitar os termos de privacidade',
        },
    ]
}

function Register({ form, onFinish, theme, setMode }) {
    return (
        <>
            <ModeSwitch onClick={() => setMode(1)}>Já possui conta? Faça login <span>aqui</span></ModeSwitch>

            <FormContainer type="flex" justify="space-between" align="middle">

                <ContactForm
                    requiredMark={false}
                    name="basic"
                    layout="vertical"
                    form={form}
                >
                    <Row gutter={16} style={{ marginBottom: "10px" }}>
                        <Col md={24}>
                            <Form.Item
                                name="name"
                                rules={rules.name}
                            >
                                <CustomInput light placeholder="Nome" size="large" />
                            </Form.Item>
                        </Col>
                        <Col md={24}>
                            <Form.Item

                                name="email"
                                rules={rules.email}
                            >
                                <CustomInput light placeholder="Endereço de email" size="large" />
                            </Form.Item>
                        </Col>
                        <Col md={24}>
                            <Form.Item
                                name="password"
                                rules={rules.password}
                            >
                                <CustomPassword light placeholder="Palavra-passe" size="large" />
                            </Form.Item>
                        </Col>
                        <Col md={24}>
                            <Form.Item
                                name="password-check"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Confirme a sua palavra-passe',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('As palavras-passe não coincidem!'));
                                        },
                                    }),
                                ]}
                                dependencies={['password']}
                            >
                                <CustomPassword light placeholder="Confirmação da palavra-passe" size="large" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name="privacy"
                        valuePropName="checked"
                        rules={rules.privacy}
                    >
                        <Checkbox>Aceito os termos da política de privacidade e cookies</Checkbox>
                    </Form.Item>
                </ContactForm>



                <ButtonContainer>
                    <StyledButton shadow={theme.blue} onClick={() => onFinish(form.getFieldsValue())}>
                        Registar
                    </StyledButton>
                </ButtonContainer>
            </FormContainer>
        </>
    )
}

export default Register