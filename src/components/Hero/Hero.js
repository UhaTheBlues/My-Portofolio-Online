import React from 'react';

import { Section, SectionText, SectionTitle, } from '../../styles/GlobalComponents';
import { LeftSection, ProfileImage, ProfileWrapper } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hallo, <br />
          Perkenalkan saya Muh. Iwan Ullinuha
        </SectionTitle>
        <ProfileWrapper>
          <ProfileImage src='/images/profilepicture.jpg'/>
          <SectionText>
            Saya merupakan Fresh Graduate yang berasal dari Politeknik Negeri Jakarta, D4-Teknik Informatika.
          </SectionText>
        </ProfileWrapper>
      </LeftSection>
    </Section>
  </>
);

export default Hero;