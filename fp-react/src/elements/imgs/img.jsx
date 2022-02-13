import React from 'react'
import PropTypes from 'prop-types'
import './img.scss'

/**
 * `FpImage` React Image element
 * `FpCaption` : Adds a caption to an image
 * `FpFig` : Adds a figure to an image
 *
 * * handle image loading errors
 * * handle image alt text
 * * `fit`: `fill` | `contain` | `cover` | `none` | `scale-down`
 * * loading: how to handle image loading
 * * *TODO*: handle image complete event
 * * [Image Documentation (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 * * [Accessibility Info](https://www.w3.org/TR/wai-aria-practices-1.2/#img)
 */
const FpImg = ({ src, alt = '', fit, width, height, loading = 'lazy', styles, classes, imgError, imgPlaceholder = 'https://via.placeholder.com/800', ...props }) => {

  const _onError = (e) => {
    e.target.src = imgPlaceholder
    // console.log('error', e.target.src)
  }

  const defStyles = {
    '--img-obj-fit': `${fit}`,
  }

  return (
    <img src={ src } style={ { ...defStyles, ...styles } } width={ width } height={ height } loading={ loading } alt={ alt } onError={ imgError || _onError } { ...props } />
  )
}

export default FpImg

FpImg.propTypes = {
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
   * The object-fit style property/rule of the image
   * * default: cover
   * * [Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
   */
  fit: PropTypes.oneOf(['fill', 'contain', 'cover', 'none', 'scale-down']),

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
   * Image loading error handler
   */
  imgError: PropTypes.func,
  /**
   * Image loading placeholder for when the image is not found
   */
  imgPlaceholder: PropTypes.string,
}

/**
 * Images are displayed in blocks by default
 * The image box wrapper allows you to wrap the image
 * in a the picture and change the display without removing
 * the block display.
 */
export const FpFig = ({ children, styles, classes, width, height, ...props }) => {
  const defStyles = {
    '--pic-w': width || '500px',
  }
  return (
    <figure className={ classes } style={ { ...defStyles, ...styles } }>
      { children }
    </figure>
  )
}

FpFig.propTypes = {
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

export const FpCaption = ({ children, styles, classes, ...props }) => {
  return (
    <figcaption className={ classes } style={ styles } { ...props }>{ children }</figcaption>
  )
}

FpCaption.propTypes = {
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

const imgError = (e) => (
  <svg width="1258" height="701" viewBox="0 0 1258 701" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1258" height="701" fill="#EEEEEE" />
  </svg>

)
