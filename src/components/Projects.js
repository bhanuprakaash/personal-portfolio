import React,{useEffect} from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const ProjectContainer = styled.div`
    background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.p`
  margin-top: 0;
  font-size:18px;
  font-style:bold;
`;

const ProjectDescription = styled.p`
  font-size: 15px;
`;

const TechnologiesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  
`;

const TechnologyItem = styled.li`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 5px;
  font-size: 14px;
    border:0.5px solid #9DA1A1;

`;

const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Projects = () => {
    useEffect(() => {
        document.title = "Projects";
      }, []);
  return (
    <div>
      <h2>Projects</h2>
      <ProjectContainer>
        <ProjectTitle>Idea Lab – Social Networking Website for Collaborative Learning</ProjectTitle>
        <ProjectDescription>
          A new social networking site designed to connect professionals, students, and technology enthusiasts to share project ideas, updates, news.
        </ProjectDescription>
        <TechnologiesList>
          <TechnologyItem>React</TechnologyItem>
          <TechnologyItem>Redux</TechnologyItem>
          <TechnologyItem>Firebase</TechnologyItem>
          <TechnologyItem>Firestore</TechnologyItem>
        </TechnologiesList>
        <GitHubLink href="https://github.com/bhanuprakaash/Idea-Lab" target="_blank"><FaGithub /></GitHubLink>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectTitle>Share Wheels – Carpooling and Ride-Sharing Platform</ProjectTitle>
        <ProjectDescription>
          Developed a MERN stack web app for commuters to connect and share rides. Implemented user registration, real-time messaging.
        </ProjectDescription>
        <TechnologiesList>
          <TechnologyItem>React.js</TechnologyItem>
          <TechnologyItem>Node.js</TechnologyItem>
          <TechnologyItem>Express.js</TechnologyItem>
          <TechnologyItem>MongoDB</TechnologyItem>
          <TechnologyItem>Mapbox API</TechnologyItem>
          <TechnologyItem>Socket.io</TechnologyItem>
        </TechnologiesList>
        <GitHubLink href="#" target="_blank"><FaGithub /></GitHubLink>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectTitle>Blog Book – Blogging Web Application</ProjectTitle>
        <ProjectDescription>
          Full-stack blogging web application that allows users to create, read, update, and delete blog posts.
        </ProjectDescription>
        <TechnologiesList>
          <TechnologyItem>Java</TechnologyItem>
          <TechnologyItem>Spring Boot</TechnologyItem>
          <TechnologyItem>React</TechnologyItem>
          <TechnologyItem>React Quill</TechnologyItem>
          <TechnologyItem>React Suite</TechnologyItem>
          <TechnologyItem>H2 Database</TechnologyItem>
        </TechnologiesList>
        <GitHubLink href="#" target="_blank"><FaGithub /></GitHubLink>
      </ProjectContainer>
    </div>
  );
};

export default Projects;
