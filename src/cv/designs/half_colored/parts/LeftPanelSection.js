import React from 'react';
import styled from '@emotion/styled';
import FullWidhBorder from './FullWidhBorder';

const LeftPanelSection = ({ title, children }) => {
  const StyledContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const StyledHeader = styled.h4`
    margin-top: 20px;
    margin-bottom: 20px;
  `;

  const ComponentContainer = styled.div`
    width: 100%;
  `;

  return (
    <StyledContainer>
      {title && <FullWidhBorder color="white" />}
      {title && <StyledHeader>{title}</StyledHeader>}
      <ComponentContainer>{children}</ComponentContainer>
    </StyledContainer>
  );
};

export default LeftPanelSection;
