import React from 'react'
import PropTypes from 'prop-types'

const Contain = ({ tag, children, styles, classes, ...props }) => {
  const Tag = (tag) || 'section'
  return (
    <Tag className={classes} style={styles} {...props}>{children}</Tag>
  )
}

Contain.propTypes = {
  tag: PropTypes.oneOf(['section', 'div', 'aside', 'main', 'header', 'footer']),
  children: PropTypes.any,
  styles: PropTypes.object,
  classes: PropTypes.string
}

export const Box = ({ type, children, onClick, ...props }) => {
  return (
    <div>Box</div>
  )
}

export default Contain
