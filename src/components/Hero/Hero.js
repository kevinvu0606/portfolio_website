import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

// used global components here because we always need section, section text, section title as opposed to in header which is specific to the header only.

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Kevin Vu
        <br />
        <SectionDivider></SectionDivider>
        Welcome to my Portfolio Page
      </SectionTitle>
      <SectionText>
        Pharmacist turned Software Engineer looking to follow my passion for Software Development and Cloud Technology.
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/kevin-vu-06/', '_blank')}>Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;