import * as React from "react"
import "./Layout.scss"

/**
 * The layout component is used to wrap content in a container
 * - Dynamic add tag name
 */
const Layout: React.FC<LayoutProps> = ({
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

interface LayoutProps {
  /**
   * The tag to use for the layout
   */
  tag?:
    | "section"
    | "div"
    | "main"
    | "header"
    | "footer"
    | "article"
    | "aside"
    | "nav"
  children: React.ReactNode
  styles?: any
  classes?: string
}
export default Layout
