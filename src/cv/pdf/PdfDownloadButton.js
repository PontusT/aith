import React from 'react';
import styled from '@emotion/styled';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfCv from './PdfCv';

const PdfDownloadButton = ({ data, image }) => {
  const StyledButton = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: ${data.accentColor};
    padding: 18px 25px 21px 25px;
    border-radius: 7px;
    box-shadow: 0px 0px 11px 2px rgba(0, 0, 0, 0.34);
    a {
      color: white;
      padding: 0;
      margin: 0;
      line-height: 100%;
      font-size: 0.8rem;
    }
  `;

  const PdfDocument = () => <PdfCv data={data} image={image} />;

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const name = data.name.toLowerCase().split(' ').join('_');
  const filename = `${name}_${yyyy}_${mm}_${dd}.pdf`;

  return (
    <StyledButton>
      <PDFDownloadLink document={<PdfDocument />} fileName={filename}>
        {({ loading }) => (loading ? 'Loading PDF...' : 'Download as PDF')}
      </PDFDownloadLink>
    </StyledButton>
  );
};

export default PdfDownloadButton;
