import React from 'react';
import {ProjectsBody, Card, CardContainer, ProjectText} from './StyledProjects';

export const Projects = () => {
    return (
        <>
            <ProjectsBody id="projects">
                <Card>
                    <CardContainer>
                        Stretch It Out
                    </CardContainer>
                </Card>
                <Card>
                    <CardContainer>
                        Byrd Song
                    </CardContainer>
                </Card>
                <ProjectText>Check Out My Projects</ProjectText>
            </ProjectsBody>
            
        </>)
}