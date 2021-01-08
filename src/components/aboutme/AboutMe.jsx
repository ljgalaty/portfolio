import React from 'react';
import {Header} from '../template/Header';
import {Page} from '../template/Page';
import {AboutText} from './StyledAboutMe';

export const AboutMe = () => {
    return (
        <>
            <Header id="aboutme">About Me</Header>
            <Page headshot> 
                <AboutText>I'm a web developer eager to learn more and excited by new challenges</AboutText>
            </Page>
                
        </>)
}