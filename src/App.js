import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import styled from 'styled-components';
import About from './components/About';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Skills from './components/Skills';

const AppContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const App = () => {
  const [content, setContent] = useState(<About/>);

  const handleLinkClick = (section) => {
    switch (section) {
      case 'about':
        setContent(<About/>);
        break;
      case 'projects':
        setContent(<Projects/>);
        break;
      case 'education':
        setContent(<Education/>);
        break;
      case 'skills':
        setContent(<Skills/>);
        break;
      case 'internships':
        setContent(<Internships/>);
        break;
      default:
        setContent(<About/>);
    }
  };

  return (
    <AppContainer>
      <Sidebar onLinkClick={handleLinkClick} />
      <MainContent content={content} />
    </AppContainer>
  );
};

export default App;
