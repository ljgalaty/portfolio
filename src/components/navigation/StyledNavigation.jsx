import styled from 'styled-components';
import {HashLink} from 'react-router-hash-link'

export const Navbar = styled.div `
    padding: 15px;
    background-color: ${props => props.theme.darkSeaGreen} !important;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    border-color: ${props => props.theme.hookersGreen};
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    border-top-style: solid;
    border-color: ${props => props.theme.charcoal};
    border-width: 15px;
`;

export const Navbuttons = styled(HashLink)`
    text-decoration: none !important;
    color: ${props => props.theme.charcoal};
    font-size: 35px;
    font-family: 'glacial_indifferenceregular';
    &:hover {
        color: ${props => props.theme.ashGray};
        border-bottom: solid ${props => props.theme.ashGray};
    }
`;