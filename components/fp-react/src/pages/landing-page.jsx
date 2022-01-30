import React from 'react'
import PropTypes from 'prop-types'

import Container from '../components/container/container'

const LandingPage = ({ children = 'Add some content here', header = 'Heading Section', footer = 'Footer Section' }) => {
  return (
    <>
      <Container tag='header'>
        {header}
      </Container>

      <Container tag='section'>
        {children}
      </Container>

      <Container tag='footer'>
        {footer}
      </Container>
    </>
  )
}

LandingPage.propTypes = {
  /**
   * Content of the page
   */
  children: PropTypes.any,
  /**
   * Heading of the page
   */
  header: PropTypes.node,
  /**
   * Footer of the page
   */
  footer: PropTypes.any
}

export default LandingPage
