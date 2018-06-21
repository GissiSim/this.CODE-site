import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
import {
  Title,
  SmallTitle,
  MainContent,
  StyledLink,
  TitleWrap,
} from '../components/styled/'
import { TwitterIcon } from '../components/icons/'
import styled from 'styled-components'
require('../css/logoeffect.css')
require('../css/prismtheme.css')

const LogoBrackets = styled.strong`
  color: ${props => (props.fp ? 'white' : 'black')};
  font-weight: 500;
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <TitleWrap>
          <Title>
            <StyledLink to={'/'}>
              <LogoBrackets fp>&#123;&#32;</LogoBrackets>this.CODE
              <LogoBrackets fp>&#32;&#125;</LogoBrackets>
              <span>Putting code in context.</span>
            </StyledLink>
          </Title>
        </TitleWrap>
      )
    } else {
      header = (
        <SmallTitle>
          <StyledLink to={'/'}>
            <LogoBrackets>&#123;&#32;</LogoBrackets>this.CODE
            <LogoBrackets>&#32;&#125;</LogoBrackets>
          </StyledLink>
        </SmallTitle>
      )
    }
    return (
      <div>
        {header}
        <MainContent>{children()}</MainContent>
      </div>
    )
  }
}

export default Template
