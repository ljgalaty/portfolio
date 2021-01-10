import styled from 'styled-components';
import Headshot from '../../images/HeadShot.jpg'
import HomeOffice from '../../images/projects_background.jpg';
// import Welcome from '../../images/WelcomeImage.jpg';
import Resumepic from '../../images/resume-background.jpg';
import ContactMe from '../../images/contactme.jpg';

export const Page = styled.div `
    height: 100vh;
    width: 100vw;
    background-image: url(${props => 
        // props.welcome ? ContactMe 
        props.headshot ? Headshot
        : props.homeoffice ? HomeOffice
        : props.resume ? Resumepic
        : ContactMe
        });
    background-size: 100%;
    background-color: ${props => props.theme.ashGray};
    border-top-style: solid;
    border-color: ${props => props.theme.charcoal};
    border-width: 10px;
`