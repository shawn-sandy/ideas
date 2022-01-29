import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type = 'button', styles = {}, children = 'Default Button', onClick, ...props }) => {
  const demoClick = () => console.log(`Clicked ${children}`)
  const defaultStyles = {
    fontSize: 'var(--btn-fs, calc(13rem /16))',
    color: 'var(--btn-color, white)',
    backgroundColor: 'var(--btn-bg, gray)',
    display: 'var(--btn-dsp, inline-flex)',
    gap: 'var(--btn-gap, 1rem)',
    minHeight: 'calc(40rem /16 )',
    placeItems: 'var(--btn-place, center)',
    paddingInline: 'var(--btn-px, 2rem)',
    border: 'var(--btn-border, none)',
    cursor: 'var(--btn-cursor, pointer)'
  }

  return (
    <button type={type} style={{ ...defaultStyles, ...styles }} onClick={onClick || demoClick} {...props}> {children || 'Buttons'}</button>
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
  onClick: PropTypes.func,
  /**
   * Set the Button type - default is 'button'
   */
  type: PropTypes.string
}
export default Button
