import React from "react"
import PropTypes from "prop-types"
import "./img.scss"

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
const FpImg: React.VFC<FpImgProps> = ({
  src,
  alt = "",
  fit,
  width,
  height,
  styles,
  classes,
  imgError,
  imgLoaded,
  loading = "lazy",
  ratio = "auto 4 / 3",
  imgPlaceholder = "https://via.placeholder.com/800",
  ...props
}) => {
  const _onError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (e.currentTarget.src !== imgPlaceholder) {
      e.currentTarget.src = imgPlaceholder // imgError = null
      imgError = () => null
    }
    console.log("error", e.currentTarget.src)
  }

  const _onLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.log("Image loaded", e.currentTarget.src)
  }

  const defStyles = {
    "--img-obj-fit": `${fit}`,
    "--img-ratio": `${ratio}`
  }

  return (
    <img
      src={src}
      style={{ ...defStyles, ...styles }}
      width={width}
      height={height}
      loading={loading}
      alt={alt}
      onLoad={imgLoaded || _onLoad}
      onError={imgError || _onError}
      {...props}
    />
  )
}

export default FpImg

interface FpImgProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * set the object-fit style on the image
   */
  fit?: string
  /**
   * Image styles object
   */
  // styles?: string | React.CSSProperties
  styles?: any
  /**
   * Image class names
   */
  classes?: string
  /**
   * Handles the image error event for the image
   */
  imgError?: () => void
  /**
   * Handles the image loaded event for the image
   */
  imgLoaded?: () => void
  /**
   * Sets the image aspect ratio property
   */
  ratio?: string
  /**
   * Sets the image placeholder for image errors
   */
  imgPlaceholder?: string
}

type FpFigProps = {
  children: React.ReactNode
  classes?: string
  styles?: React.CSSProperties
  width?: string
  height?: string
}

/**
 * Images are displayed in blocks by default
 * The image box wrapper allows you to wrap the image
 * in a the picture and change the display without removing
 * the block display.
 */
export const FpFig: React.FC<FpFigProps> = ({
  children,
  styles,
  classes,
  width,
  height,
  ...props
}) => {
  const defStyles = {
    "--pic-w": width || "500px"
  }
  return (
    <figure
      className={classes}
      style={{ ...defStyles, ...styles }}
    >
      {children}
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
  classes: PropTypes.string
  /**
   * The width of the image box
   */
}

type FpCaptionProps = {
  children: React.ReactNode
  classes?: string
  styles?: React.CSSProperties
}

export const FpCaption: React.FC<FpCaptionProps> = ({
  children,
  styles,
  classes,
  ...props
}) => {
  return (
    <figcaption
      className={classes}
      style={styles}
      {...props}
    >
      {children}
    </figcaption>
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