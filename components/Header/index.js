import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Container, Div1, Div2, IconsArea, Logo, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <Logo>
          <span style={{ fontSize: '2.5rem' }}>AV</span>
        </Logo>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
    </Div2>
    <IconsArea>
      <SocialIcons target='_blank' href='https://github.com/aVillarejo'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons target='_blank' href='https://www.linkedin.com/in/albertovillarejo'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
    </IconsArea>
  </Container>
)

export default Header
