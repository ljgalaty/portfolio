import styled from 'styled-components';
import Resume_Background from '../../images/resume-background.jpg';


export const ProjectText = styled.h1 `
    font-family: 'glacial_indifferenceregular';
    font-size: 4vw;
    max-width: 40vw;
    background-color: ${props => props.theme.atomicTangerine};
    padding: 50px;
    border: solid white;
    border-width: 5px;
    margin-left: 3vw;
    @media (max-width: 600px) {
        margin-top: 20vw;
    }
`

export const ProjectsBody = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(${Resume_Background});
    background-size: cover;
    @media (max-width: 600px) {
        flex-direction: column;
        padding-left: 10px;
    }
`

export const Card = styled.div `
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 250px;
    height: 325px;
    background-color: white;
    font-family: 'glacial_indifferenceregular';
    &:hover {
        box-shadow: 0 12px 24px 0 rgba(0,0,0,0.2);
        cursor: pointer;
    }   
`

export const CardContainer = styled.div `
    padding: 2px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`