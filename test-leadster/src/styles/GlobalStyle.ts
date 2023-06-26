import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-gray: #627397;

    --color-dark-blue: #1c3c50;
    --color-blue-300: #1f76f0;
    --color-blue-200: #2c83fb;
    --color-blue-100: #f0f8ff;

    font-size: 60%;   
  }

  @media (min-width: 800px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-gray-900);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: "Plus Jakarta Sans", Sans-Serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
