import React,{useEffect} from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin-top: 10%;
  max-width:100%;
  
`;

const Heading = styled.p`
  font-size: 2.5em;
  margin-bottom: 20px;
  margin-right:0px;
  margin-left:0px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: #404242;
  max-width:100%;
`;
const CodeBlock = styled.pre`
  background-color: #2d2d2d;
  padding: 20px;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 1em;
  color: white;
  max-width:100%;
`;

const Skill = styled.span`
  color: ${props => props.color};
`;

const About = () => {

    useEffect(() => {
        document.title = "About Me - Bhanu Prakash Sai";
      }, []);

    const techArsenal = [
        { skill: 'Java', color: '#e34c26' },
        { skill: 'HTML&CSS', color: '#264de4' },
        { skill: 'JavaScript', color: '#f0db4f' },
        { skill: 'React.js', color: '#61dafb' },
        { skill: 'Node.js', color: '#68a063' },
        { skill: 'MongoDB', color: '#4db33d' },
        { skill: 'Express.js', color: '#787878' },
        { skill: 'Spring', color: '#6db33f' },
        { skill: 'MySQL', color: '#00758f' }
      ];  return (
    <AboutContainer>
      <Heading>Hey there! 👋</Heading>
      <Paragraph>
        Computer science graduate with expertise in software design and development. Passionate about open source and always open to opportunities to contribute and learn.
      </Paragraph>
      <Paragraph>
        Feel free to reach out if you’d like to collaborate or discuss potential opportunities! 😊
      </Paragraph>
      <CodeBlock>
      {`toolBox = [`}
          {techArsenal.map((item, index) => (
            <Skill key={index} color={item.color}>
              {item.skill}
              {index < techArsenal.length - 1 ? ', ' : ''}
            </Skill>
          ))}
          {`]`}
    </CodeBlock>
    </AboutContainer>
  );
};

export default About;
