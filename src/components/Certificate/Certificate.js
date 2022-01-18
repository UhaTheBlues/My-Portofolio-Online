import React from 'react';
import { Section, SectionText, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CertifWrapper } from './CertificateStyles';
import CertifSlider from './CertifSlider';

const Certificate = () =>  (
  <Section id="sertifikat">
    <SectionDivider divider />
      <SectionTitle>Sertifikat</SectionTitle>
      <SectionText>
        Setelah menyelesaikan Kuliah D4, saya mengikuti Course pada www.progate.com. Dibawah ini merupakan beberapa sertifikat yang sudah saya dapatkan:
      </SectionText>
      <CertifWrapper>
        <CertifSlider/>
      </CertifWrapper>
  </Section>
);

export default Certificate;
