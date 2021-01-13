import React from 'react';
import styled from '@emotion/styled'
import {useTheme} from '@emotion/react'
import FullWithText from './FullWidthText';
import LeftPanelSection from './LeftPanelSection';
import SkillContainer from './skills/SkillContainer';
import FluidProfilePicture from './profile/FluidProfilePicture';
import StaggerChildrenWrapper from '../../../animations/StaggerChildrenWrapper';
import StaggerChild from '../../../animations/StaggerChild';
import ContactList from './contact/ContactList';

const LeftPanel = ({data, image}) => {

  const theme = useTheme();

  const StyledContainer = styled.div`
    background-color: ${data.color};
    /* overflow: hidden; */
    padding: 40px 8%;
    ${theme.breakpoints.sm} {
      padding: 40px 20%;
    }
    ${theme.breakpoints.md} {
      padding: 40px 10%;
    }
    ${theme.breakpoints.lg} {
      padding: 40px 20%;
    }
    color: ${data.lightFontColor};
  `

  const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
  `

  return (
    <StyledContainer>
      
      <StaggerChildrenWrapper>

        <StaggerChild>
          <FlexCenter>
            <FluidProfilePicture
              image={image}
              alt={data.name}
            />
          </FlexCenter>
        </StaggerChild>

        <StaggerChild>
          <LeftPanelSection>
            <FullWithText>
              {data.presentation}
            </FullWithText>
          </LeftPanelSection>
        </StaggerChild>

        <StaggerChild>
          <LeftPanelSection title={"Frameworks"}>
            <SkillContainer skills={data.frameworks} color={data.accentColor} bgColor="white"/>
          </LeftPanelSection>
        </StaggerChild>

        <StaggerChild>
          <LeftPanelSection title={"Tech List"}>
            <FullWithText>
              {data.knowledgeList.join(", ")}
            </FullWithText>
          </LeftPanelSection>
        </StaggerChild>

        <StaggerChild sticky>
          <LeftPanelSection title="Contact">
            <FlexCenter>
              <ContactList contact={data.contact} />
            </FlexCenter>
          </LeftPanelSection>
        </StaggerChild>

      </StaggerChildrenWrapper>
    </StyledContainer>
  );
}

export default LeftPanel;