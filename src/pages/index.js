import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useTheme } from '@emotion/react';
import SEO from '../components/Seo';

const Index = () => {
  const theme = useTheme();

  const StyledHero = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #a9c9ff;
    background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const AITH = styled.h1`
    font-size: 7.8rem;
    ${theme.breakpoints.md} {
      font-size: 10rem;
    }
    font-weight: 900;
    color: #f7f1fd;
  `;
  const LABS = styled.h1`
    font-size: 7.7rem;
    ${theme.breakpoints.md} {
      font-size: 9.9rem;
    }
    font-weight: 900;
    color: #f7f1fd;
    margin-right: 12px;
    transform: scale(1, -1);
    line-height: 100%;
  `;

  const Info = styled.p`
    color: #f7f1fd;
    margin-right: 12px;
    text-align: justify;
    max-width: 300px;
    ${theme.breakpoints.md} {
      max-width: 385px;
    }
  `;

  const CvLink = styled.a`
    background-color: #a9c9ff;
    color: #f7f1fd;
    padding: 20px 40px;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 30px;
    z-index: 100;
  `;

  return (
    <>
      <SEO />
      <StyledHero>
        <AITH>AITH</AITH>
        <LABS>LABS</LABS>
        <Info>
          Aith Labs är it-konsulter inriktade mot webbutveckling med många års erfarenheter från
          backend- och frontendprogrammering bakom sig. Vår tech stack är starkast inom Java,
          Kotlin, JavaScript, NodeJS och ReactJS. Vi kommer från en grund i datasäkerhet
          och har alltid ett starkt fokus på att bygga säkra och stabila system som håller länge.
        </Info>
        <motion.div
          style={{
            zIndex: 100,
            marginTop: 60,
          }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <CvLink href="/cv/pontus">Kolla in cv</CvLink>
        </motion.div>
      </StyledHero>
    </>
  );
};

export default Index;
