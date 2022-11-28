import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hii I'm <br />
          Yashkumar Gupta
        </SectionTitle>
        <SectionText>
        My aim is to become a software developer. I'm a logical and organized individual looking to pursue a career in software developement. Looking to start my career as a software developer with a firm driven by technology.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;