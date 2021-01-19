import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Arrowright from '../../../../../icons/arrowright.svg';

const Experience = ({ title, dates, location, text, link, color }) => {
  const theme = useTheme();

  const OuterGrid = styled.div`
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr;
    ${theme.breakpoints.md} {
      grid-template-columns: 0.8fr 1.1fr;
    }
    ${theme.breakpoints.lg} {
      grid-template-columns: 0.5fr 1.6fr;
    }
    grid-template-rows: auto;
    gap: 0px 40px;
  `;

  const LeftPart = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    ${theme.breakpoints.md} {
      margin-bottom: 0px;
    }
  `;

  const RightPart = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Title = styled.h4`
    text-align: left;
    ${theme.breakpoints.md} {
      text-align: right;
    }
    font-size: 1.2rem;
    line-height: 1.2;
    margin-bottom: 2px;
  `;
  const Dates = styled.h5`
    text-align: left;
    ${theme.breakpoints.md} {
      text-align: right;
    }
  `;
  const Location = styled.h4`
    font-size: 1rem;
    margin-bottom: 6px;
  `;
  const Text = styled.p``;

  const Link = styled.a`
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const LinkText = styled.div`
    margin-right: 6px;
    font-weight: 300;
  `;

  return (
    <OuterGrid>
      <LeftPart>
        <Title>{title}</Title>
        <Dates>{dates}</Dates>
      </LeftPart>
      <RightPart>
        <Location>{location}</Location>
        <Text>{text}</Text>
        {link && (
          <Link href={link.url} rel="noopener noreferrer" target="_blank">
            <LinkText>{link.text}</LinkText>
            <Arrowright width={12} stroke={color} fill="none" />
          </Link>
        )}
      </RightPart>
    </OuterGrid>
  );
};

export default Experience;
