import styled from 'styled-components';
import {HashLink} from 'react-router-hash-link'

export const Navbar = styled.div `
    width: 100vw;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: ${props => props.theme.atomicTangerine} !important;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;

    @media (max-width: 600px) {
        flex-direction: column;
        padding-left: 10px;
        
    }
    @media(min-width: 601px) {
        flex-wrap: wrap;
    }
`;

export const Navbuttons = styled(HashLink)`
    text-decoration: none !important;
    color: ${props => props.theme.charcoal};
    font-size: 30px;
    font-family: 'glacial_indifferenceregular';
    &:hover {
        color: white;
    }
    @media(max-width: 600px) {
        
    }
`;