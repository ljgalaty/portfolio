import React from 'react';
import {Pic, Greeting, MainDiv} from './StyledHome';
import headShot from '../../images/HeadShot.jpg';

export const Home = () => {
    return (
        <MainDiv>
            <Pic src={headShot} />

            <Greeting>
                <h1 className="laurel">Hi, I'm Laurel</h1>
                <h2 className="description">I'm a Miami Based Web Developer Looking for Work</h2>
            </Greeting>
            
        </MainDiv>)
}