import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', marginBottom: rhythm(2.5) }}>
        <img
          src={profilePic}
          alt={`Gissur Simonarson`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          <strong>Gissur Simonarson</strong> is an Icelandic developer living in
          the Scottish borders. He works as Senior Solutions Architect at{' '}
          Brightwire.
          <a href="https://twitter.com/gissisim">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
