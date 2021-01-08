import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    Body {
    /* height: 100vh;
    width: 100vw; */
    display: flex;
    flex-direction: column;
    align-items: center !important;
    animation: fadeInAnimation ease 4s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
    }
    @keyframes fadeInAnimation { 
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
     } 
    } 
`

export default GlobalStyle

