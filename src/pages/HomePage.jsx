import React from 'react';
import {Navigation} from '../components/navigation/Navigation';
import {Home} from '../components/home/Home';
import {AboutMe} from '../components/aboutme/AboutMe';
import {Projects} from '../components/projects/Projects';
import {Resume} from '../components/resume/Resume';
import {ContactMe} from '../components/contactme/ContactMe';

export const HomePage = () => {
    return (
        <div>
            <Navigation />
            <Home />
            <AboutMe />
            <Projects />
            <Resume />
            <ContactMe />
        </div>)
}