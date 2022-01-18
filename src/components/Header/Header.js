import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { MobileIcon, Icon, Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import {FaBars} from 'react-icons/fa';
 
const Header = ({toggle}) =>  (
  <Container>
    <Div1>
      <Link href="/">
          <Icon src='images/ulogo.png'/> 
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#aboutme">
          <NavLink>Tentang Saya</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#sertifikat">
          <NavLink>Sertifikat</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>   
      <li>
        <Link href="#projectsvideo">
          <NavLink>Video</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/UhaTheBlues">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/muhammad-iwan-ullinuha-9a0619220/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/uhatheblues">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon>
      </Div3>
    </Container>
);

export default Header;
