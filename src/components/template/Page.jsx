import styled from 'styled-components';
import Headshot from '../../images/HeadShot.jpg'
import HomeOffice from '../../images/projects_background.jpg';
import Welcome from '../../images/WelcomeImage.jpg';
import Resumepic from '../../images/Resume.png';

export const Page = styled.div `
    height: 100vh;
    width: 80vw;
    background-image: url(${props => 
        props.welcome ? Welcome 
        : props.headshot ? Headshot
        : props.homeoffice ? HomeOffice
        : Resumepic
        });
    background-size: 100%;
    opacity: 0.5;
    background-color: ${props => props.theme.ashGray};
    border-top-style: solid;
    border-color: ${props => props.theme.charcoal};
    border-width: 10px;
    /* overflow-y: hidden; */
`