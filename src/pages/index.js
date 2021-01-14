import React from 'react'
import styled from '@emotion/styled'
import SEO from '../components/Seo'
import {motion} from 'framer-motion'
import { useTheme } from '@emotion/react'

const Index = ({location}) => {
  
  const theme = useTheme();

  const StyledHero = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #A9C9FF;
    background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const AITH = styled.h1`
    font-size: 7.8rem;
    ${theme.breakpoints.md} {
      font-size: 10rem;
    }
    font-weight: 900;
    color: #F7F1FD;
  `
  const LABS = styled.h1`
    font-size: 7.7rem;
    ${theme.breakpoints.md} {
      font-size: 9.9rem;
    }
    font-weight: 900;
    color: #F7F1FD;
    margin-right: 12px;
    transform: scale(1, -1);
    line-height: 100%;
  ` 
  
  const Info = styled.p`
    color: #F7F1FD;
    margin-right: 12px;
    text-align: justify;
    max-width: 300px;
    ${theme.breakpoints.md} {
      max-width: 385px;
    }

  ` 
  
  const CvLink = styled.a`
    background-color: #A9C9FF;
    color: #F7F1FD;
    padding: 20px 40px;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 30px;
    z-index: 100;
  `

  return (
    <>
      <SEO
        location={location}
      />
      <StyledHero>
        <AITH>
          AITH
        </AITH>
        <LABS>
          LABS
        </LABS>
        <Info>
          Aith Labs är it-konsulter inriktade mot webbutveckling med många års erfarenheter från backend- och frontendprogrammering bakom sig. Vår tech stack är starkast inom Java, Kotlin, JavaScript, NodeJS, ReactJS och GatsbyJS. Vi kommer från en grund i datasäkerhet och har alltid ett starkt fokus på att bygga säkra och stabila system som håller länge.
        </Info>
        <motion.div
          style={{
            zIndex: 100,
            marginTop: 60
          }}
          whileHover={{
            scale: 1.1
          }}
        >
          <CvLink href="/cv/pontus">
            Kolla in cv
          </CvLink>
        </motion.div>
      </StyledHero>
    </>
  );
}

export default Index;