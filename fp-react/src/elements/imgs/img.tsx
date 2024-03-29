import * as React from "react"
import "./img.scss"

/**
 * `FpImage` React Image element
 * `FpCaption` : Adds a caption to an image
 * `FpFig` : Adds a figure to an image
 *
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
  ariaLabel,
  ...props
}) => {
  const _onError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (e.currentTarget.src !== imgPlaceholder) {
      e.currentTarget.src = imgPlaceholder // imgError = null
      imgError = () => null
    }
    return new Error(
      `Error loading image - ${e.currentTarget.src}`
    )
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
      aria-label={ariaLabel}
      onLoad={imgLoaded || _onLoad}
      onError={imgError || _onError}
      {...props}
    />
  )
}

export default FpImg

export interface FpImgProps
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
  /**
   * Aria label for the image
   */
  ariaLabel?: string
}

type FpFigProps = {
  children: React.ReactNode
  classes?: string
  styles?: any
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

type FpCaptionProps = {
  children: React.ReactNode
  classes?: string
  styles?: any
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
