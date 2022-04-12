import React, { Component } from "react";
import styled from "styled-components";
import { login } from "../../redux/auth/actions";
import { dimensions } from "../../helper";
import { connect } from "react-redux";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Input = styled.input`
    width: 60%;
    box-sizing: border-box;
    margin: 15px 0;
    border: none;
    border-bottom: 2px solid #777;
    padding: 8px;

    &:focus,
    &:active {
        outline: none;
        border: none;
        border-bottom: 2px solid red;
        background-color: white !important;
        appearance: none;
    }

    ::placeholder {
        font-size: 1.2em;
        display: inline-block;
        margin-left: 10px;
    }
`;

const FormContainer = styled.div`
    z-index: 1;
	position: relative;	
	height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

const Card = styled.div`
    width: 50%;
    max-width: 500px;
    min-width: 120px;
    min-height: 500px;
    display: block;
    padding: 20px;
    background: linear-gradient(90deg, #4d73f1, #0c2968);		
	position: relative;	
    border-radius: 8px;
	box-shadow: 0px 0px 24px #0000005a;

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 90%;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 100%;
    }


    .screen__background {		
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        -webkit-clip-path: inset(0 0 0 0);
        clip-path: inset(0 0 0 0);	
    }

    .screen__background__shape {
        transform: rotate(45deg);
        position: absolute;
    }

    .screen__background__shape1 {
        height: 520px;
        width: 520px;
        background: #FFF;	
        top: -50px;
        right: 180px;	
        border-radius: 0 72px 0 0;
    }

    .screen__background__shape2 {
        height: 220px;
        width: 220px;
        background: #0144af;	
        top: -172px;
        right: 0;	
        border-radius: 32px;
    }

    .screen__background__shape3 {
        height: 540px;
        width: 190px;
        background: linear-gradient(270deg, #2d6df8, rgb(34, 93, 255));
        top: -24px;
        right: 0;	
        border-radius: 32px;
    }

    .screen__background__shape4 {
        height: 400px;
        width: 200px;
        background: #0138af;	
        top: 420px;
        right: 50px;	
        border-radius: 60px;
    }
`;


const Button = styled.button`
    margin-top: 30px;
    display: block;
    padding: 10px 26px;
    border: none;
    background: rgb(33, 33, 255);
    color: white;
    cursor: pointer;
    font-size: 1.2em;
    border-radius: 8px;

    &:hover {
        background: rgb(22, 22, 173);
    }
`;

class Login extends Component {
    state = {
        password: "",
        email: "",
    };

    submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(this.state).map((field) => {
            formData.append(field[0], field[1]);
        });

        this.props.login(formData);
    };
    render() {
        return (
            <Container>
                <Card>
                    <FormContainer>
                        <div>
                            <Input
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={this.state.email}
                                onChange={(e) =>
                                    this.setState({ email: e.target.value })
                                }
                            />

                            <Input
                                name="password"
                                placeholder="Password"
                                type="password"
                                value={this.state.password}
                                onChange={(e) =>
                                    this.setState({ password: e.target.value })
                                }
                            />
                            <Button onClick={this.submitForm}>Login</Button>
                        </div>
                    </FormContainer>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>

                </Card>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
    };
};

export default connect(null, mapDispatchToProps)(Login);
