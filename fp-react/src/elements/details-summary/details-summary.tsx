import * as React from "react"
import "./details-summary.scss"

/**
 * `FpDetailsSummary` React Details Summary element
 *  * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
 */
const Details: React.FC<DetailsProps> = ({
  children,
  classes,
  styles = {},
  toggle,
  ...rest
}) => {
  const toggleElement = (
    event: React.SyntheticEvent<HTMLDetailsElement>
  ) => {
    if (event.currentTarget.open)
      // TODO: Add aria-expanded to the details element
      event.currentTarget.ariaExpanded = "true"
    else event.currentTarget.ariaExpanded = "false"
    // !TEST call toggle function
    if (typeof toggle === "function") toggle(event)
  }

  return (
    <details
      style={styles}
      className={classes}
      onToggle={toggleElement}
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
  /**
   * Children elements
   */
  children: React.ReactNode
  /**
   * Element classes
   */
  classes?: string
  /**
   * Toggle event function
   */
  toggle?: (
    event: React.SyntheticEvent<HTMLDetailsElement>
  ) => void
  /**
   * Styles object
   */
  styles?: any | object
}

export default Details
