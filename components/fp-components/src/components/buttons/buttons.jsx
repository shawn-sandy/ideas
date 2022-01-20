import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, ...props }) => {
  const demoClick = () => console.log('clicked')

  return (
    <button {...props} onClick={onClick || demoClick}> {children || 'Button'}</button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
}

export default Button
