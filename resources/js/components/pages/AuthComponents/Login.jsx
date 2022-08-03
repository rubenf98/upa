import React from 'react'
import { StyledButton, CustomInput, CustomPassword } from '../../../styles';
import Col from "antd/es/col"
import Row from "antd/es/row"
import Form from "antd/es/form"
import Checkbox from "antd/es/checkbox"
import { dimensions, maxWidth } from "../../../helper";
import styled, { ThemeContext } from "styled-components";
import { Link } from 'react-router-dom';

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
    message: [
        {
            required: true,
            message: 'Please input your message!',
        },
    ],
    privacy: [
        {
            required: true,
            message: 'Please input your message!',
        },
    ]
}

function Login({ form, onFinish, theme, setMode }) {
    return (
        <>
            <ModeSwitch onClick={() => setMode(2)}>Ainda não possui conta? Faça registo <span>aqui</span></ModeSwitch>

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

                                name="email"
                                rules={rules.email}
                            >
                                <CustomInput light placeholder="Endereço de email" size="large" />
                            </Form.Item>
                        </Col>
                        <Col md={24}>
                            <Form.Item
                                name="password"
                                rules={rules.name}
                            >
                                <CustomPassword light placeholder="Palavra-passe" size="large" />
                            </Form.Item>
                        </Col>
                    </Row>
                </ContactForm>

                <ButtonContainer>
                    <StyledButton shadow={theme.blue} onClick={() => onFinish(form.getFieldsValue())}>
                        Iniciar sessão
                    </StyledButton>
                </ButtonContainer>
            </FormContainer>
        </>
    )
}

export default Login