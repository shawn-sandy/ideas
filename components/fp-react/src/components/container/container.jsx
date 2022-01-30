import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ tag, children, styles, classes, ...props }) => {
  const Tag = (tag) || 'section'
  return (
    <Tag className={classes} style={styles} {...props}>{children}</Tag>
  )
}

Container.propTypes = {
  /**
   * Tag to use for the container
   */
  tag: PropTypes.oneOf(['section', 'div', 'aside', 'main', 'header', 'footer']),
  /**
   * Content to render inside the container
   */
  children: PropTypes.any,
  /**
   * Styles to apply to the container
   */
  styles: PropTypes.object,
  /**
   * Classes to apply to the container
   */
  classes: PropTypes.string
}

export default Container
