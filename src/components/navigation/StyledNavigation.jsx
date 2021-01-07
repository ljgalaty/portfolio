import styled from 'styled-components';
import {HashLink} from 'react-router-hash-link'

export const Navbar = styled.div `
    padding: 15px;
    width: 75vw;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    border-top: solid;
    border-color: ${props => props.theme.hookersGreen};
`;

export const Navbuttons = styled(HashLink)`
    text-decoration: none !important;
    color: #2F3E46;
    font-size: 25px;
    font-family: 'glacial_indifferenceregular';
    &:hover {
        color: ${props => props.theme.darkSeaGreen};
    }
`;