import * as React from "react"
import "./details-summary.scss"

const Details: React.FC<DetailsProps> = ({
  children,
  classes,
  styles = {},
  toggle,
  ...rest
}) => {
  return (
    <details
      style={styles}
      className={classes}
      onToggle={toggle}
      {...rest}
    >
      {children}
    </details>
  )
}

export const Summary: React.FC<DetailsProps> = ({
  children = "Summary",
  classes,
  styles = {},
  ...rest
}) => {
  return (
    <summary style={styles} className={classes} {...rest}>
      {children}
    </summary>
  )
}

interface DetailsProps {
  children: React.ReactNode
  classes?: string
  toggle?: () => void
  styles?: any | object
}

export default Details
