import styled from 'styled-components';

export const Text = styled.h1 `
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.charcoal};
    font-family: 'glacial_indifferenceregular';
    font-size: 50px;
`