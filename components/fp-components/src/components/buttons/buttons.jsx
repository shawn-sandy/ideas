import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, ...props }) => {
  const demoClick = () => console.log('clicked')
  const styles = {
    back: 'var(bts-bg, lightGray)'
  }

  return (
    <button {...props} onClick={onClick || demoClick} stylt={styles}> {children || 'Button'}</button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
}

export default Button
