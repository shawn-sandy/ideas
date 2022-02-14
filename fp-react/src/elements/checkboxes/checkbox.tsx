import React from "react"
import PropTypes from "prop-types"
import "./checkbox.scss"

type LabelProps = {
  children: React.ReactNode
  classes?: string
  name?: string
  styles?: React.CSSProperties
}

/**
 * Label Component provides a wrapper for custom styled checkbox input
 * * Customs styles the default input checkbox
 * * Wraps a label around the checkbox
 * * Adds a click event to the checkbox
 * * Ensured that the label is accessible
 * * Full keyboard accessibility
 * * [Checkbox Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 * * [Accessibility Info](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox)
 */
export const Label = ({
  name,
  classes,
  styles,
  children = "Default Checkbox",
  ...props
}: LabelProps): JSX.Element => {
  return (
    <label
      htmlFor={name}
      className={classes}
      style={styles}
      {...props}
    >
      {children}
    </label>
  )
}

type CheckboxProps = {
  children: React.ReactNode
  classes?: string
  name?: string
  styles?: React.CSSProperties
  click?: () => void
  value?: string
}

const Checkbox = ({
  name,
  value,
  classes,
  styles,
  click,
  ...props
}: CheckboxProps) => {
  return (
    <input
      className={classes}
      style={styles}
      type="checkbox"
      id={name}
      value={value}
      onClick={click}
      {...props}
    />
  )
}

export default Checkbox

Label.propTypes = {
  /**
   * The name of the checkbox required
   */
  name: PropTypes.string.isRequired,
  /**
   * The value of the checkbox required
   */
  value: PropTypes.string.isRequired,
  /**
   * The classes to apply to the checkbox
   */
  classes: PropTypes.string,
  /**
   * The styles to apply to the checkbox
   */
  styles: PropTypes.object,
  /**
   * The content of the checkbox
   */
  children: PropTypes.node
}

Checkbox.propTypes = {
  /**
   * id for the checkbox
   */
  name: PropTypes.string.isRequired,
  /**
   * classes for the checkbox
   */
  classes: PropTypes.string,
  /**
   * styles for the checkbox
   */
  styles: PropTypes.object,
  /**
   * click function for the checkbox
   */
  click: PropTypes.func
}
