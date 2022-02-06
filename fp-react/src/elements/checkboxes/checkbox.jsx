import React from 'react'
import PropTypes from 'prop-types'
import './checkbox.scss'

/**
 * Label element provides a wrapper for checkbox input
 */
export const Label = ({ name, classes, styles = '', children = 'Default Checkbox', ...props }) => {
  return (
    <label htmlFor={name} className={classes} style={{ styles }}  {...props}>{children}</label>
  )
}

const Checkbox = ({ name, classes, styles = '', click, ...props }) => {
  return (
    <input className={classes} styles={styles} type="checkbox" id={name} onClick={click} {...props} />
  )
}

export default Checkbox

Label.propTypes = {
  /**
   * The name of the checkbox required
   */
  name: PropTypes.string.isRequired,
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
