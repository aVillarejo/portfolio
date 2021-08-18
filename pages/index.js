
import { Layout } from 'layout/Layout'
import { Hero, Projects, BgAnimation } from 'components'
import { Section } from 'styles/GlobalComponents'

export default function Home () {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
    </Layout>
  )
}
