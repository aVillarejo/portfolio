import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          !Hello World!<br />I´m Alberto Villarejo.
        </SectionTitle>
        <SectionText>
          Communications and Information Technology Engineer
        </SectionText>
        <a href='/CV-Ing.AlbertoVillarejo.pdf' target='_blank' download>
          <Button>Download CV</Button>
        </a>
      </LeftSection>
    </Section>
  </>
)

export default Hero
