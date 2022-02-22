import * as React from "react"

export interface FpIconProps {
  /**
   * The title attribute of the icon
   */
  title?: string
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

export const FpIcon: React.FC<FpIconProps> = ({
  title,
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
    >
      <title>{title}</title>
      {children}
    </svg>
  )
}

export default FpIcon
