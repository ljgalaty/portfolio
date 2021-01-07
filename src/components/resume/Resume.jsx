import React from 'react';
import {Header} from '../template/Header';
import {Page} from '../template/Page';
import {Navigation} from '../navigation/Navigation';
import {Background} from '../template/BackgroundImage';

import ResumePic from '../../images/Resume.png';

export const Resume = () => {
    return (
        <>
            <Header id="resume">Resume</Header>
            <Navigation />
            <Page >
                {/* <Background src={ResumePic} /> */}
            </Page>
        </>)
}