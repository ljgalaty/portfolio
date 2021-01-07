import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    Body {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center !important;
    border-top-style: solid;
    border-color: ${props => props.theme.charcoal};
    border-width: 15px;
    }
`

export default GlobalStyle