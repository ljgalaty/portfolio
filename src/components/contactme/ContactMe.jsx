import React from 'react';
import {Download, Background, DownloadDiv} from './StyledContactMe';

import ResumePDF from '../../images/Laurel_Galaty_Resume.pdf';

export const ContactMe = () => {
    return (
        <>
        <Background id="contactme">
            <DownloadDiv>
                <Download href="https://github.com/ljgalaty"> Click here to see my GitHub Profilie</Download>
                
                <Download href="https://www.linkedin.com/in/laurelgalaty/"> Click here to see my LinkedIn</Download>

                <Download href={ResumePDF} download> Click here to download my resume</Download>
            </DownloadDiv>
        </Background>
        </>)
}