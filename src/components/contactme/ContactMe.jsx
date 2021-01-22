import React from 'react';
import {Download, Background, DownloadDiv} from './StyledContactMe';

import ResumePDF from '../../images/Laurel_Galaty_Resume.pdf';

export const ContactMe = () => {
    return (
        <>
        <Background id="contactme">
            <DownloadDiv>
                <Download href="https://github.com/ljgalaty">See my GitHub Profile</Download>
                
                <Download href="https://www.linkedin.com/in/laurelgalaty/">See my LinkedIn</Download>

                <Download href={ResumePDF} download>Download my Resume</Download>
                <Download href="mailto:laurel.galaty@gmail.com">Email Me</Download>
            </DownloadDiv>
        </Background>
        </>)
}