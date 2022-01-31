import React from 'react'
import PropTypes from 'prop-types'

const DetailsSummary = ({ content, classes, styles = {}, summary = 'Details/Summary Component', summaryClasses, summaryStyles = {}, ...rest }) => {
  const detailStyles = {
    fontSize: 'var(--detail-fs, 1rem)',
    color: 'var(--detail-color, currentColor)',
    paddingBlock: 'var(--detail-pb, 1rem)',
    backgroundColor: 'var(--detail-bg, none)',
    border: 'var(--detail-border, none)',
    cursor: 'var(--detail-cursor, pointer)'
  }
  const summaryStyle = {
    fontSize: 'var(--summary-fs, 1.1rem)',
    color: 'var(--sumary-color, currentColor)',
    paddingBlock: 'var(--summary-pb, 1rem)',
    backgroundColor: 'var(--summary-bg, transparent)',
    listStyle: 'var(--sumary-ls, none)'
  }

  return (
    <details style={{ ...detailStyles, ...styles }} className={classes}>
      <summary style={{ ...summaryStyle, ...styles }} {...rest}>{summary}</summary>
      {content}
    </details>
  )
}

DetailsSummary.propTypes = {

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
  classes: PropTypes.string,
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

export default DetailsSummary
