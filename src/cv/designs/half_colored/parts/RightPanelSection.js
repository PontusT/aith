import React from 'react';
import styled from '@emotion/styled'
import FullWidhBorder from './FullWidhBorder';

const RightPanelSection = ({icon, title, children, color}) => {

  const StyledContainer = styled.div`
    margin-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 8px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: sticky;
    top: 0;
    background-color: #fdfdfd;
  `

  const StyledHeader = styled.h4`
    margin-left: 20px;
    margin-right: 20px;
    white-space: nowrap;
  `

  const ComponentContainer = styled.div`
    width: 100%;
  `
  
  const IconWrapper = styled.div`
    flex-grow: 1;
  `
  

  return (
    <StyledContainer>
      <HeaderWrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <StyledHeader>{title}</StyledHeader>
        <FullWidhBorder color={color} />
      </HeaderWrapper>
      <ComponentContainer>
        {children}
      </ComponentContainer>
    </StyledContainer>
  );
}

export default RightPanelSection;