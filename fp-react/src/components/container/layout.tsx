import * as React from "react"
import "./Layout.scss"

export interface LayoutProps {
  /**
   * The tag to use for the layout
   */
  tag?:
    | "section"
    | "div"
    | "main"
    | "header"
    | "footer"
    | "aside"
    | "nav"
  /**
   * The content to render
   */
  children: React.ReactNode
  /**
   * The styles to apply to the layout/container
   */
  styles?: any
  /**
   * The classes to apply to the layout/container
   */
  classes?: string
}

/**
 * The layout component is used to wrap content in a container
 * - Dynamic add tag name
 */
export const Container: React.FC<LayoutProps> = ({
  tag = "section",
  children,
  styles,
  classes,
  ...props
}) => {
  const Tag: any = tag
  return (
    <Tag className={classes} style={styles} {...props}>
      {children}
    </Tag>
  )
}

export interface CardProps extends LayoutProps {
  /**
   * The tag to use for the layout
   */
  elements?: "section" | "div" | "aside" | "article"
}
export const Card: React.FC<CardProps> = ({
  elements = "div",
  children,
  styles,
  classes,
  ...props
}) => {
  const Tag: any = elements
  const defStyles = {
    "--card": "var(--cd-md)"
  }
  return (
    <Tag
      className={classes}
      style={{ ...defStyles, ...styles }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Container
