import styled, { css } from "styled-components";
import { Input } from 'antd';
import { borderRadius, dimensions } from "./helper";

export const underlineStyle = css`
    text-decoration: underline;
    text-decoration-color: ${props => props.underlineColor};
    text-decoration-thickness: 3px;
`;

export const baseInputStyles = css`
    width: 100%;
    margin: 10px 0px;
    border: none;
    border-bottom: 2px solid #122038;
    background: transparent !important;
    color: black;
    font-size: 18px;

    .ant-input-status-error{
        background: transparent !important;  
    }

    &:focus,
    &:active, &:hover {
        outline: none;
        border: none !important;
        border-bottom: 2px solid #7df3d0 !important;
        appearance: none;
        box-shadow: none;
    }

    &::placeholder {
        color: #122038;
        font-size: 18px;
    }
`;

export const BlackButton = styled.div`
    padding: 14px 19px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all .4s ease;
    border-radius: ${borderRadius};
    font-weight: 900;
    font-size: 16px;
    background:${props => props.background ? props.background : "black"};
    color: ${props => props.background ? "black" : "white"};;
    border: 0px;

    &:hover {
        box-shadow: ${props => "6px 6px 0px 0px " + props.shadow};
    }
  
`;

export const WhiteButton = styled.div`
    padding: 14px 19px;
    box-sizing: border-box;
    cursor: pointer;
    color: black;
    border: 1px solid black;  
    transition: all .4s ease;
    border-radius: ${borderRadius};
    font-weight: 900;
    background: white;
    font-size: 16px;
    
    &:hover {
        border: 1px solid black; 
        color: black;
        box-shadow: ${props => "6px 6px 0px 0px " + props.shadow};
    }
`;

export const CustomInput = styled(Input)`
    ${baseInputStyles}

    border-width: ${props => props.light ? "1px" : "2px"};

    @media (max-width: ${dimensions.md}){
        font-size: 16px;
        
        &::placeholder {
            font-size: 16px;
        }
    }
`;

export const CustomPassword = styled(Input.Password)`
    ${baseInputStyles}

    border-width: ${props => props.light ? "1px" : "2px"};

    .ant-input {
        background-color: transparent
    }

    .ant-input::placeholder {
        color: black;
        font-size: 18px;
    }

    @media (max-width: ${dimensions.md}){
        font-size: 16px;
        
        &::placeholder {
            font-size: 16px;
        }
    }
`;

export const CustomTextArea = styled(Input.TextArea)`
    ${baseInputStyles}

    .ant-input {
        border: 0px;
        background-color: transparent;
    }
`;
