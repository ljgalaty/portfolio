import styled from 'styled-components';
import contactme from '../../images/contactmesand.jpg';

export const Download = styled.a `
    font-family: 'glacial_indifferenceregular';
    font-size: 35px;
    text-decoration: none;
    color: ${props => props.theme.charcoal};
    display: flex;
    justify-content: space-around;

`;

export const DownloadDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${props => props.theme.atomicTangerine};
    padding: 75px;
    border: solid white;
    border-width: 5px;
`

export const Background = styled.div`
    background-image: url(${contactme});
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid white;
    border-width: 5px;
`