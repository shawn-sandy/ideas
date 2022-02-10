import React from 'react'
import PropTypes from 'prop-types'
import './img.scss'

/**
 * React Image Element
 * [Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 * [Accessibility Info](https://www.w3.org/TR/wai-aria-practices-1.2/#img)
 */
const Img = ({ src, alt = '', width, height, styles, classes, ...props }) => {
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
  height: PropTypes.string
}

/**
 * Images are displayed in blocks by default
 * The image box wrapper allows you to wrap the image
 * in a the picture and change the display without removing
 * the block display.
 */
export const Fig = ({ children, styles, classes, width, height, ...props }) => {
  const defStyles = {
    '--pic-w': width || '500px',
  }
  return (
    <figure className={classes} style={{ ...defStyles, ...styles }}>
      {children}
    </figure>
  )
}


Fig.propTypes = {
  /**
   * Image content for wrapper
   */

  children: PropTypes.string.isRequired,
  /**
   * The style to apply to `style` attribute
   */
  styles: PropTypes.object,
  /**
   * The classes to apply to the `class` attribute
   */
  classes: PropTypes.string,
  /**
   * The width of the image box
   */

}

export const Caption = ({ children, styles, classes, ...props }) => {
  return (
    <figcaption className={classes} style={styles} {...props}>{children}</figcaption>
  )
}

Caption.propTypes = {
  /**
   * The content of the caption
   */
  children: PropTypes.node,
  /**
   * The styles to apply to the caption
   */
  styles: PropTypes.object,
  /**
   * The classes to apply to the caption
   */
  classes: PropTypes.string
}
