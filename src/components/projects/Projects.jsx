import React from 'react';
import {ProjectsBody, Card, CardContainer, ProjectText} from './StyledProjects';
import { motion } from "framer-motion";
import StretchLogo from "../../images/StretchLogo.png";
import ByrdLogo from "../../images/Byrd.png";
import SIO from "../../images/SIOhomepage.png";
import ByrdSongHome from "../../images/ByrdSong.png";
import "./Projects.css";

export const Projects = () => {
    const sites = [
        {
          title: "Stretch It Out",
          logo: StretchLogo,
          image: SIO,
          link: "https://stretchitout.herokuapp.com/",
          alt: "Stretch It Out app"
        },
        {
          title: "ByrdSong",
          logo: ByrdLogo,
          image: ByrdSongHome,
          link: "https://byrdsong1.herokuapp.com/",
          alt: "ByrdSong App"
        },
    ];
    
    return (
        <>
            <ProjectsBody id="projects">
                
            <div className="project-list">
                {sites.map((site, index) => (
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.7 }}
          >
            <div key = {index} className="image-container">
              <img src={site.logo} />
              <a href={site.link} target="_blank" rel="noreferrer">
                <img className="transition-image" src={site.image} alt={site.alt}/>
              </a>
              <h3>{site.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <Card>
                    <CardContainer>
                        Stretch It Out
                    </CardContainer>
                </Card>
                <Card>
                    <CardContainer>
                        Byrd Song
                    </CardContainer>
                </Card> */}
                <ProjectText>Check Out My Projects</ProjectText>
            </ProjectsBody>
            
        </>)
}