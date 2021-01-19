import React from 'react';
import styled from '@emotion/styled';
import Mailbox from '../../../../../icons/mailbox.svg';
import LinkedIn from '../../../../../icons/linkedin.svg';
import Network from '../../../../../icons/network.svg';
import Phone from '../../../../../icons/phone.svg';

const ContactList = ({ contact }) => {
  const iconSize = 25;

  const StyledContainer = styled.div``;
  const LinkText = styled.div`
    margin-top: 10px;
  `;

  const StyledLink = styled.a`
    margin: 30px 0px;
    color: white;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <StyledContainer>
      <StyledLink href={`mailto:${contact.email}`}>
        <Mailbox width={iconSize} stroke="white" fill="none" />
        <LinkText>{contact.email}</LinkText>
      </StyledLink>
      <StyledLink href={contact.linkedin} rel="noopener noreferrer" target="_blank">
        <LinkedIn width={iconSize} stroke="white" fill="none" />
        <LinkText>LinkedIn Profile</LinkText>
      </StyledLink>
      <StyledLink href={`tel:${contact.tel.number}`}>
        <Phone width={iconSize} stroke="white" fill="none" />
        <LinkText>{contact.tel.display}</LinkText>
      </StyledLink>
      <StyledLink href={contact.website} rel="noopener noreferrer" target="_blank">
        <Network width={iconSize} stroke="white" fill="none" />
        <LinkText>{contact.website}</LinkText>
      </StyledLink>
    </StyledContainer>
  );
};

export default ContactList;
