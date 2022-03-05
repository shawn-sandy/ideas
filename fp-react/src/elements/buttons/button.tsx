import React from "react"
import PropTypes from "prop-types"

/**
 * Button Element.
 * * Submit, Reset, and Button styles
 * * Disabled state and default styles
 * * [Button documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
 * * [Accessibility Info](https://www.w3.org/TR/wai-aria-practices-1.2/#button)
 */
const Button = ({
  buttonType = "button",
  styles = {},
  classes,
  children = "Default Button",
  click,
  ...props
}: ButtonProps) => {
  const defStyles = {
    paddingInline: "var(--btn-px, 1.4rem)",
    paddingBlock: "var(--btn-py, 0.9rem)",
    display: "var(--btn-dsp, inline-flex)",
    placeItems: "var(--btn-place, center)",
    justifyContent: "var(--btn-justify, center)"
  }

  const demoClick = () => console.log(`Clicked ${children}`)

  return (
    <button
      type={buttonType}
      style={{ ...defStyles, ...styles }}
      onClick={click ?? demoClick}
      className={classes}
      {...props}
    >
      {" "}
      {children}
    </button>
  )
}
export default Button

type ButtonProps = {
  /**
   * Button label/content
   */
  children: React.ReactNode
  /**
   * Button classes
   */
  classes?: string
  /**
   * Set button as disables
   */
  disabled?: boolean
  /**
   * button type
   */
  buttonType?: "button" | "submit" | "reset"
  /**
   * button onClick handler
   */
  click?: () => void
  /**
   * button styles and props
   */
  styles?: object
}

Button.propTypes = {
  /**
   * Button content - use html, text
   */
  children: PropTypes.any,
  /**
   * Button onClick function - use to override default click handler
   */
  click: PropTypes.func,
  /**
   * Set the Button type - default is 'button'
   */
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /**
   * Set the Button styles w/style attribute
   * `{'--btn-bg': 'red', '--btn-color': 'white'}`
   * changes the button background and text color
   */
  styles: PropTypes.object
}
