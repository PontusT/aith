import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import HalfColored from '../cv/designs/half_colored/HalfColored';
import CvContainer from '../cv/container/CvContainer';
import SEO from '../components/Seo';
import Delayed from '../hooks/Delayed';

const PdfDownloadButton = React.lazy(() => import('../cv/pdf/PdfDownloadButton'));

const CurriculumVitae = ({ pageContext, data }) => {
  const isSSR = typeof window === 'undefined';

  const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
  `;
  const cvData = pageContext.data;
  const image = data.image.childImageSharp;

  let cvComponent;
  switch (cvData.design) {
    case 'half_colored': {
      cvComponent = <HalfColored data={cvData} image={image} />;
      break;
    }
    default: {
      cvComponent = <div>Not found</div>;
      break;
    }
  }

  return (
    <>
      <SEO title={cvData.seo.metaTitle} description={cvData.seo.metaDescription} />
      <StyledContainer>
        <CvContainer>
          {cvComponent}
          {!isSSR && (
            <Delayed waitBeforeShow={3000}>
              <React.Suspense fallback={<div />}>
                <PdfDownloadButton data={cvData} image={image} />
              </React.Suspense>
            </Delayed>
          )}
        </CvContainer>
      </StyledContainer>
    </>
  );
};

export const query = graphql`
  query ImageQuery($imageName: String) {
    image: file(relativePath: { eq: $imageName }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default CurriculumVitae;
