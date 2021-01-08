import React from 'react';
import {Navbar, Navbuttons} from './StyledNavigation';


export const Navigation = () => {
    return (
        <>
            <Navbar >
                <Navbuttons smooth to="/#">Home</Navbuttons>
                <Navbuttons smooth to="/#aboutme" className="nav-link">About Me</Navbuttons>
                <Navbuttons smooth to="/#projects" className="nav-link">Projects</Navbuttons>
                <Navbuttons smooth to="/#resume" className="nav-link">Resume</Navbuttons>
                <Navbuttons smooth to="/#contactme">Contact Me</Navbuttons>
            </Navbar>
        </>)
}