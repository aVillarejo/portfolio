import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    cursor: default;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    font-weight: ${props => props.theme.fonts.mainWeight};
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
    font-weight: ${props => props.theme.fonts.titleWeight};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`
export default GlobalStyles
