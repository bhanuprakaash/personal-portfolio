import React,{useEffect} from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const InternshipContainer = styled.div`
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
      background-color: #f0f0f0;

`;

const InternshipTitle = styled.p`
  margin-top: 0;
  font-size:18px;
  font-style:bold;
`;

const InternshipDescription = styled.p`
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

const Internships = () => {
    useEffect(() => {
        document.title = "Internship";
      }, []);
  return (
    <div>
      <h2>Internships</h2>
      <InternshipContainer>
        <InternshipTitle>Automated Detection of Different Sentiments from Textual Comments & Feedback | TCS iON RIO</InternshipTitle>
        <InternshipDescription>
          Developed a Deep learning algorithm to detect different types of sentiment contained in a collection of English sentences or a large paragraph.
        </InternshipDescription>
        <InternshipDescription>
            Learned how to build a basic neural network using Keras with TensorFlow as the back end.
        </InternshipDescription>
        <TechnologiesList>
          <TechnologyItem>Deep Learning</TechnologyItem>
          <TechnologyItem>Keras</TechnologyItem>
          <TechnologyItem>TensorFlow</TechnologyItem>
          <TechnologyItem>Numpy</TechnologyItem>
          <TechnologyItem>Pandas</TechnologyItem>
          <TechnologyItem>Python</TechnologyItem>
        </TechnologiesList>
        <GitHubLink href="#" target="_blank"><FaGithub /></GitHubLink>
      </InternshipContainer>
    </div>
  );
};

export default Internships;
