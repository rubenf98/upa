import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.text} !important;
    position: relative;
  }
`