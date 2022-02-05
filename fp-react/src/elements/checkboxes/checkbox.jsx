import React from 'react'
import PropTypes from 'prop-types'
import './checkbox.scss'


const Checkbox = ({ id, classes, styles = {}, children = 'Default Checkbox', click, ...props }) => {
  return (
    <label htmlFor={id} {...props}>
      <input className={classes} type="checkbox" id={id} onClick={click} /> {children}
    </label>
  )
}

export default Checkbox

Checkbox.propTypes = {
  /**
   * id for the checkbox
   */
  id: PropTypes.string,
  /**
   * classes for the checkbox
   */
  classes: PropTypes.string,
  /**
   * styles for the checkbox
   */
  styles: PropTypes.object,
  /**
   * label for children   *
   */
  children: PropTypes.any,
  /**
   * click function for the checkbox
   */
  click: PropTypes.func,
}
