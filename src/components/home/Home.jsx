import React from 'react';
import { Greeting, MainDiv, Hi, HiHi} from './StyledHome';


export const Home = () => {
    return (
        <MainDiv>
            

            <Greeting>
                <Hi>Hi I'm Laurel</Hi>
                <HiHi>I'm a Miami Based Web Developer Looking for Work</HiHi>
                {/* <h1 className="laurel">Hi, I'm Laurel</h1>
                <h2 className="description">I'm a Miami Based Web Developer Looking for Work</h2> */}
            </Greeting>
            
        </MainDiv>)
}