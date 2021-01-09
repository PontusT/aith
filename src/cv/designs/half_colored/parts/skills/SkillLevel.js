import React from 'react';
import styled from '@emotion/styled'

const SkillLevel = ({title, level}) => {

  const StyledContainer = styled.div`

  `

  return (
    <StyledContainer>
      {title}
      {level}
    </StyledContainer>
  );
}

export default SkillLevel;