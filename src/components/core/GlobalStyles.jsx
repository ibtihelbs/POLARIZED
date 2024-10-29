import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  

  :root {
    --dark-grey: #2c3639;
    --bg-color: #fcf8e8;
    --neon: rgb(210, 255, 114);
    --red: rgb(195, 36, 36);
    --shadow:5px 5px 0px var(--dark-grey);
    --border: 2px solid var(--dark-grey);
  }

  
`;

export default GlobalStyles;
