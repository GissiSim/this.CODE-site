import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
import { Title, SmallTitle, MainContent } from '../components/styled/'
import { TwitterIcon } from '../components/icons/'
import styled from 'styled-components'
require('../css/prismtheme.css')

const StyledLink = styled(Link)`
  color: ${props => (props.fp ? 'red' : 'black')};
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`
const LogoBrackets = styled.span`
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
        <Title>
          <StyledLink to={'/'}>
            <LogoBrackets fp>&#123;&#32;</LogoBrackets>this.CODE
            <LogoBrackets fp>&#32;&#125;</LogoBrackets>
          </StyledLink>
        </Title>
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
