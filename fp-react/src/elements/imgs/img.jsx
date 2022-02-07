import React from 'react'
import PropTypes from 'prop-types'
import './img.scss'


/**
 * React Image Element
 * [Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 * [Accessibility Info](https://www.w3.org/TR/wai-aria-practices-1.2/#img)
 */
const Img = ({ src, alt = '', width, height, styles, classes, srcset, ...props }) => {
  return (
    <img src={src} alt={alt} width={width} height={height} {...props} />
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
  height: PropTypes.string,
  /**
   * The srcset attribute for the image
   */
  srcset: PropTypes.string
}
