import React from 'react';
import styled from '@emotion/styled';

const index = () => {
  const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #d7e2d0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <StyledContainer>
      <h1>Siddan hittades inte :(</h1>
    </StyledContainer>
  );
};

export default index;
