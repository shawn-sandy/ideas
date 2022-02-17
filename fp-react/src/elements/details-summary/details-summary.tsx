import * as React from "react"
import PropTypes from "prop-types"
import "./details-summary.scss"

const Details: React.FC<DetailsProps> = ({
  children,
  classes,
  styles = {},
  ...rest
}) => {
  return (
    <details style={styles} className={classes}>
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
  styles?: any
}

export default Details
