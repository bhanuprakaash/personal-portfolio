import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const EducationTitle = styled.h3`
  margin-top: 0;
`;

const EducationDetails = styled.p`
  font-size: 16px;
`;

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <EducationContainer>
        <EducationTitle>BTech. Computer Science and Engineering</EducationTitle>
        <EducationDetails>
          <strong>Grade:</strong> 7.9/10<br />
          <strong>Year:</strong> 2019-2023<br />
          <strong>Institution:</strong> Sanskrithi School of Engineering
        </EducationDetails>
      </EducationContainer>
      <EducationContainer>
        <EducationTitle>Intermediate. MPC</EducationTitle>
        <EducationDetails>
          <strong>Grade:</strong> 9.50/10<br />
          <strong>Year:</strong> 2017-2019<br />
          <strong>Institution:</strong> Space Junior College
        </EducationDetails>
      </EducationContainer>
      <EducationContainer>
        <EducationTitle>SSC</EducationTitle>
        <EducationDetails>
          <strong>Grade:</strong> 9.2/10<br />
          <strong>Year:</strong> 2016-2017<br />
          <strong>Institution:</strong> Sri Sai Brahma High School
        </EducationDetails>
      </EducationContainer>
    </div>
  );
};

export default Education;
