import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 35%;
  height: 100vh;
  position: fixed;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius:50%;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit:cover;
`;

const Name = styled.h1`
  font-size: 25px;
  margin-bottom: 10px;
  color: #333;
`;

const Designation = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  color: #666;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  width: 50%;
`;

const NavLink = styled.li`
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;
  color: #404242;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  border:0.5px solid #9DA1A1;

  &:hover {
    background-color: #9DA1A1;
    color: #fff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: #333;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const Sidebar = ({ onLinkClick }) => {
  return (
    <SidebarContainer>
      <ProfileImage src={`${process.env.PUBLIC_URL}/bhanu.JPG`} alt="Profile" />
      <Name>Bhanu Prakash Sai</Name>
      <Designation>Computer Science Grad | Web Developer</Designation>
      <NavLinks>
        <NavLink onClick={() => onLinkClick('about')}>About Me</NavLink>
        <NavLink onClick={() => onLinkClick('projects')}>Projects</NavLink>
        <NavLink onClick={() => onLinkClick('skills')}>Skills</NavLink>
        <NavLink onClick={() => onLinkClick('internships')}>Internships</NavLink>
      </NavLinks>
    <SocialLinks>
      <SocialIcon href="https://github.com/bhanuprakaash" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </SocialIcon>
      <SocialIcon href="https://linkedin.com/in/bhanu-prakash-sai-34b5b1215" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </SocialIcon>
      <SocialIcon href="mailto:bhanuprakashsaip@gmail.com">
        <FaEnvelope />
      </SocialIcon>
    </SocialLinks>
  </SidebarContainer>
  );
};

export default Sidebar;
