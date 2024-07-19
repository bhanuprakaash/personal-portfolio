import React from 'react';
import styled from 'styled-components';

const MainContentContainer = styled.div`
  margin-left: 40%;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const MainContent = ({ content }) => {
  return (
    <MainContentContainer>
      {content}
    </MainContentContainer>
  );
};

export default MainContent;
