import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const FluidProfilePicture = ({ image, alt }) => {
  const StyledContainer = styled.div`
    width: 100%;
    max-width: 220px;
    border-radius: 50%;
    overflow: hidden;
  `;

  return (
    <StyledContainer>
      <Img
        imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
        alt={alt}
        fluid={image.fluid}
      />
    </StyledContainer>
  );
};

export default FluidProfilePicture;
