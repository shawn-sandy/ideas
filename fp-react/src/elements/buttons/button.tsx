import React from "react"
import PropTypes from "prop-types"
import "./button.scss"

type ButtonProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  buttonType?: "button" | "submit" | "reset" | undefined
  click?: () => void
  styles?: React.CSSProperties
}

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
  children = "Default Button",
  click,
  ...props
}: ButtonProps) => {
  const demoClick = () => console.log(`Clicked ${children}`)

  return (
    <button
      type={buttonType}
      style={styles}
      onClick={click || demoClick}
      {...props}
    >
      {" "}
      {children || "Buttons"}
    </button>
  )
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
export default Button
