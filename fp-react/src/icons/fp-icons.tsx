import * as React from "react"

export interface FpIconProps {
  /**
   * The title attribute of the icon
   */
  title: string
  /**
   * The size of the icon
   */
  size?: string
  /**
   * The height of the icon
   */
  height?: string
  /**
   * The fill color of the icon
   */
  fill?: string
  /**
   * The children react node
   */
  children?: React.ReactNode
}

/**
 * Icon container component
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg)
 * [SVG Accessibility](https://www.w3.org/TR/SVG11/coords.html)
 */
export const FpIcon: React.FC<FpIconProps> = ({
  title = "Icons",
  size,
  height,
  fill,
  children
}) => {
  return (
    <svg
      height={height || size}
      width={size}
      fill={fill}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      aria-labelledby={
        title ? `icon-${title?.replace(" ", "-")}` : ""
      }
    >
      <title
        id={title ? `icon-${title?.replace(" ", "-")}` : ""}
      >
        {title}
      </title>
      {children}
    </svg>
  )
}

export default FpIcon
