import React from 'react';
import styled from '@emotion/styled'
import {useTheme} from '@emotion/react'
import LeftPanel from './parts/LeftPanel';
import RightPanel from './parts/RightPanel';

const HalfColored = ({data, image}) => {

  const theme = useTheme();

  const GridContainer = styled.div`
    background-color: red;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    ${theme.breakpoints.md} {
      grid-template-columns: 0.8fr 1.1fr;
    }
    ${theme.breakpoints.lg} {
      grid-template-columns: 0.7fr 1.3fr;
    }
    grid-template-rows: auto;
    gap: 0px 0px;
  `

  return (
    <GridContainer>
      <LeftPanel data={data} image={image}/>
      <RightPanel data={data} />
    </GridContainer>
  );
}

export default HalfColored;