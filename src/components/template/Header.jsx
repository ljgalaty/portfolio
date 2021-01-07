import styled from 'styled-components';

export const Header = styled.h1 `
    font-family: 'glacial_indifferenceregular';
    color: ${props => props.theme.charcoal};
    font-size: 75px;
    display: flex;
    justify-content: center;
    &:hover {
        color: ${props => props.theme.darkSeaGreen};
  }
`
