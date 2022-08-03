import React from "react";
import styled, { withTheme } from "styled-components";
import { dimensions, colors } from "../../helper";
import Row from "antd/es/row"
import { StyledButton } from "../../styles";

const Container = styled(Row)`
    width: 100%;
    padding: 50px 0px 10px 0px;
    box-sizing: border-box;
    margin: auto;
    background-color: ${props => props.background};

    h3 {
        font-size: 48px;
        text-align: center;
    }

    p {
        font-size: 14px;
        opacity: .7;
        text-align: center;
        margin-top: 50px;
    }

    .button-container{
        width: 350px;
        margin: auto;
        text-align: center;
    }
`;


function Footer({ theme }) {
    return (
        <Container background={theme.background} type="flex" justify="center" align="middle">
            <div>
                <h3>Não perca os próximos lançamentos! </h3>

                <StyledButton className="button-container" shadow={theme.blue}>
                    RECEBER NOTIFICAÇÃO
                </StyledButton>

                <p>© 2022 Unidos Pela Atividade. All Rights Reserved.</p>
            </div>
        </Container>
    )
}

export default withTheme(Footer)