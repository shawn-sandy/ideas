import React from 'react'
import PropTypes from 'prop-types'

/**
 * Link Element.
 * Provides the heavy lifting for creating links
 * * Adds a click event to the link
 */
const Links = ({ to = '#', classes, styles, title, target, rel, download, children, ...props }) => {
  return (
    <a href={to} className={classes} title
      ={title} style={styles} target={target} rel={rel} {...props}>{children}</a>
  )
}

export const Open = ({ to = '#', classes, styles, title, target, rel, download, children, ...props }) => {
  return (
    <Links to={to} className={classes} title target='_blank' rel='nofollow noopener'>{children}</Links>
  )
}

export default Links

Links.propTypes = {
  /**
   * The url to link to
   */
  to: PropTypes.string.isRequired,
  /**
   * The classes to apply to the link
   */
  classes: PropTypes.string,
  /**
   * The styles to apply to the link
   */
  styles: PropTypes.object,
  /**
   * The title to apply to the link
   */
  title: PropTypes.string,
  /**
   * The target to apply to the link
   */
  target: PropTypes.string,
  /**
   * The rel to apply to the link
   */
  rel: PropTypes.string,
  /**
   * The download to apply to the link
   * @default false
   * @type {Boolean}
   */
  download: PropTypes.bool
}
