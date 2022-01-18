import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>No. Telp</LinkTitle>
          <LinkItem href="tel:081294843743">081294843743</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:iwanullinuha@gmail.com">
            iwanullinuha@gmail.com
          </LinkItem>
        </LinkColumn> 
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Website ini dibuat menggunakan Next.js</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/UhaTheBlues">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/muhammad-iwan-ullinuha-9a0619220/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/uhatheblues">
          <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
