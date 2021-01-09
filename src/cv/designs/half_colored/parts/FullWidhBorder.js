import React from 'react';
import styled from '@emotion/styled'

const FullWidhBorder = ({color}) => {

  const StyledContainer = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${color? color : 'white'};
  `

  return (
    <StyledContainer />
  );

}

export default FullWidhBorder;