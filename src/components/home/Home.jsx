import React from 'react';
import {Header} from '../template/Header';
import {Page} from '../template/Page';
import {Navigation} from '../navigation/Navigation';
import {Background} from '../template/BackgroundImage';
import {Text} from './StyledHome';
import WelcomeImage from '../../images/WelcomeImage.jpg';

export const Home = () => {
    return (
        <>
            <Header>Hi, I'm Laurel</Header>
            <Navigation />
            <Page welcome>
                {/* <Background src={WelcomeImage} /> */}
                <Text>I'm a Miami Based Web Developer Looking for Work</Text>
            </Page>

        </>)
}