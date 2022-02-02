import React from 'react'
import PropTypes from 'prop-types'
import './details-summary.scss'

const Details = ({ content, classes, styles = {}, ...rest }) => {
  return (
    <details style={{ styles }} className={classes}>
      {content}
    </details>
  )
}

export const Summary = ({ summary = 'Summary', summaryClasses, summaryStyles = {}, ...rest }) => {
  return (
    <summary style={{ summaryStyles }} className={summaryClasses} {...rest}>{summary}</summary>
  )
}

Details.propTypes = {

  /**
   * Content to render inside the container
   */
  content: PropTypes.any,
  /**
   * Styles to apply to the container
   */
  styles: PropTypes.object,
  /**
   * Classes to apply to the container
   */
  classes: PropTypes.string

}

Summary.propTypes = {
  /**
   * Summary to display in the summary tag
   */
  summary: PropTypes.string,
  /**
   * Classes to apply to the summary tag
   */
  summaryClasses: PropTypes.string,
  /**
   * Styles to apply to the summary tag
   */
  summaryStyles: PropTypes.object
}

export default Details
