import React from 'react';
import styled from '@emotion/styled'

const CvContainer = ({children}) => {

  const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    `
  const StyledInnerContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    max-width: 1200px;
    flex: 1;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
  `

  return (
    <StyledContainer>
      <StyledInnerContainer>
        {children}
      </StyledInnerContainer>
    </StyledContainer>
  );
}

export default CvContainer;