import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Importando Normalize.css via CDN */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');

  /* Estilos globais da sua aplicação */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
    background-color: #0d1117;
    color: #f0f6fc;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
