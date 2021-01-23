import React from 'react';
import {Pic, Greeting, MainDiv, Hi, HiHi} from './StyledHome';
import headShot from '../../images/HeadShot.jpg';

export const Home = () => {
    return (
        <MainDiv>
            <Pic src={headShot} />

            <Greeting>
                <Hi>Hi I'm Laurel</Hi>
                <HiHi>I'm a Miami Based Web Developer Looking for Work</HiHi>
                {/* <h1 className="laurel">Hi, I'm Laurel</h1>
                <h2 className="description">I'm a Miami Based Web Developer Looking for Work</h2> */}
            </Greeting>
            
        </MainDiv>)
}