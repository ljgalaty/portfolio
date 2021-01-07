import styled from 'styled-components';

export const Footer = styled.footer `
  border-top: solid;
  border-color: ${props => props.theme.charcoal};
  height: 20vh;
  width: 100%;
  color:${props => props.theme.hookersGreen};
  text-align: center;
  font-family: 'glacial_indifferenceregular';
  padding: 20px;
`