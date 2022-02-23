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
export const Layout: React.FC<LayoutProps> = ({
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

export default Layout
