import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

require('../css/prismtheme.css')

const Title = styled.h1`
  height: 100vh;
  width: 100vw;
  font-size: 5.5rem;
  margin-bottom: 5.5rem;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  background: #485563; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #29323c,
    #485563
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #29323c,
    #485563
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const SmallTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 2rem;
  margin-bottom: -2.5rem;
  font-size: 1.5rem;
`

const MainContent = styled.div`
   {
    margin: 0 auto;
    max-width: 40rem;
    padding: 0;
  }
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
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            this.CODE
          </Link>
        </Title>
      )
    } else {
      header = (
        <MainContent>
          <SmallTitle>
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              this.CODE
            </Link>
          </SmallTitle>
        </MainContent>
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
