import React from 'react';
import {Header} from '../template/Header';
import {Page} from '../template/Page';
import {Navigation} from '../navigation/Navigation';
import {Background} from '../template/BackgroundImage';

import Headshot from '../../images/HeadShot.jpg';

export const AboutMe = () => {
    return (
        <>
            <Header id="aboutme">About Me</Header>
            <Navigation />
            <Page headshot>
                {/* <Background src={Headshot} /> */}
            </Page>
        </>)
}