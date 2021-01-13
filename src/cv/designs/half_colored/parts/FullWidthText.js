import React from 'react';
import styled from '@emotion/styled'

const FullWithText = ({children, padding}) => {

  const StyledParagraph = styled.p`
    color: white;
    text-align: justify;
  `

  return (
    <StyledParagraph>
      {children}
    </StyledParagraph>
  );
}

export default FullWithText;