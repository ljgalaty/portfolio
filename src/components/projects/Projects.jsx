import React from 'react';
import {Header} from '../template/Header';
import {Page} from '../template/Page';
import {Navigation} from '../navigation/Navigation';
import {Background} from '../template/BackgroundImage';

import HomeOffice from '../../images/projects_background.jpg'

export const Projects = () => {
    return (
        <>
            <Header id="projects">Projects</Header>
            <Navigation />
            <Page homeoffice>
                {/* <Background src={HomeOffice} /> */}
            </Page>
        </>)
}