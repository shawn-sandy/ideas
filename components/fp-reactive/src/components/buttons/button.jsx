import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, children, onClick, ...props }) => {
  const demoClick = () => console.log('clicked')
  const styles = {
    fontSize: 'var(--btn-fs, calc(13rem /16))',
    color: 'var(--btn-color, white)',
    backgroundColor: 'var(--btn-bg, blue)',
    display: 'var(--btn-dsp, inline-flex)',
    gap: 'var(--btn-gap, 1rem)',
    minHeight: 'calc(40rem /16 )',
    placeItems: 'var(--btn-place, center)',
    paddingInline: 'var(--btn-px, 2rem)',
    border: 'var(--btn-border, none)',
    cursor: 'var(--btn-cursor, pointer)'
  }

  return (
    <button type={type} style={styles} onClick={onClick || demoClick} {...props}> {children || 'Buttons'}</button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired
}
export default Button
