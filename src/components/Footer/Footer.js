import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, SocialContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialContainer>
        <SocialIcons href="https://github.com/kevinvu0606m">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/kevin-vu-06/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
