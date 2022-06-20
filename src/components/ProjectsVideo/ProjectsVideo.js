import React from 'react';
import styled from 'styled-components';
import { Section, SectionText, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


const ProjectsVideo = () =>  (
  <Section id="projectsvideo">
    <SectionDivider divider />
      <SectionTitle>Projects Video</SectionTitle>
      <Content>
        <Wrap>
          <video controls={true} playsInline={true}>
            <source src='/videos/video1.mp4' 
            type='video/mp4'/>
          </video>
        </Wrap>
        <Wrap>
          <video controls={true}  playsInline={true}>
            <source src='/videos/video2.mp4' 
            type='video/mp4'/>
          </video>
        </Wrap>
        <Wrap>
          <video controls={true} playsInline={true}>
            <source src='/videos/video3.mp4' 
            type='video/mp4'/>
          </video>
        </Wrap>
        <Wrap>
          <video controls={true} playsInline={true}>
            <source src='/videos/video4.mp4' 
            type='video/mp4'/>
          </video>
        </Wrap>
      </Content>
  </Section>
);

const Content = styled.div`
  padding-bottom:50px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
     
    }
  }
`;

export default ProjectsVideo;
