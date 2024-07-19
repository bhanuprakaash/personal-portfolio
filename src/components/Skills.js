import React,{useEffect} from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #f0f0f0;

`;

const SkillsTitle = styled.p`
  margin-top: 0;
  font-size:18px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillCategory = styled.li`
  margin-bottom: 10px;
`;

const SkillItem = styled.div`
  border:0.5px solid #9DA1A1;
  width:100px;
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
  display: inline-block;
  padding-top:5px;
  
`;
const SkillName = styled.p`
    font-size:16px;
    text-align:center;
    color:#404242;
`
const CirclesContainer = styled.div`
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.filled ? '#666' : '#ddd'};
  margin-right:2px;
  margin-left:2px;
`;

const Skills = () => {
    useEffect(() => {
        document.title = "Skills";
      }, []);

    const renderCircles = (level) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Circle key={index} filled={index < level} />
        ));
    };

  return (
    <div>
      <h2>Skills</h2>
      <SkillsContainer>
        <SkillsTitle>Languages</SkillsTitle>
        <SkillsList>
          <SkillCategory>
            <SkillItem> 
                <SkillName>Java</SkillName>
                <CirclesContainer>{renderCircles(4)}</CirclesContainer>
            </SkillItem>
            <SkillItem> 
                <SkillName>Python</SkillName>
                <CirclesContainer>{renderCircles(4)}</CirclesContainer>
            </SkillItem>
            <SkillItem> 
                <SkillName>JavaScript</SkillName>
                <CirclesContainer>{renderCircles(4)}</CirclesContainer>
            </SkillItem>
          </SkillCategory>
        </SkillsList>
      </SkillsContainer>
      <SkillsContainer>
        <SkillsTitle>Databases</SkillsTitle>
        <SkillsList>
          <SkillCategory>
          <SkillItem> 
                <SkillName>MySql</SkillName>
                <CirclesContainer>{renderCircles(4)}</CirclesContainer>
            </SkillItem>
            <SkillItem> 
                <SkillName>MongoDB</SkillName>
                <CirclesContainer>{renderCircles(3)}</CirclesContainer>
            </SkillItem>
          </SkillCategory>
        </SkillsList>
      </SkillsContainer>
      <SkillsContainer>
        <SkillsTitle>Web Technologies/Tools</SkillsTitle>
        <SkillsList>
          <SkillCategory>
          <SkillItem> 
                <SkillName>React.js</SkillName>
                <CirclesContainer>{renderCircles(4)}</CirclesContainer>
            </SkillItem>
            <SkillItem> 
                <SkillName>Node.js</SkillName>
                <CirclesContainer>{renderCircles(3)}</CirclesContainer>
            </SkillItem>
            <SkillItem> 
                <SkillName>Express.js</SkillName>
                <CirclesContainer>{renderCircles(3)}</CirclesContainer>
            </SkillItem>
            <SkillItem> 
                <SkillName>HTML</SkillName>
                <CirclesContainer>{renderCircles(4)}</CirclesContainer>
            </SkillItem>
            <SkillItem> 
                <SkillName>CSS</SkillName>
                <CirclesContainer>{renderCircles(4)}</CirclesContainer>
            </SkillItem>
            <SkillItem> 
                <SkillName>Spring Boot</SkillName>
                <CirclesContainer>{renderCircles(3)}</CirclesContainer>
            </SkillItem>
            <SkillItem> 
                <SkillName>Rest APIs</SkillName>
                <CirclesContainer>{renderCircles(4)}</CirclesContainer>
            </SkillItem>
          </SkillCategory>
        </SkillsList>
      </SkillsContainer>
    </div>
  );
};

export default Skills;
