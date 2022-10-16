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


const rules = {
    password: [
        {
            required: true,
            message: 'Introduza a sua palavra-passe',
        },
    ],
}

function Recover({ form, onFinish, theme, setMode }) {
    return (
        <>
            <ModeSwitch onClick={() => setMode(2)}>Voltar ao registo <span>aqui</span></ModeSwitch>
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
                                name="password"
                                rules={rules.password}
                            >
                                <CustomPassword light placeholder="Nova palavra-passe" size="large" />
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
                </ContactForm>

                <ButtonContainer>
                    <StyledButton shadow={theme.blue} onClick={() => onFinish(form.getFieldsValue())}>
                        Continuar
                    </StyledButton>
                </ButtonContainer>
            </FormContainer>
        </>
    )
}

export default Recover