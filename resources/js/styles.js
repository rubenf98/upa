import styled, { css } from "styled-components";

export const underlineStyle = css`
    text-decoration: underline;
    text-decoration-color: ${props => props.underlineColor};
    text-decoration-thickness: 3px;
`;