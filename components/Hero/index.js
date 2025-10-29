import React from 'react'
import { useRouter } from 'next/router'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => {
  const { basePath } = useRouter()
  const cvHref = `${basePath || ''}/CV-Ing.AlbertoVillarejo.pdf`

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hello World!<br />I´m Alberto Villarejo
          </SectionTitle>
          <SectionText>
            Communications and Information Technology Engineer
          </SectionText>
          <a href={cvHref} target='_blank' rel='noopener noreferrer' download='AlbertoVillarejo-CV.pdf'>
            <Button>Download CV</Button>
          </a>
        </LeftSection>
      </Section>
    </>
  )
}

export default Hero
