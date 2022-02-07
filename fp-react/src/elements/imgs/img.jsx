import React from 'react'
import PropTypes from 'prop-types'


/**
 * React Image Element
 */
const Img = ({ src, alt = '', styles, classes, width, height, ...props }) => {
  return (
    <img src={src} alt={alt} {...props} />
  )
}

export default Img

Img.propTypes = {
  /**
   * The url to the image
   */
  src: PropTypes.string.isRequired,
  /**
   * The alt text for the image
   * @default ''
   */
  alt: PropTypes.string,
  /**
   * The styles to apply to the image
   */
  styles: PropTypes.object,
  /**
   * The classes to apply to the image
   */
  classes: PropTypes.string,
  /**
   * The width of the image
   */
  width: PropTypes.string,
  /**
   * The height of the image
   */
  height: PropTypes.string
}
