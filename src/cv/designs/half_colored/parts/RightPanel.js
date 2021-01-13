import React from 'react';
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import SkillContainer from './skills/SkillContainer';
import RightPanelSection from './RightPanelSection';
import Experience from './experience/Experience';
import Graduate from '../../../../icons/graduate.svg'
import Officedesk from '../../../../icons/officedesk.svg'
import Programming from '../../../../icons/programming.svg'
import CodeScreen from '../../../../icons/codescreen.svg'

const RightPanel = ({data}) => {

  const theme = useTheme();
  
  const StyledContainer = styled.div`
    background-color: #fdfdfd;
    color: ${data.darkFontColor};
    padding: 40px 8%;
    ${ theme.breakpoints.sm } {
      padding: 40px 20%;
    }
    ${ theme.breakpoints.md } {
      padding: 40px 10%;
    }
    ${ theme.breakpoints.lg } {
      padding: 40px 10%;
    }
  `
  const StyledName = styled.h1`
    text-transform: uppercase;
  `
  const StyledWorkTitle = styled.h5`
    margin-top: 10px;
  `

  const programmingIcon = <Programming width={30} stroke={data.darkFontColor} fill="none" />
  const officedeskIcon = <Officedesk width={30} stroke={data.darkFontColor} fill="none" />
  const graduateIcon = <Graduate width={30} stroke={data.darkFontColor} fill="none" />
  const codeScreenIcon = <CodeScreen width={30} stroke={data.darkFontColor} fill="none" />

  return (
    <StyledContainer>
      
      <StyledName>{data.name}</StyledName>
      <StyledWorkTitle>{data.workTitle}</StyledWorkTitle>
      
      <RightPanelSection icon={programmingIcon} title="Languages" color={data.darkFontColor} >
        <SkillContainer skills={data.skills} color={data.accentColor} bgColor={'#C2C3D2'} />
      </RightPanelSection>

      <RightPanelSection icon={officedeskIcon} title="Work Experience" color={data.darkFontColor} >
        {data.work_experience.list.map(experience => {
          return (
            <Experience
              key={experience.title + experience.location + experience.dates}
              title={experience.title}
              dates={experience.dates}
              location={experience.location}
              text={experience.text}
              link={experience.link}
              color={data.darkFontColor}
            />
          )
        })}
      </RightPanelSection>     
      
      <RightPanelSection icon={codeScreenIcon} title="Code Projects" color={data.darkFontColor} >
        {data.projects.list.map(experience => {
          return (
            <Experience
              key={experience.title + experience.location + experience.dates}
              title={experience.title}
              dates={experience.dates}
              location={experience.location}
              text={experience.text}
              link={experience.link}
              color={data.darkFontColor}
            />
          )
        })}
      </RightPanelSection>

      <RightPanelSection icon={graduateIcon} title="Education" color={data.darkFontColor} >
        {data.education.list.map(experience => {
          return (
            <Experience
              key={experience.title + experience.location + experience.dates}
              title={experience.title}
              dates={experience.dates}
              location={experience.location}
              text={experience.text}
              link={experience.link}
              color={data.darkFontColor}
            />
          )
        })}
      </RightPanelSection>

    </StyledContainer>
  );
}

export default RightPanel;