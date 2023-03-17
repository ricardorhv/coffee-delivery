import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};

    position: relative;
    line-height: 1.3;

    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`
